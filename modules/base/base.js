require('base/config')

window.console = window.console || (function() {
    var c = {}
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {}
    return c
})()

/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

;(function() {
    'use strict'
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }

})()

//fix ie indexOf
;(function() {
    if (!Array.indexOf) {
        Array.prototype.indexOf = function(obj) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == obj) {
                    return i
                }
            }
            return -1
        }
    }
})()

//ie8&ie9支持CORS
;(function() {
    if (!$.support.cors) { 
        require.async('jquery/jquery.ie.cors')
    }
})()

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.format = function(fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
         fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    return fmt
}

//addDays
Date.prototype.addDays = function(days) {
    return new Date(this.getTime() + days * 24 * 60 * 60 * 1000)
}


//fix IE7,IE8
String.prototype.toDate = function() {
    return new Date(Date.parse(this.replace(/-/g, "/")))
}

String.prototype.format = function(args) {
    var result = this
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof(args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g")
                    result = result.replace(reg, args[key])
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g")
                    result = result.replace(reg, arguments[i])
                }
            }
        }
    }
    return result
}


$.hashParam = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    var r = location.hash.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}

//除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
Math.divide = function(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1, r2
    try {
        t1 = arg1.toString().split(".")[1].length
    } catch (e) {}
    try {
        t2 = arg2.toString().split(".")[1].length
    } catch (e) {}
    with(Math) {
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * pow(10, t2 - t1)
    }
}
