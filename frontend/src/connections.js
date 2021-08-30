import axios from 'axios'

const myaxios = axios.create()

// myaxios.defaults.baseURL = "https://google-classroom-backend.herokuapp.com/"
    myaxios.defaults.baseURL = "https://webdev-rookies.herokuapp.com/"
// myaxios.defaults.headers.common["Content-type" ] = "application/json"
const authorize = (token, setLoggedIn) => {
    myaxios.defaults.headers.common['Authorization'] = `Token ${token}`
    return setLoggedIn(true)
}

export {
    authorize,
    myaxios
}