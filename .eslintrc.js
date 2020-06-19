module.exports = {
  root: true,//此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    node: true//此项指定环境的全局变量，下面的配置指定为node环境
  },
  extends: [// 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {//规则配置写在这里
    // vue项目报错Expected indentation of 2 spaces but found 4
    "indent": ["off", 2],
    
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
