/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

/**
 * nodeOps 实际的dom操作方法
 * modules 定义模块的钩子函数
 * createPatchFunction使用函数柯里化原理，固化nodeOps和modules的参数，然后返回一个patch函数。
 * 也可以理解为一个高阶函数
 */
export const patch: Function = createPatchFunction({ nodeOps, modules })
