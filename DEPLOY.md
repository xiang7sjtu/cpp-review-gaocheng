# 部署与国内访问说明

`dist` 是完整发布目录，不需要构建命令。任意静态网站托管都可以上传整个目录。

共享版默认只做结构检查。用户主动开启“联网编译”并确认后，浏览器会访问
`https://ce.judge0.com/submissions?base64_encoded=false&wait=true`，因此托管平台不要通过 CSP 禁止
`connect-src https://ce.judge0.com`。不开启该开关时不会发起任何代码上传请求。

## 推荐：腾讯云 COS 静态网站

适合国内访问。一般步骤：

1. 在腾讯云创建 COS 存储桶，选择国内地域。
2. 开启“静态网站”功能，默认首页设为 `index.html`，错误文档设为 `404.html`。
3. 上传 `dist` 目录内的全部文件。
4. 使用 COS 静态网站访问地址分享。
5. 如需绑定自己的域名，按平台要求配置 CDN、HTTPS 和备案。

具体要求、费用和备案规则以腾讯云控制台当前说明为准。

## Gitee Pages / AtomGit Pages

国内代码托管平台的 Pages 服务可能随平台政策调整。创建仓库后上传 `dist` 内容，再在仓库设置中开启 Pages。若平台要求实名认证或付费，按平台当前规则处理。

## Cloudflare Pages / GitHub Pages

部署简单，适合快速公开分享，但中国大陆不同网络环境下的访问质量不保证。Cloudflare Pages 可直接上传 `dist`；GitHub Pages 可把 `dist` 内容放到 Pages 分支。

## 自有服务器或对象存储

把 `dist` 上传到站点根目录即可。服务器应返回正确的 `text/javascript`、`text/css` 和 `application/manifest+json` MIME 类型，并启用 HTTPS。

## 分享前检查

- 首页可以打开，`styles.css`、`data.js`、`app.js` 加载成功。
- 知识点数量正确。
- 手机宽度下没有横向滚动。
- “检查答案”可以给出结构反馈。
- 联网编译按钮默认显示“开启联网编译”，首次开启会弹出隐私确认。
- “复制 C++ 代码”可以复制当前答案。
- 清理浏览器数据后仍能重新开始。
