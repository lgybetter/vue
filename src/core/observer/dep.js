/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'
import config from '../config'

let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * Dep的作用是建立起数据和watcher之间的桥梁
 */
export default class Dep {
  // 静态属性
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = [] // 订阅当前数据变化的watcher
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      // 调用watcher.addDep
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// 全局的watcher，同一时间只能有一个watcher被计算
Dep.target = null
const targetStack = []

export function pushTarget (target: ?Watcher) {
  // 把父级的watcher保存到栈结构中
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  // 恢复父级的watcher
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
