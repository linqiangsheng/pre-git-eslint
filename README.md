# Pre-git-ESLint

![error screencast](http://7xv1ia.com1.z0.glb.clouddn.com/github/pre-commit-eslintscreenshot-error.png)

## 原理
**pre-git-eslint** 利用 [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)，安装后在项目的 `.git` 目录下添加一个 pre-commit-hook 对更改的 JS 文件使用 eslint 检查
该插件自动检测代码里面引入的.eslintrc。并在检查结果的目录下使用eslint对提交的js文件进行校验。
目前只要是存在warning或error都不允许提交

## 安装
`npm install pre-git-eslint --dev`

## 实现思路借鉴与pre-commit-eslint插件 

## License
ISC &copy;

