require('bootstrap/collapse')
require('base')

header = avalon.define({
    $id: 'header',
    name: config.name,
    index: 0
})


module.exports = function(index, callback) {
    if (index) {
        header.index = index
    }

    if (callback) {
        callback()
    }
}
