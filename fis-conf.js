fis.config.set('project.name', 'efis-template')

//modules下html不发布
fis.config.get('roadmap.path').unshift({
    reg: /^\/modules\/(.*)\.(html)$/i,
    release: false
})

//自动打包处理策略 https://github.com/hefangshi/fis-postpackager-simple/blob/master/README.md
//公共js打包在一起
fis.config.set('pack', {
    'pkg/lib.js': [
        '/static/mod/mod.js',
        '/static/jquery/jquery.js',
        '/modules/avalon/avalon.js'
    ]
})

fis.config.merge({
    deploy: {
        //使用 efis release -d page,static 来使用这个配置
        page: {
            //如果配置了receiver，fis会把文件逐个post到接收端上
            receiver: 'http://10.2.57.168:8999/receiver',
            //从产出的结果的static目录下找文件
            from: '/' + fis.config.get('project.name'),
            //保存到远端机器的/release/目录下
            to: '/inetpub/wwwroot'
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
        'static': {
            receiver: 'http://10.2.57.168:8999/receiver',
            from: '/static/' + fis.config.get('project.name'),
            to: '/inetpub/wwwroot/static'
        }
    }
})
