efis-pure-template
=====================================

efis-pure-template是基于efis-pure的应用模板。

## 安装efis-pure-template

### 安装lights-FIS包管理工具，用于安装efis-pure-template
```bash
npm install -g lights
```
### 安装efis-pure-template，首先进入要存放的文件目录
```bash
lights install efis-pure-template
```

## 安装efis-pure，用于开发时编译调试

```bash
npm install -g efis-pure
```

安装成功后执行 ``efis -h`` 即可看到相关开发命令帮助

## 让代码跑起来！

首先，启动内置的调试服务器：

```bash
efis server start
```

此时fis会启动一个精巧的jetty服务器，并且打开浏览器访问了 http://127.0.0.1:8080 ，现在这个调试环境什么也没有，接下来，我们在命令行下cd到我们下载的样例项目中：

```bash
cd efis-pure-template
```

第三步，执行fis的编译命令：

```bash
efis release -wL
```

第四步，刷新浏览器，查看我们的项目。

可以看到所有的模块化资源均已自动加载进来了

第五步，优化性能

虽然目前项目可以正常运行，但是这种加载方式会造成连接数过多，让我们调整参数，对资源进行自动合并压缩MD5

```bash
efis release -opm
```

再次浏览页面，我们可以发现原有的大量静态资源已经自动合并。

## 目录规范

efis-pure自带了一个目录规范

* 所有组件化的脚本、样式、图片均放在modules目录中，可以按照组件划分目录，非模块化的脚本放在lib目录中。
* pages目录下的页面文件会发布到项目根目录，静态资源会发布到static目录。

任何 ``目录规范``、``部署规范``、``编译规范`` 都是可配置的（[配置代码](https://github.com/scottleo/efis-pure/blob/master/efis.js#L27-L74)）。

> 如果希望调整目录规范，建议将[配置代码](https://github.com/scottleo/efis-pure/blob/master/efis.js#L27-L74)中roadmap.path的部分整体复制到项目的fis-conf.js中再进行调整，避免配置不符合预期的问题。

内置的规范包括：

1. ``modules`` 目录下的js、css、less文件都是模块化文件，脚本会自动包装define，无需手动添加。使用require.async或者require加载模块的时候id与文件的对应规则是这样的：
<table>
    <tr>
        <td>文件</td>
        <td>引用id</td>
        <td>举个例子</td>
    </tr>
    <tr>
        <td>/modules/main.js</td>
        <td>main</td>
        <td>var main = require('main');</td>
    </tr>
    <tr>
        <td>/modules/jquery/jquery.js</td>
        <td>jquery</td>
        <td>var $ = require('jquery');</td>
    </tr>
    <tr>
        <td>/modules/jquery/jquery.scroll.js</td>
        <td>jquery/jquery.scroll</td>
        <td>require('jquery/jquery.scroll');</td>
    </tr>
    <tr>
        <td>/modules/ui/header/header.js</td>
        <td>jquery</td>
        <td>var $ = require('ui/header');</td>
    </tr>
</table>

1.  ``static`` 目录下的文件不被认为是模块化的，请直接在页面上使用script或link标签引用。

### 配置

参考[fis配置](http://fis.baidu.com/docs/api/fis-conf.html)

## 更多资料

* [fis](https://github.com/fex-team/fis)
* [fis-plus](https://github.com/fex-team/fis-plus)
* [gois](https://github.com/xiangshouding/gois)
* [spmx](https://github.com/fouber/spmx/)
* [phiz](https://github.com/fouber/phiz/)
