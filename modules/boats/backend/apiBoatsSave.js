import Ajv from 'ajv';
import auth from '../../../shared/api/auth';
import cloneDeep from 'lodash/cloneDeep';

const ajv = new Ajv();

const boatValidate = ajv.compile({
    type: 'object',
    properties: {
        token: {
            type: 'string'
        },
        id: {
            type: 'string',
            pattern: '^[0-9]+$'
        }
    },
    required: ['token']
});

const formValidate = ajv.compile({
    type: 'object',
    properties: {
        title: {
            type: 'string',
            maxLength: 64
        },
        type: {
            type: 'string',
            pattern: '^(1|2|3|4|5|10|11|12)$'
        },
        crew: {
            type: 'string',
            pattern: '^(0|1)$',
            maxLength: 1
        },
        model: {
            type: 'string',
            maxLength: 64
        },
        byear: {
            type: 'string',
            pattern: '^[\\d]{4}$'
        },
        ryear: {
            type: 'string',
            pattern: '^([\\d]{4})?$'
        },
        length: {
            type: 'string',
            pattern: '^\\d+(\\.\\d+)?$'
        },
        power: {
            type: 'string',
            maxLength: 32
        },
        npax: {
            type: 'string',
            pattern: '^[\\d]+$'
        },
        beam: {
            type: 'string',
            pattern: '^\\d+(\\.\\d+)?$'
        },
        draft: {
            type: 'string',
            pattern: '^\\d+(\\.\\d+)?$'
        },
        cabins: {
            type: 'string',
            pattern: '^[\\d]+$'
        },
        bathrooms: {
            type: 'string',
            pattern: '(^[\\d]+)?$'
        },
        showers: {
            type: 'string',
            pattern: '(^[\\d]+)?$'
        },
        heads: {
            type: 'string',
            pattern: '(^[\\d]+)?$'
        },
        dcabins: {
            type: 'string',
            pattern: '(^[\\d]+)?$'
        },
        scabins: {
            type: 'string',
            pattern: '(^[\\d]+)?$'
        },
        dberth: {
            type: 'string',
            pattern: '(^[\\d]+)?$'
        },
        averageprice: {
            type: 'string',
            pattern: '^(\\d+(\\.\\d+)?)?$'
        },
        caution: {
            type: 'string',
            pattern: '^(\\d+(\\.\\d+)?)?$'
        },
        discounts: {
            type: 'string',
            maxLength: 1024
        },
        skipperCost: {
            type: 'string',
            pattern: '^(\\d+(\\.\\d+)?)?$'
        },
        skipperPer1: {
            type: 'string',
            pattern: '^(stay|day|week)?$'
        },
        skipperPer2: {
            type: 'string',
            pattern: '^(boat|pax)?$'
        },
        chars: {
            type: 'string',
            maxLength: 8192
        },
        equipment: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        avail: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    destination: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string',
                                pattern: '^[\\d]+$'
                            }
                        },
                        required: ['id']
                    },
                    country: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string',
                                pattern: '^[\\d]+$'
                            }
                        },
                        required: ['id']
                    },
                    bases: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'string',
                                    pattern: '^[\\d]+$'
                                }
                            },
                            required: ['id']
                        }
                    },
                    homeBase: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string',
                                pattern: '^[\\d]+$'
                            }
                        },
                        required: ['id']
                    },
                    daystart: {
                        type: 'string',
                        pattern: '^(0|1|2|3|4|5|6|7)$'
                    },
                    m7: {
                        type: 'string',
                        pattern: '^(0|1)$'
                    },
                    start: {
                        type: 'string',
                        format: 'date-time'
                    },
                    end: {
                        type: 'string',
                        format: 'date-time'
                    }
                },
                required: ['destination', 'country', 'bases', 'homeBase', 'daystart', 'm7', 'start', 'end']
            }
        },
        blocks: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    start: {
                        type: 'string',
                        format: 'date-time'
                    },
                    end: {
                        type: 'string',
                        format: 'date-time'
                    }
                },
                required: ['start', 'end']
            }
        },
        prices: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    start: {
                        type: 'string',
                        format: 'date-time'
                    },
                    end: {
                        type: 'string',
                        format: 'date-time'
                    },
                    cost: {
                        type: 'string',
                        pattern: '^(\\d+(\\.\\d+)?)?$'
                    },
                    currency: {
                        type: 'string',
                        pattern: '^(RUR|EUR|USD)$'
                    }
                },
                required: ['start', 'end', 'cost', 'currency']
            }
        },
        extras: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        maxLength: 64
                    },
                    cost: {
                        type: 'string',
                        pattern: '^(\\d+(\\.\\d+)?)?$'
                    },
                    per1: {
                        type: 'string',
                        pattern: '^(stay|day|week)$'
                    },
                    per2: {
                        type: 'string',
                        pattern: '^(boat|pax)$'
                    },
                    options: {
                        type: 'object',
                        properties: {
                            mand: {
                                type: 'boolean'
                            }
                        },
                        required: ['mand']
                    },
                },
                required: ['name', 'cost', 'per1', 'per2']
            }
        },
        pics: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        name: 'string'
                    }
                },
                required: ['name']
            }
        },
        plans: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        name: 'string'
                    }
                },
                required: ['name']
            }
        },
    },
    required: ['title', 'type', 'crew', 'model', 'byear', 'length', 'power', 'npax', 'beam', 'draft', 'cabins', 'averageprice']
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
            const boatDataValidation = boatValidate(formData);
            const formDataValidation = formValidate(formData.default);
            if (!boatDataValidation || !formDataValidation || (formData.id && (typeof formData.id !== 'string' || !parseInt(formData.id, 10) || parseInt(formData.id, 10) < 1))) {
                const errorData = {
                    boat: boatDataValidation ? undefined : (boatValidate.errors || {
                        error: 'General validation error'
                    }),
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
            let id = formData.id ? parseInt(formData.id, 10) : null;
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
            // Check if such boat exists
            if (id) {
                const boat = await this.mongo.db.collection('boats').findOne({
                    _id: id
                });
                if (!boat) {
                    return rep.code(200)
                        .send(JSON.stringify({
                            statusCode: 400,
                            errors: {
                                default: {
                                    name: 'Boat not found'
                                }
                            }
                        }));
                }
            }
            // Get next ID if required
            if (!id) {
                await this.mongo.db.collection('counters').updateOne({
                    _id: 'boats'
                }, {
                    $setOnInsert: {
                        seq: 1000000
                    }
                }, {
                    upsert: true
                });
                const incr = await this.mongo.db.collection('counters').findOneAndUpdate({
                    _id: 'boats'
                }, {
                    $inc: {
                        seq: 1
                    },
                }, {
                    new: true,
                    upsert: true
                });
                if (!incr || !incr.value || !incr.value.seq) {
                    throw new Error('Could not get ID for a record');
                }
                id = incr.value.seq;
            }
            // Build JSON
            const boatData = {
                avail: [],
                averageprice: parseFloat(formData.default.averageprice),
                bathrooms: formData.default.bathrooms ? parseInt(formData.default.bathrooms, 10) : null,
                beam: {
                    value: parseFloat(formData.default.beam),
                    unit: 'meters'
                },
                blocks: [],
                byear: parseInt(formData.default.byear, 10),
                cabins: parseInt(formData.default.cabins, 10),
                caution: formData.default.caution ? parseFloat(formData.default.caution) : null,
                cautionsi: null,
                chars: [],
                charsa: formData.default.equipment.map(e => parseInt(e, 10)),
                charsr: {},
                crew: formData.default.crew === '1' ? 1 : 0,
                dberth: formData.default.dberth ? parseInt(formData.default.dberth, 10) : null,
                dcabins: formData.default.dcabins ? parseInt(formData.default.dcabins, 10) : null,
                draft: {
                    value: parseFloat(formData.default.draft),
                    unit: 'meters'
                },
                extras: [],
                heads: formData.default.heads ? parseInt(formData.default.heads, 10) : null,
                length: parseFloat(formData.default.length),
                ltdiscounts: {},
                model: formData.default.model,
                name: formData.default.name,
                npax: parseInt(formData.default.npax, 10),
                operatorId: 0,
                power: {
                    value: parseFloat(formData.default.power),
                    unit: 'HP'
                },
                prices: [],
                ryear: formData.default.ryear ? parseInt(formData.default.ryear, 10) : null,
                scabins: formData.default.scabins ? parseInt(formData.default.scabins, 10) : null,
                showers: formData.default.showers ? {
                    value: parseInt(formData.default.showers, 10),
                    unit: null
                } : null,
                skipper: formData.default.skipperCost && formData.default.skipperPer1 && formData.default.skipperPer2 ? {
                    price: parseFloat(formData.default.skipperCost),
                    per: formData.default.skipperPer1,
                    per2: formData.default.skipperPer2
                } : null,
                type: parseInt(formData.default.type, 10),
            };
            // Availability
            if (formData.default.avail) {
                boatData.avail = formData.default.avail.map(item => ({
                    homeBase: parseInt(item.homeBase.id, 10),
                    start: new Date(item.start),
                    end: new Date(item.end),
                    days: [parseInt(item.daystart, 10)],
                    m7: item.m7 === '1',
                    miniday: 7, // TODO Probably this needs to be imported, too
                    bases: item.bases.map(b => parseInt(b.id, 10)),
                    countries: [parseInt(item.country.id, 10)],
                    destinations: [parseInt(item.destination.id, 10)],
                    oneway: {}
                }));
            }
            // Blocks
            if (formData.default.blocks) {
                boatData.blocks = formData.default.blocks.map(item => ({
                    start: new Date(item.start),
                    end: new Date(item.end)
                }));
            }
            // Extras
            if (formData.default.extras) {
                boatData.extras = formData.default.extras.map((item, i) => ({
                    id: new Date().getTime() + i,
                    idbt: new Date().getTime() + i,
                    name: item.name,
                    price: parseFloat(item.cost),
                    per: item.per1,
                    per2: item.per2,
                    quantity: 1,
                    mand: item.options.mand,
                    payatbase: 0,
                    rate: 0,
                    typeopt: '',
                    pricemin: 0,
                    country: 0
                }));
            }
            // Prices
            if (formData.default.prices) {
                boatData.prices = formData.default.prices.map((item) => ({
                    start: new Date(item.start),
                    end: new Date(item.end),
                    amount: parseFloat(item.cost),
                    currency: item.currency,
                    unit: 'week'
                }));
            }
            // Discounts
            if (formData.default.discounts) {
                formData.default.discounts.replace(/[^0-9=,]+/gm, '').split(',').map(d => {
                    const [a, p] = d.split(/=/);
                    if (a && p && parseInt(a, 10) && parseFloat(p)) {
                        boatData.ltdiscounts[a] = parseFloat(p);
                    }
                });
            }
            // Equipment hash
            if (formData.default.equipment) {
                formData.default.equipment.map(e => {
                    boatData.charsr[e] = true;
                });
            }
            // Characteristics
            if (formData.default.charsText) {
                const lines = formData.default.charsText.split(/\n/);
                const currentItem = {
                    name: null,
                    chars: []
                };
                let closed;
                lines.map((line, i) => {
                    if (line.match(/^\*/)) {
                        const title = line.replace(/^\*/, '').trim();
                        if (currentItem.name === null) {
                            currentItem.name = title;
                            closed = false;
                        } else {
                            boatData.chars.push(cloneDeep(currentItem));
                            currentItem.name = title;
                            currentItem.chars = [];
                            closed = true;
                        }
                    } else {
                        const [name, quantity, unit] = line.split(/,/);
                        currentItem.chars.push({
                            id: new Date().getTime() + i,
                            idbt: new Date().getTime() + i,
                            name: name || '',
                            quantity: quantity || '',
                            unit: unit || ''
                        });
                        closed = false;
                    }
                });
                if (!closed) {
                    currentItem.name = currentItem.name || '';
                    boatData.chars.push(currentItem.slice(0));
                }
            }
            // Update boat
            // const update = await this.mongo.db.collection('boats').updateOne({
            //     _id: id
            // }, {
            //     $set: {
            //         name: `${formData.default.name}${formData.default.name_ru ? `|${formData.default.name_ru}` : ''}`,
            //         name_ru: formData.default.name_ru,
            //         id_dest: parseInt(formData.default.destination, 10),
            //         id_country: parseInt(formData.default.country, 10)
            //     }
            // }, {
            //     upsert: true
            // });
            // Check result
            // if (!update || !update.result || !update.result.ok) {
            //     return rep.code(200)
            //         .send(JSON.stringify({
            //             statusCode: 400,
            //             error: 'Cannot update databoat record'
            //         }));
            // }
            return rep.code(400)
                .send(JSON.stringify({
                    statusCode: 400
                }));
        } catch (e) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: e
            });
            return rep.code(500).send(JSON.stringify({
                statusCode: 500,
                error: 'Internal server error',
                message: e.message
            }));
        }
    }
});
