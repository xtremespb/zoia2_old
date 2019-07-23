/* eslint no-console:0 */
const colors = require('colors');

const install = async db => {
    console.log(`${colors.green(' * ')} Inserting or updating default page (/)...`);
    await db.collection('pages').updateOne({
        path: '/'
    }, {
        $set: {
            path: '/',
            data: {
                en: {
                    title: 'Home Page',
                    content: 'Zoia has been installed successfully.<br />Go to <a href="/admin">admin panel</a> to get things done.'
                },
                ru: {
                    title: 'Главная',
                    content: 'Инсталляци Zoia успешно завершена.<br />Вы можете перейти к <a href="/admin">панели администратора</a> для завершения настройки.'
                }
            }
        }
    }, {
        upsert: true
    });
};

module.exports = install;
