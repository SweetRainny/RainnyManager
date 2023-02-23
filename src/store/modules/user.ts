import { login } from "@/apis/user";

const state = {
  token: "",
  name: "alice",
  avatar: "",
  introduction: "",
  roles: []
}

const mutations = {
  SET_TOKEN(state: { token: any; }, token: any) {
    state.token = token;
  },
  SET_NAME(state: { name: any; }, name: any) {
    state.name = name;
  },
  SET_AVATAR(state: { avatar: any; }, avatar: any) {
    state.avatar = avatar;
  },
  SET_INRTODUCTION(state: { introduction: any; }, introduction: any) {
    state.introduction = introduction;
  },
  SET_ROLES(state: { roles: any; }, roles: any) {
    state.roles = roles;
  }
}

const actions = {
  login({commit}: any, userInfo: { username: any; password: any; }) {
    const {username, password} = userInfo;
    return new Promise((resolve, reject) => {
      login({username, password}).then((response) => {
        const {data} = response;
        console.log(response);
        console.log(data);
        commit.SET_TOKEN(data.token);
      }).catch((err) => {
        console.log("err-----");
        console.log(err)
      })
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}