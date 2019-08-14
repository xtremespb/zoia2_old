import uuid from 'uuid/v1';
import auth from '../../../shared/api/auth';

export default fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                token: {
                    type: 'string'
                },
                language: {
                    type: 'string',
                    minLength: 2,
                    maxLength: 2
                },
                id: {
                    type: 'integer',
                    minimum: 1
                }
            },
            required: ['token', 'id', 'language']
        }
    },
    attachValidation: true,
    async handler(req, rep) {
        // Start of Validation
        if (req.validationError) {
            req.log.error({
                ip: req.ip,
                path: req.urlData().path,
                query: req.urlData().query,
                error: req.validationError.message
            });
            return rep.code(400).send(JSON.stringify(req.validationError));
        }
        // End of Validation
        // Check permissions
        const user = await auth.verifyToken(req.body.token, fastify, this.mongo.db);
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
        try {
            // Find boat with given ID
            const boatRecord = await this.mongo.db.collection('boats').findOne({
                _id: req.body.id
            });
            if (!boatRecord) {
                return rep.code(400).send(JSON.stringify({
                    statusCode: 400,
                    error: 'Non-existent record'
                }));
            }
            // Prepare boatData
            const boatData = {
                title: boatRecord.name ? String(boatRecord.name) : null,
                type: boatRecord.type ? String(boatRecord.type) : null,
                crew: boatRecord.crew ? String(boatRecord.crew) : null,
                model: boatRecord.model ? String(boatRecord.model) : null,
                byear: boatRecord.byear ? String(boatRecord.byear) : null,
                ryear: boatRecord.ryear ? String(boatRecord.ryear) : null,
                length: boatRecord.length ? String(boatRecord.length) : null,
                power: boatRecord.power ? String(boatRecord.power.value) : null,
                npax: boatRecord.npax ? String(boatRecord.npax) : null,
                beam: boatRecord.beam ? String(boatRecord.beam.value) : null,
                draft: boatRecord.draft ? String(boatRecord.draft.value) : null,
                cabins: boatRecord.cabins ? String(boatRecord.cabins) : null,
                bathrooms: boatRecord.bathrooms ? String(boatRecord.bathrooms) : null,
                showers: boatRecord.showers ? String(boatRecord.showers.value) : null,
                heads: boatRecord.heads ? String(boatRecord.heads) : null,
                dcabins: boatRecord.dcabins ? String(boatRecord.dcabins) : null,
                scabins: boatRecord.scabins ? String(boatRecord.scabins) : null,
                averageprice: boatRecord.averageprice ? String(boatRecord.averageprice) : null,
                caution: boatRecord.caution ? String(boatRecord.caution) : null,
                skipperCost: boatRecord.skipper ? String(boatRecord.skipper.price) : null,
                skipperPer1: boatRecord.skipper ? String(boatRecord.skipper.per) : null,
                skipperPer2: boatRecord.skipper ? String(boatRecord.skipper.per2) : null,
                equipment: boatRecord.charsa,
                avail: [],
                blocks: [],
                prices: [],
                extras: [],
                pics: []
            };
            // Generate discounts
            if (boatRecord.ltdiscounts) {
                boatData.discounts = Object.keys(boatRecord.ltdiscounts).reduce((prev, curr) => [...prev, `${curr}=${boatRecord.ltdiscounts[curr]}`], []).join(', ');
            }
            // Build chars text
            if (boatRecord.chars) {
                const chars = [];
                boatRecord.chars.map(item => {
                    chars.push(`* ${item.name}`);
                    item.chars.map(si => {
                        chars.push(`${si.name}${si.quantity ? `,${si.quantity}` : ''}${si.unit ? `,${si.unit}` : ''}`);
                    });
                });
                boatData.charsText = chars.join('\n');
            }
            // Build a query and get hash for destinations, countries, names
            const bases = {};
            const destinations = {};
            const countries = {};
            if (boatRecord.avail) {
                const queryDest = [];
                const queryBases = [];
                const queryCountries = [];
                boatRecord.avail.map(avail => {
                    if (avail.homeBase && !queryBases.find(f => f._id === avail.homeBase)) {
                        queryBases.push({
                            _id: avail.homeBase
                        });
                    }
                    if (avail.bases && avail.bases.length) {
                        avail.bases.map(b => {
                            if (!queryBases.find(f => f._id === b)) {
                                queryBases.push({
                                    _id: b
                                });
                            }
                        });
                    }
                    if (avail.destinations && avail.destinations.length && !queryDest.find(f => f._id === avail.destinations[0])) {
                        queryDest.push({
                            _id: avail.destinations[0]
                        });
                    }
                    if (avail.countries && avail.countries.length && !queryCountries.find(f => f._id === avail.countries[0])) {
                        queryCountries.push({
                            _id: avail.countries[0]
                        });
                    }
                });
                if (queryDest.length) {
                    const dbDestinations = await this.mongo.db.collection('destinations').find({
                        $or: queryDest
                    }).toArray();
                    if (dbDestinations) {
                        dbDestinations.map(i => {
                            const [
                                en,
                                ru
                            ] = i.name.split(/\|/);
                            const name = req.body.language === 'ru' ? ru || en : en;
                            destinations[i._id] = name;
                        });
                    }
                }
                if (queryCountries.length) {
                    const dbCountries = await this.mongo.db.collection('countries').find({
                        $or: queryCountries
                    }).toArray();
                    if (dbCountries) {
                        dbCountries.map(i => {
                            const [
                                en,
                                ru
                            ] = i.name.split(/\|/);
                            const name = req.body.language === 'ru' ? ru || en : en;
                            countries[i._id] = name;
                        });
                    }
                }
                if (queryBases.length) {
                    const dbBases = await this.mongo.db.collection('bases').find({
                        $or: queryBases
                    }).toArray();
                    if (dbBases) {
                        dbBases.map(i => {
                            const [
                                en,
                                ru
                            ] = i.name.split(/\|/);
                            const name = req.body.language === 'ru' ? ru || en : en;
                            bases[i._id] = name;
                        });
                    }
                }
            }
            // Build avail data
            if (boatRecord.avail && boatRecord.avail.length) {
                boatData.avail = boatRecord.avail.map(item => ({
                    destination: {
                        id: String(item.destinations[0]),
                        name: String(destinations[item.destinations[0]] || '')
                    },
                    country: {
                        id: String(item.countries[0]),
                        name: String(countries[item.destinations[0]] || '')
                    },
                    bases: item.bases.map(b => ({
                        id: String(b),
                        name: String(bases[b] || '')
                    })),
                    homeBase: {
                        id: String(item.homeBase),
                        name: String(bases[item.homeBase] || '')
                    },
                    start: item.start,
                    end: item.end,
                    daystart: String(item.days[0]),
                    m7: item.m7 ? '1' : '0',
                    miniday: String(item.miniday),
                    id: uuid()
                }));
            }
            // Build blocks data
            if (boatRecord.blocksData && boatRecord.blocksData.length) {
                boatData.blocks = boatRecord.blocksData.map(item => ({
                    start: item.start,
                    end: item.end,
                    id: uuid()
                }));
            }
            // Build prices data
            if (boatRecord.prices && boatRecord.prices.length) {
                boatData.prices = boatRecord.prices.map(item => ({
                    cost: String(item.amount),
                    currency: String(item.currency),
                    start: item.start,
                    end: item.end,
                    id: uuid()
                }));
            }
            // Build extras data
            if (boatRecord.extras && boatRecord.extras.length) {
                boatData.extras = boatRecord.extras.map(item => ({
                    name: String(item.name),
                    cost: String(item.price),
                    per1: String(item.per),
                    per2: String(item.per2),
                    options: item.mand === 1 ? {
                        mand: true
                    } : {
                        mand: false
                    },
                    id: uuid()
                }));
            }
            // Build pics data
            if (boatRecord.pics && boatRecord.pics.length) {
                boatData.pics = boatRecord.pics.map(p => ({
                    name: p
                }));
            }
            // Build plans data
            if (boatRecord.plans && boatRecord.plans.length) {
                boatData.plans = boatRecord.plans.map(p => ({
                    name: p
                }));
            }
            // Send response
            return rep.code(200)
                .send(JSON.stringify({
                    statusCode: 200,
                    data: {
                        default: boatData
                    }
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
