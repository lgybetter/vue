/* @flow */

import { mergeOptions } from '../util/index'
// 全局mixin方法
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 调用mergeOptions对全局Vue对象的options进行mixin混入
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
