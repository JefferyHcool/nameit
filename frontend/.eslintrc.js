module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    // indent: ['warn', 'tab', {SwitchCase: 1}],
    indent: 'off',
    'import/prefer-default-export': 0,
    // 'linebreak-style': [0, 'unix'],
    '@typescript-eslint/ban-ts-comment': 0,
    'no-undef': 0, // 可以有未定义的变量
    'no-self-compare': 2, // 不能比较自身
    'no-proto': 2, // 禁止使用__proto__属性
    'no-plusplus': 0, // 可以使用 ++，--
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
    'no-var': 2, // 禁止使用var
    camelcase: 0, // 可以使用下划线
    'no-unreachable': 2, // 不能有无法执行的代码
    // 'no-unused-expressions': 2, // 禁止无用的表达式
    strict: [2, 'never'], // 严格模式不启用
    'prettier/prettier': 0,
    yoda: [2, 'never'], // 等号变量比较不分前后 always是表示要变量在后
    // eslint-disable-next-line no-undef
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 生产不能使用debugger
    '@typescript-eslint/no-explicit-any': 0, // any 类型不校验
    '@typescript-eslint/no-non-null-assertion': 0, // 可以用！取值
    // '@typescript-eslint/no-unused-vars': 2, // 定义了没使用报错
    '@typescript-eslint/no-unused-vars': ['off'],
    // quotes: ['error', 'single'], // 使用单引号
    quotes: ['warn', 'single', { allowTemplateLiterals: true }], // 使用单引号和反引号，请不掉干掉这句，不然莫法使用模板字符串
    semi: ['error', 'never'], // 不用分号 always使用，never不使用
    'no-alert': 2, // 禁止使用alert
    'no-caller': 1, // 禁止使用arguments.caller或arguments.callee
    'no-inline-comments': 0, // 可以使用行内备注
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-eval': 2, // 禁止使用eval,
    'no-empty': 2, // 块语句中的内容不能为空
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-multiple-empty-lines': [1, { max: 2 }], // 空行最多不能超过2行
    'no-extra-semi': 'error', // 禁止不必要的分号
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // if while function 后面的{必须与if在同一行，java风格。
    'comma-dangle': 0, // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    'comma-spacing': [2, { before: false, after: true }], // 控制逗号前后的空格
    'computed-property-spacing': [2, 'never'], // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'default-case': 2, // switch语句最后必须有default
    'max-depth': [2, 4], // 嵌套块深度最多四层
    'max-params': [2, 4], // 函数最多只能有4个参数
    'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句，禁止出现 if (cond) { return a } else { return b }，应该写为 if (cond) { return a } return b
    'no-eq-null': 2, // 禁止对null使用==或!=运算符
    'no-iterator': 2, // 禁止使用__iterator__ 属性
    'no-mixed-spaces-and-tabs': [2, false], // 禁止混用tab和空格
    'no-new-func': 1, // 禁止使用new Function
    'no-new-object': 2, // 禁止使用new Object()
    'no-unused-vars': 'off',
    // 'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'no-use-before-define': 0, // 未定义前不能使用
    'valid-typeof': 2, // 无效的类型判断
    'wrap-iife': [2, 'inside'], // 立即执行函数表达式的小括号风格
    'prefer-rest-params': 2, // 必须使用解构 ...args 来代替 arguments
    'consistent-this': [2, 'self', 'that'], // this 的别名规则，只允许 self 或 that
    curly: [2, 'multi-line', 'consistent'], // if 后必须包含 { ，单行 if 除外
    'for-direction': 2, // for 循环不得因方向错误造成死循环
    'getter-return': [2, { allowImplicit: true }], // getter 必须有返回值，允许返回 undefined
    'keyword-spacing': 2, // 关键字前后必须有空格
    'no-await-in-loop': 2, // 禁止将 await 写在循环里
    'no-class-assign': 2, // class定义的类名不得与其它变量重名
    'no-dupe-args': 2, // 函数参数禁止重名
    'no-duplicate-case': 2, // 禁止 switch 中出现相同的 case
    'no-duplicate-imports': 0, // 可以重复 import 主要为了引入主键和type分开引入
    'no-empty-function': 0, // 禁止空的 function,包含注释的情况下允许
    'no-empty-pattern': 2, // 禁止解构中出现空 {} 或 []
    'no-ex-assign': 2, // catch 定义的参数禁止赋值
    'no-extend-native': [2, { exceptions: ['Array', 'Object'] }], // 禁止扩展原生对象
    'no-extra-parens': [2, 'functions'], // 禁止额外的括号，仅针对函数体
    'no-floating-decimal': 2, // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
    'no-implied-eval': 2, // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
    'no-multi-assign': 2, // 禁止连等赋值
    '@typescript-eslint/interface-name-prefix': 0, // 允许接口命名以I开头
    '@typescript-eslint/no-var-requires': 0, // antd中引用style需要用require
    '@typescript-eslint/no-use-before-define': 0, // mapStateToProps在之前就用到(typeof推断类型)
    '@typescript-eslint/no-empty-function': 0, // 给函数默认值可以为空
    'react/display-name': 0, // 一个莫名其妙的Bug
    'react/no-find-dom-node': 0,
    // 注释的斜线和星号后要加空格
    'spaced-comment': [
      2,
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    // new关键字后类名应首字母大写
    'new-cap': [
      2,
      {
        capIsNew: false
      }
    ],
    // new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ]
  }
}
