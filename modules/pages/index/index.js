require('base')
require('ui/header')(0)
require('avalon/loading')

var model = avalon.define({
    $id: 'content',
    loading: true

})

setTimeout(function() {
    model.loading = false
}, 3e3)
