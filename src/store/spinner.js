const state = {
    spinner: false
  }
  
  const mutations = {
    TOGGLE_SHOW(state) {
      state.spinner = true;
    },
    TOGGLE_HIDE(state) {
      state.spinner = false;
    }
  }
  
  const actions = {
    toggleShow(context) {
      context.commit('TOGGLE_SHOW');
    }, 
    toggleHide(context) {
      context.commit('TOGGLE_HIDE');
    }
  }
  
  const getters = {
    getSpinner: state => state.spinner
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  }