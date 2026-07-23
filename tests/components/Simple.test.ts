/**
 * Templates/Simple 組件測試
 *
 * 涵蓋 issue #11 的回歸測試：
 * 當 acc.n（標題）等欄位為空、對應的 v-if 元素從 DOM 移除時，
 * 上方 header 容器仍需保留最小高度，避免下方 App 圖示列表產生版面位移（CLS）。
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Simple from '~/components/Templates/Simple.vue'

const fullAcc = {
  i: 'https://example.com/avatar.png',
  n: 'Habit',
  d: 'Productivity',
  apps: [],
  ls: [],
}

describe('Templates/Simple.vue', () => {
  it('應該成功渲染組件', () => {
    const wrapper = mount(Simple, { props: { acc: fullAcc } })
    expect(wrapper.exists()).toBe(true)
  })

  it('header 容器應該有固定的 min-height，避免內容增減造成版面位移', () => {
    const wrapper = mount(Simple, { props: { acc: fullAcc } })
    const header = wrapper.find('.text-center')

    expect(header.exists()).toBe(true)
    expect(header.classes()).toContain('min-h-[156px]')
  })

  it('即使 acc.n 為空、標題 h1 從 DOM 移除，header 容器仍保留相同的 min-height class', () => {
    const wrapper = mount(Simple, {
      props: { acc: { ...fullAcc, n: '' } },
    })
    const header = wrapper.find('.text-center')

    // h1 因 v-if="acc.n" 而不存在
    expect(wrapper.find('h1').exists()).toBe(false)
    // 但容器的 min-height class 仍在，撐住高度避免下方內容被往上推
    expect(header.classes()).toContain('min-h-[156px]')
  })

  it('acc.n 有值時應該顯示標題文字', () => {
    const wrapper = mount(Simple, { props: { acc: fullAcc } })
    expect(wrapper.find('h1').text()).toBe('Habit')
  })
})
