# fullvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 这里弱弱介绍一下eslint关闭方法

- 使用配置文件来选择禁用范围
创建文件.eslintignore
加入如下内容

**/*.js

**/*.vue

- 禁用下一行

// eslint-disable-next-line to ignore the next line.

console.log("这行esline不检查")

- 禁用整个js文件

/* eslint-disable */

console.log("整个文件都忽略eslint检查")

