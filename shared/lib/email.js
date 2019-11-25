export default {
    sendMail: async (to, subject, html, fastify) => {
        try {
            const info = await fastify.zoiaMailer.sendMail({
                from: fastify.zoiaConfigSecure.serviceMailbox,
                to,
                subject,
                text: '',
                html,
                attachments: [{
                    filename: 'logo.png',
                    path: `${__dirname}/${fastify.zoiaConfigSecure.pathToLogo}`,
                    cid: 'logo@zoiajs'
                }]
            });
            if (info) {
                return info.messageId;
            }
            return null;
        } catch (e) {
            fastify.log.error(e);
            return null;
        }
    }
};
