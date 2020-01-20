import path from 'path';
import fs from 'fs-extra';

export default fastify => ({
    schema: {
        body: {
            type: 'object',
            properties: {
                module: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 64,
                    pattern: '^[a-z0-9]+$'
                },
                answers: {
                    type: 'object'
                },
                token: {
                    type: 'string'
                },
            },
            required: ['module', 'answers', 'token']
        }
    },
    attachValidation: true,
    async handler(req, rep) {
        // Start of Validation
        if (req.validationError) {
            rep.logError(req, req.validationError.message);
            return rep.sendBadRequestException(rep, 'Request validation error', req.validationError);
        }
        // End of Validation
        // Check permissions
        const user = await req.verifyToken(req.body.token, fastify, this.mongo.db);
        if (!user || !user.admin) {
            rep.logError(req, 'Authentication failed');
            return rep.sendUnauthorizedException(rep, {
                default: {
                    username: '',
                    password: ''
                }
            });
        }
        // End of check permissions
        try {
            const testData = await fs.readJSON(path.resolve(`${__dirname}/../data/edu/${req.body.module}_test.json`));
            let correctAnswers = 0;
            testData.test.map((q, qIdx) => {
                const a = req.body.answers[qIdx];
                if (!a) {
                    return;
                }
                if (Array.isArray(a)) {
                    const as = a.map(i => parseInt(i, 10)).sort();
                    const ac = q.correct.map(i => i - 1).sort();
                    if (as.length === ac.length && as.every((value, index) => value === ac[index])) {
                        correctAnswers += 1;
                    }
                } else if (parseInt(a, 10) === q.correct[0] - 1) {
                    correctAnswers += 1;
                }
            });
            // console.log(`Total questions: ${testData.test.length}`);
            // console.log(`Correct answers: ${correctAnswers}`);
            // console.log(`${parseInt((100 / testData.test.length) * correctAnswers, 10)}%`);
            // Send response
            return rep.sendSuccessJSON(rep, {});
        } catch (e) {
            rep.logError(req, null, e);
            return rep.sendInternalServerError(rep, e.message);
        }
    }
});
