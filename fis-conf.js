fis.config.set('project.name', 'efis-template');

//modules下html不发布
fis.config.get('roadmap.path').unshift({
    reg: /^\/modules\/(.*)\.(html)$/i,
    release: false
});
//公共js打包在一起
fis.config.set('pack', {
    'pkg/lib.js': [
        '/static/mod/mod.js',
        '/static/jquery/jquery.js',
        '/modules/avalon/avalon.js'
    ]
});


fis.config.merge({
    deploy: {
        //使用fis release --dest page来使用这个配置
        page: {
            //如果配置了receiver，fis会把文件逐个post到接收端上
            receiver: 'http://10.20.140.61/receiver.php',
            //从产出的结果的static目录下找文件
            from: '/choiceness',
            //保存到远端机器的/home/fis/www/static目录下
            //这个参数会跟随post请求一起发送
            to: '/release/'
            //通配或正则过滤文件，表示只上传所有的js文件
            //include: '**.js',
            //widget目录下的那些文件就不要发布了
            //exclude: /\/widget\//i,
            //支持对文件进行字符串替换
            // replace: {
            //     from: 'http://www.online.com',
            //     to: 'http://www.offline.com'
            // }
        },
        static:{
        	receiver: 'http://10.20.140.61/receiver.php',
        	from: '/static',
        	to:'/release/'
        }
    }
});
