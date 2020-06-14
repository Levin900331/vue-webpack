module.exports = {
    presets:[
        ["@babel/preset-env", {
            // 这儿有false, entry, usage三个可选参数，usage可以按需引入polyfill
            "useBuiltIns": "usage",
            // 指定corejs版本
            "corejs": 2
          }]
    ]
}