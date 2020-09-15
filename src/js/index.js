import polyfill from './util/poly-fill.js'
import Editor from './editor/index.js'
import '../less/common.less';
import '../less/droplist.less';
import '../less/icon.less';
import '../less/menus.less';
import '../less/panel.less';
import '../less/text.less';
// 检验是否浏览器环境
try {
    document
} catch (ex) {
    throw new Error('请在浏览器环境下运行')
} 

// polyfill
polyfill()

// 返回
export default (window.wangEditor || Editor)