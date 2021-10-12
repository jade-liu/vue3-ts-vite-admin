const state = {
  collapsed: false
}

const mutations = {
  OPEN_SIDEBAR: (state: any) => {
    state.collapsed = false
  },
  CLOSE_SIDEBAR: (state: any) => {
    state.collapsed = true
  }
}

const actions = {
  openSidebar: ({ commit }: any) => {
    commit('OPEN_SIDEBAR')
  },
  closeSidebar: ({ commit }: any) => {
    commit('CLOSE_SIDEBAR')
  }
}

export default {
  state,
  mutations,
  actions
}
