/*
 * 项目配置文件
 */
var c = {
    name: 'efis-pure-template',
    api: {
        banner: __uri('/tests/banners.json')
    }
};

//debug
if (location.href.indexOf('8080') > -1) {
    c.name = 'efis-pure-template-dev';
}

window.config = c;
