require('base')
require('avalon/camera')

function setCamera(id, data, useLink) {

    var model = avalon.define({
        $id: id,
        $opt: {
            adaptiveWidth: true,
            adaptiveHeight: true,
            alwaysShowArrow: false,
            timeout: 5000,
            effect: 'random',
            useLink: useLink,
            pictures: data
        }
    })

    document.getElementById(id).removeAttribute('ms-skip')

    avalon.scan()
}

module.exports = function(id, data) {
    if (!id) {
        id = 'banner'
    }
    if (data) {
        setCamera(id, data)
    } else {
        $.getJSON(config.api.banner).done(function(data) {
            if (!data || !data.result.length) {
                return
            }

            setCamera(id, data.result, true)
        })
    }
}
