import auth from './auth';
import locale from './locale';
import catalogs from '../utils/lingui-catalogs-node';
import site from '../../etc/site.json';

export default {
    getSiteData: async (req, fastify, db) => {
        const navTree = [{
                "data": {
                    "en": {
                        "title": "Item 1"
                    }
                },
                "id": "it1",
                "key": "37ede790ea8c11e9a360bf83eacc49f9",
                "children": [{
                        "data": {
                            "en": {
                                "title": "i1S1"
                            },
                            "ru": {
                                "title": "И1С1"
                            }
                        },
                        "id": "i1s1",
                        "key": "e487baa0eaa311e985376178a6a31867"
                    },
                    {
                        "data": {
                            "en": {
                                "title": "I1С2"
                            },
                            "ru": {
                                "title": "И1С2"
                            }
                        },
                        "id": "i1S2",
                        "key": "ef0ebc80eaa311e985376178a6a31867"
                    },
                    {
                        "data": {
                            "en": {
                                "title": "I1S3"
                            },
                            "ru": {
                                "title": "И1С3"
                            }
                        },
                        "id": "i1s3",
                        "key": "7545c7e0eaad11e9843fbbb249a5b224"
                    },
                    {
                        "data": {
                            "en": {
                                "title": "I1S4"
                            },
                            "ru": {
                                "title": "И1С4"
                            }
                        },
                        "id": "i1s4",
                        "key": "bd908e40eaad11e9843fbbb249a5b224"
                    }
                ]
            },
            {
                "data": {
                    "en": {
                        "title": "Ch 1"
                    },
                    "ru": {
                        "title": "Ч 1"
                    }
                },
                "id": "c1",
                "key": "8bc3bce0ea8d11e9a360bf83eacc49f9",
                "children": [{
                        "data": {
                            "en": {
                                "title": "c1"
                            },
                            "ru": {
                                "title": "ч1"
                            }
                        },
                        "id": "c1",
                        "key": "00323a40ea9111e9ae699f70cc225875",
                        "children": [{
                                "data": {
                                    "en": {
                                        "title": "c11"
                                    },
                                    "ru": {
                                        "title": "ч11"
                                    }
                                },
                                "id": "c11",
                                "key": "0ba522c0ea9111e9ae699f70cc225875",
                                "children": [{
                                        "data": {
                                            "en": {
                                                "title": "DEF"
                                            }
                                        },
                                        "id": "def",
                                        "key": "13c7bf10eaa211e98d2281cc14332ccb"
                                    },
                                    {
                                        "data": {
                                            "en": {
                                                "title": "HEY!"
                                            }
                                        },
                                        "id": "hey",
                                        "key": "3cbf1cb0eaa211e98d2281cc14332ccb"
                                    }
                                ]
                            },
                            {
                                "data": {
                                    "en": {
                                        "title": "ABC"
                                    }
                                },
                                "id": "abc",
                                "key": "fdd54ec0eaa111e98d2281cc14332ccb"
                            },
                            {
                                "data": {
                                    "en": {
                                        "title": "ABC!"
                                    }
                                },
                                "id": "abc",
                                "key": "08709bf0eaa211e98d2281cc14332ccb"
                            },
                            {
                                "data": {
                                    "en": {
                                        "title": "TEST!"
                                    }
                                },
                                "id": "test",
                                "key": "40759500eaa211e98d2281cc14332ccb"
                            },
                            {
                                "data": {
                                    "en": {
                                        "title": "Another Test"
                                    }
                                },
                                "id": "at",
                                "key": "2c6ec0b0eaa511e985376178a6a31867"
                            }
                        ]
                    },
                    {
                        "data": {
                            "en": {
                                "title": "AAAABBBCCC"
                            }
                        },
                        "id": "abc",
                        "key": "0fe79eb0eaa211e98d2281cc14332ccb"
                    },
                    {
                        "data": {
                            "en": {
                                "title": "RS!"
                            },
                            "ru": {
                                "title": "РуСС1"
                            }
                        },
                        "id": "rs1",
                        "key": "c66d4710eaa311e985376178a6a31867",
                        "children": [{
                            "data": {
                                "en": {
                                    "title": "Subjm!"
                                },
                                "ru": {
                                    "title": "Саб111"
                                }
                            },
                            "id": "s1",
                            "key": "d001f9b0eaa311e985376178a6a31867"
                        }]
                    },
                    {
                        "data": {
                            "en": {
                                "title": "AI!"
                            },
                            "ru": {
                                "title": "АИ!"
                            }
                        },
                        "id": "ai",
                        "key": "f71f1910eaa311e985376178a6a31867"
                    },
                    {
                        "data": {
                            "en": {
                                "title": "C1 SN"
                            },
                            "ru": {
                                "title": "Ц1 СН"
                            }
                        },
                        "id": "c1Sn",
                        "key": "c74e9ad0eaad11e9843fbbb249a5b224"
                    }
                ]
            },
            {
                "data": {
                    "en": {
                        "title": "Test1"
                    }
                },
                "id": "test",
                "key": "3a8f3f00ea8f11e99331157d327c9ed2"
            },
            {
                "data": {
                    "en": {
                        "title": "I1SI1"
                    },
                    "ru": {
                        "title": "И1СИ1"
                    }
                },
                "id": "i1si1",
                "key": "6d74b3b0eaac11e98cffbf3f6ad5835a"
            },
            {
                "data": {
                    "en": {
                        "title": "Root1"
                    },
                    "ru": {
                        "title": "Корень1"
                    }
                },
                "id": "r1",
                "key": "e1d8ff40eaac11e9843fbbb249a5b224"
            },
            {
                "data": {
                    "en": {
                        "title": "Root 2"
                    },
                    "ru": {
                        "title": "Корень 2"
                    }
                },
                "id": "r2",
                "key": "ef02bf80eaac11e9843fbbb249a5b224",
                "children": [{
                        "data": {
                            "en": {
                                "title": "R2S1"
                            },
                            "ru": {
                                "title": "К2С1"
                            }
                        },
                        "id": "r2s1",
                        "key": "7daa10d0eaad11e9843fbbb249a5b224"
                    },
                    {
                        "data": {
                            "en": {
                                "title": "R2S2"
                            },
                            "ru": {
                                "title": "К2С2"
                            }
                        },
                        "id": "r2s2",
                        "key": "dbbfc250eaad11e9843fbbb249a5b224"
                    }
                ]
            },
            {
                "data": {
                    "en": {
                        "title": "Root 3"
                    },
                    "ru": {
                        "title": "Корень 3"
                    }
                },
                "id": "r3",
                "key": "d0ea5250eaad11e9843fbbb249a5b224"
            },
            {
                "data": {
                    "en": {
                        "title": "NRT1"
                    }
                },
                "id": "nrt1",
                "key": "88431a30eb5411e9b70e035f5a0be2b5",
                "children": [{
                        "data": {
                            "en": {
                                "title": "NRT1 C1"
                            }
                        },
                        "id": "nrt1c1",
                        "key": "8c7e79f0eb5411e9b70e035f5a0be2b5"
                    },
                    {
                        "data": {
                            "en": {
                                "title": "NRT1 C2"
                            },
                            "ru": {
                                "title": "НРТ1 Ц2"
                            }
                        },
                        "id": "nrt1c2",
                        "key": "94b486f0eb5411e9b70e035f5a0be2b5"
                    }
                ]
            }
        ];
        const user = await auth.getUserData(req, fastify, db);
        const languagesArr = Object.keys(site.languages);
        const {
            languages
        } = site;
        const language = locale.getLocaleFromURL(req);
        const t = catalogs(language);
        const title = locale.getSiteTitle(language);
        const languagesURL = {};
        languagesArr.map(lang => languagesURL[lang] = locale.getLocaleURL(lang, req));
        return {
            navTree,
            user,
            language,
            languages,
            languagesArr,
            languagesURL,
            t,
            title
        };
    }
};
