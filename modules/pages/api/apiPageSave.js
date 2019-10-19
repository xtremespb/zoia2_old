import Ajv from 'ajv';
import {
    ObjectId
} from 'mongodb';
import fs from 'fs-extra';
import {
    minify
} from 'html-minifier';
import Typograf from 'typograf';
import auth from '../../../shared/lib/auth';
import secure from '../../../etc/secure.json';

const site = fs.readJSONSync(`${__dirname}/../etc/site.json`);

const ajv = new Ajv();

const formValidate = ajv.compile({
    type: 'object',
    properties: {
        path: {
            type: 'string',
            maxLength: 128
        },
        filename: {
            type: 'string',
            maxLength: 128
        },
        template: {
            type: 'string',
            maxLength: 64
        }
    },
    required: ['path', 'filename']
});

export default fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                __form_data: {
                    type: 'string'
                }
            },
            required: ['__form_data']
        }
    },
    attachValidation: true,
    async handler(req, rep) {
        // Start of Pre-Validation
        if (req.validationError) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: req.validationError.message
            });
            return rep.code(400).send(JSON.stringify(req.validationError));
        }
        // End of Pre-Validation
        try {
            const formData = JSON.parse(req.body.__form_data);
            // Start of Form Validation
            const formDataValidation = formValidate(formData);
            if (!formDataValidation || (formData.id && (typeof formData.id !== 'string' || !formData.id.match(/^[a-f0-9]+$/)))) {
                const errorData = {
                    form: formDataValidation ? null : (formValidate.errors || {
                        error: 'General validation error'
                    })
                };
                req.log.error({
                    ip: req.ip,
                    path: req.urlData().path,
                    query: req.urlData().query,
                    error: errorData
                });
                return rep.code(400).send(JSON.stringify({
                    statusCode: 400,
                    error: errorData
                }));
            }
            const id = formData.id || null;
            // End of Form Validation
            // Check permissions
            const user = await auth.verifyToken(formData.token, fastify, this.mongo.db);
            if (!user || !user.admin) {
                req.log.error({
                    ip: req.ip,
                    path: req.urlData().path,
                    query: req.urlData().query,
                    error: 'Authentication failed'
                });
                return rep.code(403).send(JSON.stringify({
                    statusCode: 403,
                    error: 'Authentication failed'
                }));
            }
            // End of check permissions
            // Check if such page exists
            if (id) {
                const page = await this.mongo.db.collection('pages').findOne({
                    _id: new ObjectId(id)
                });
                if (!page) {
                    return rep.code(200)
                        .send(JSON.stringify({
                            statusCode: 400,
                            error: 'Page not found'
                        }));
                }
            }
            // Build JSON
            const pageData = {
                filename: formData.filename,
                path: formData.path,
                template: formData.template,
                data: {}
            };
            // Check for duplicates
            const pathReduced = pageData.path.split(/\//).slice(0, -1).join('/') || '/';
            const pathPopped = pageData.path.split(/\//).pop() || '';
            const duplicatePageQuery = {
                $or: [{
                    path: pageData.path,
                    filename: pageData.filename
                }],
            };
            if (pageData.filename) {
                duplicatePageQuery.$or.push({
                    path: `${pageData.path}/${pageData.filename}`,
                    filename: ''
                });
            }
            if (pathPopped && !pageData.filename) {
                duplicatePageQuery.$or.push({
                    path: pathReduced,
                    filename: pathPopped
                });
            }
            if (id) {
                duplicatePageQuery._id = {
                    $ne: new ObjectId(id)
                };
            }
            const duplicatePage = await this.mongo.db.collection('pages').findOne(duplicatePageQuery);
            if (duplicatePage) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        errorCode: 1,
                        error: 'Page with such path or filename already exists'
                    }));
            }
            Object.keys(site.languages).map(language => {
                if (formData[language]) {
                    let contentCompiled = formData[language].content;
                    if (formData[language].extras.indexOf('typo') > -1) {
                        const locale = [];
                        if (language !== 'en') {
                            locale.push(language);
                        }
                        locale.push('en-US');
                        contentCompiled = new Typograf({
                            locale
                        }).execute(formData[language].content);
                    }
                    if (formData[language].extras.indexOf('minify') > -1) {
                        contentCompiled = minify(contentCompiled, {
                            caseSensitive: true,
                            decodeEntities: true,
                            html5: true,
                            collapseWhitespace: true,
                            removeComments: true,
                            removeRedundantAttributes: true
                        });
                    }
                    pageData.data[language] = {
                        title: formData[language].title,
                        content: formData[language].content,
                        contentCompiled
                    };
                }
            });
            pageData.fullPath = `${pageData.path.length > 1 ? pageData.path : ''}/${pageData.filename}`;
            pageData.fullPath = pageData.fullPath.length > 1 ? pageData.fullPath.replace(/\/$/, '') : pageData.fullPath;
            // Update page
            const update = await this.mongo.db.collection('pages').updateOne(id ? {
                _id: new ObjectId(id)
            } : {
                filename: pageData.filename,
                path: pageData.path,
            }, {
                $set: pageData
            }, {
                upsert: true
            });
            // Check result
            if (!update || !update.result || !update.result.ok) {
                return rep.code(200)
                    .send(JSON.stringify({
                        statusCode: 400,
                        error: 'Cannot update page record'
                    }));
            }
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200
                }));
        } catch (e) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: e && e.message ? e.message : 'Internal Server Error',
                stack: secure.stackTrace && e.stack ? e.stack : null
            });
            return rep.code(500).send(JSON.stringify({
                statusCode: 500,
                error: 'Internal server error',
                message: e && e.message ? e.message : null
            }));
        }
    }
});
