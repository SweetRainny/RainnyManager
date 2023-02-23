const getters = {
  token: (state : any) =>  state.user.token,
  count: (state : any) => state.user.count,
  test: (state: any) => state.test
}
export default getters;