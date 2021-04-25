export default {
  state: {
    mobileOverlay: false
  },
  getters: {
    getOverlayState: state => {
      return state.mobileOverlay
    }
  },
  mutations: {
    setOverlayState(state, mobileState){
      state.mobileOverlay = mobileState
    }
  },
  actions: {
    toggleMobOverlay({commit}, payload){
      commit('setOverlayState', payload)
    }
  }
};