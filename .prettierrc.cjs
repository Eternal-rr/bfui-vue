module.exports = {
  printWidth: 80, // 一行最多 120 字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 不使用缩进符，而使用空格
  semi: true, // 行尾需要有分号
  singleQuote: true, // 使用单引号
  quoteProps: "as-needed", // 对象的 key 仅在必要时用引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: "all", // 末尾需要有逗号
  bracketSpacing: true, // 大括号内的首尾需要空格
  bracketSameLine: false,
  arrowParens: "always", // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: "preserve", // 使用默认的折行标准
  htmlWhitespaceSensitivity: "css", // 指定HTML文件的全局空格敏感度，根据显示样式决定 html 要不要折行
  vueIndentScriptAndStyle: false, // vue 文件中的 script 和 style 内不用缩进
  endOfLine: "lf", // 换行符使用 lf
  embeddedLanguageFormatting: "off", // 不格式化 Markdown 中的嵌入式代码块
  singleAttributePerLine: false, // 不要强制在 HTML、Vue 和 JSX 中每行使用单个属性
};
