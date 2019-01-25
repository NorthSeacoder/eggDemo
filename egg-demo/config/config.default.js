module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1548322753280_6348';

    // add your config here
    config.middleware = [];

    //配置html模板
    config.view = {
        defaultViewEngine: '.ejs',
        mapping: {
            '.html': 'ejs',
            '.tpl': 'nunjucks',
        }
    }

    return config;
};