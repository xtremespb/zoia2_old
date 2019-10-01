import {
    setupI18n
} from '@lingui/core';
import template from './template.marko';
import russianMessages from '../../../../shared/locales/admin/ru/messages';

const i18n = setupI18n({
    language: 'ru',
    catalogs: {
        ru: russianMessages,
    },
});

export default () => ({
    async handler(req, rep) {
        try {
            const render = await template.render({
                t: {
                    title: i18n.use('ru')._('Add')
                }
            });
            return rep.code(200).type('text/html').send(render.out.stream.str);
        } catch (e) {
            return rep.code(500).send(JSON.stringify({
                statusCode: 500,
                error: 'Internal server error',
                message: e.message
            }));
        }
    }
});
