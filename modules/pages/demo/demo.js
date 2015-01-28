require('base')
require('ui/header')(0)
require('avalon/loading')
require('avalon/mmState')


var WebUploader = require('uploader')

var uploader = WebUploader.create({

    // swf文件路径
    swf: __uri('/modules/uploader/uploader.swf'),

    // 文件接收服务端。
    server: 'http://webuploader.duapp.com/server/fileupload.php',

    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#picker',

    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
    resize: false
});

var model = avalon.define({
    $id: 'content',
    loading: true
})

setTimeout(function() {
    model.loading = false
}, 3e3)
