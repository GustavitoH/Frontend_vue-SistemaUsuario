import users from '@/api/modules/users';

const state = {
  listUsers: [],
};
const actions = {
  getListUsers(context) {
    return users.listUsers().then((response) => {
      context.commit('GET_USERS', response.data);
    });
  },
  createUser(context, newUser) {
    return users.createUser(newUser).then((response) => {
      context.commit('NEW_USER', response.data.user);
      return response.data;
    });
  },
  updateUser(context, user) {
    return users.updateUser(user).then((response) => {
      context.commit('UPDATE_USER', user);
      return response.data;
    });
  },
  deleteUser(context, user) {
    return users.deleteUser(user).then((response) => {
      context.commit('DELETE_USER', user);
      return response.data;
    });
  },
};

const mutations = {
  GET_USERS(state, payload) {
    state.listUsers = payload;
  },
  NEW_USER(state, payload) {
    state.listUsers.push(payload);
  },
  UPDATE_USER(state, payload) {
    const array = state.listUsers;
    const idUpdateUser = (value) => {
      return value.id === payload.id;
    };
    state.listUsers[array.findIndex(idUpdateUser)] = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
