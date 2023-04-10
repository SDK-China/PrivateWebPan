import axios from '@/utils/http'

const urls = {
    login: "/login",
    register: "/regiser",
    // uploadfiles: "/uploadfiles"
}

export default {
    loginHandle: async (username, password) => await axios.post(`${urls.login}?username=${username}&password=${password}`),
    registerHandle: async (username, password, password2) => await axios.post(`${urls.register}?username=${username}&password=${password}&password2=${password2}`),
    // uploadfilesHandle: async()
}

