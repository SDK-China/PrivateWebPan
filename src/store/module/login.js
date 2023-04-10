const login = {
    namespaced: true,
    state: {
        username: ''
    },
    mutations: {
        setToken(state, { username, token }) {
            state.username = username;
            localStorage.setItem("token", token);
        }
    }
}

export default login
