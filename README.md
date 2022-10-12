这是配置了基础环境的uniapp项目，可直接下载后使用。

## 安装依赖

由于此模板是通过 `hBuilderX` 创建的，但并未将 `uni_modules` 同步管理，但有一些基础依赖，需要自行前往[插件市场](https://ext.dcloud.net.cn/)进行安装。当前所需依赖如下：

|依赖包|文档地址|
|-|-|
|[uViewUI](https://ext.dcloud.net.cn/plugin?id=1593)|[https://www.uviewui.com/](https://www.uviewui.com/)|

## 接口地址配置

由于是 `hBuilderX` 创建的项目，是不具有 `vue-cli` 读取 `.env` 文件的能力的。由于每个项目的基础地址都不同，因此此模板依然需要在项目根目录有一个 `env.js` 文件来获取接口的 `BASE_URL` ，请在 `env.js` 中将 `BASE_URL` 导出。

## 拦截器配置

当前项目的请求拦截配置在 `utils/request.js` 中，但各个项目的配置需求并不一致，因此开始使用前，可能需要与后端开发人员协商后确定如何配置。

