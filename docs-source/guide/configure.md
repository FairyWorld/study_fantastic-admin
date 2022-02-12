# 配置

## 环境配置

默认提供三套环境配置，分别为：

- 开发环境 `.env.development`
- 测试环境 `.env.test`
- 生产环境 `.env.production`

:::: code-group

::: code-group-item 开发环境
```dot:no-line-numbers {1-6}
# 页面标题
VITE_APP_TITLE = Fantastic-admin 专业版
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 是否开启代理
VITE_OPEN_PROXY = false
```
:::

::: code-group-item 测试环境
```dot:no-line-numbers {3-8}
NODE_ENV = production

# 页面标题
VITE_APP_TITLE = Fantastic-admin 专业版
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 在构建时删除 console 代码
VITE_BUILD_DROP_CONSOLE = true
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip
# 是否在打包时候生成PWA
VITE_BUILD_PWA = false
```
:::

::: code-group-item 生产环境
```dot:no-line-numbers {3-8}
NODE_ENV = production

# 页面标题
VITE_APP_TITLE = Fantastic-admin 专业版
# 接口请求地址，会设置到 axios 的 baseURL 参数上
VITE_APP_API_BASEURL = /
# 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空
VITE_APP_DEBUG_TOOL =

# 在构建时生成 sourcemap
VITE_BUILD_SOURCEMAP = false
# 在构建时删除 console 代码
VITE_BUILD_DROP_CONSOLE = false
# 在构建时开启压缩，支持 gzip 和 brotli
VITE_BUILD_COMPRESS = gzip,brotli
# 是否在打包时候生成PWA
VITE_BUILD_PWA = false
```
:::

::::

其中高亮部分为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。

开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 [Vite - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 章节。

:::warning 注意
框架在运行状态下时，修改开发环境配置会自动重载，如果没有，请手动重新运行框架即可
:::

## 应用配置（框架配置）

框架提供的相关配置项都存放在 `/src/settings.js` 文件里，开发者可以修改保存查看效果。

同级目录下还有 `/src/settings.custom.json` 这个文件，通常情况下可以无视它（但请勿删除），该文件主要搭配应用配置实时预览功能使用。

```js:no-line-numbers
toolbar: {
    enableAppSetting: true
}
```

即开启以上配置后，开发者可以在框架运行状态下通过可视化的方式实时调整并预览，最终通过提供的复制按钮，将生成好的配置数据复制到该文件中，框架会自动合并两个文件里的配置。