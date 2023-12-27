import { logos } from '@/plugins/programeLogo.ts'
interface programmingConstruct {
  label: string
  value: string
}
interface programmingLanguage {
  label: string
  value: string
  logo: string
}

interface nameStyle {
  label: string
  value: string
}
const programmingConstructs: programmingConstruct[] = [
  {
    label: '函数', // Function
    value: 'function'
  },
  {
    label: '常量', // Constant
    value: 'constant'
  },
  {
    label: 'Vue组件', // Function
    value: 'vue component'
  },
  {
    label: 'React 组件', // Function
    value: 'React component'
  },
  {
    label: '类型', // Type
    value: 'type'
  },
  {
    label: '变量', // Variable
    value: 'variable'
  },
  {
    label: '命名空间', // Namespace
    value: 'namespace'
  },
  {
    label: '枚举', // Enum
    value: 'enum'
  },
  {
    label: '项目',
    value: 'project'
  },
  {
    label: '宏', // Macro
    value: 'macro'
  },
  {
    label: '类', // Class
    value: 'class'
  },
  {
    label: '接口', // Interface
    value: 'interface'
  },
  {
    label: '结构', // Structure
    value: 'structure'
  },
  {
    label: '模块', // Module
    value: 'module'
  },
  {
    label: '泛型', // Template/Generics
    value: 'generics'
  },
  {
    label: '委托/匿名函数', // Delegates/Lambdas
    value: 'delegates'
  },
  {
    label: '属性', // Properties
    value: 'properties'
  },
  {
    label: '事件', // Events
    value: 'events'
  },
  {
    label: '特性/混入', // Traits/Mixins
    value: 'traits'
  }
  // Add more constructs as needed
]

const programmingLanguages: programmingLanguage[] = [
  {
    label: 'JavaScript',
    value: 'javascript',
    logo: logos.javascriptLogo
  },
  {
    label: 'TypeScript',
    value: 'TypeScript',
    logo: logos.typescriptLogo
  },
  {
    label: 'Python',
    value: 'python',
    logo: logos.pythonLogo
  },
  {
    label: 'Java',
    value: 'java',
    logo: logos.javaLogo
  },
  {
    label: 'C#',
    value: 'csharp',
    logo: logos.csharpLogo
  },
  {
    label: 'PHP',
    value: 'php',
    logo: logos.phpLogo
  },
  {
    label: 'C',
    value: 'c',
    logo: logos.cLogo
  },
  {
    label: 'go',
    value: 'go',
    logo: logos.goLogo
  },
  {
    label: 'C++',
    value: 'cpp',
    logo: logos.cppLogo
  },
  { label: 'css', value: 'css', logo: logos.cssLogo },
  { label: 'html', value: 'html', logo: logos.htmlLogo },
  {
    label: 'lua',
    value: 'lua',
    logo: logos.luaLogo
  },
  {
    label: 'Ruby',
    value: 'ruby',
    logo: logos.rubyLogo
  },
  {
    label: 'Swift',
    value: 'swift',
    logo: logos.swiftLogo
  },
  {
    label: 'vue',
    value: 'vue',
    logo: logos.vueLogo
  },
  {
    label: 'React',
    value: 'React',
    logo: logos.reactLogo
  }
  // Add more languages as needed
]

const nameStyle: nameStyle[] = [
  {
    label: '小驼峰式命名（lowerCamelCase）',
    value: 'lowerCamelCase'
  },
  {
    label: '大驼峰式命名（UpperCamelCase）',
    value: 'UpperCamelCase'
  },
  {
    label: '下划线命名（snake_case）',
    value: 'snake_case'
  },
  {
    label: '短横线命名（kebab-case）',
    value: 'kebab-case'
  },
  {
    label: '匈牙利命名法（hungarianNotation）',
    value: 'hungarianNotation'
  },
  {
    label: '下划线前缀（_underscorePrefix）',
    value: '_underscorePrefix'
  },
  {
    label: '全大写命名（UPPER_CASE）',
    value: 'UPPER_CASE'
  }
]

export { programmingLanguages, programmingConstructs, nameStyle }
