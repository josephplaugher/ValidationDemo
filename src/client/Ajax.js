import axios from 'axios'

const get = (url) => {
    const request = axios({
        withCredentials: true,
        method: 'get', url: url,
        responseType: 'json',
        headers:
        {
            csrf: sessionStorage.getItem('AppCoToken')
        }
    })
    request
        .catch(error => console.log('ajax error: ' + error))
    return request;
}

const post = (url, formData) => {
    const request = axios({
        withCredentials: true,
        url: url,
        method: 'post',
        data: formData,
        responseType: 'json',
        headers:
        {
            csrf: sessionStorage.getItem('loginToken')
        }
    })
    request
        .catch(error => console.log('ajax error: ' + error))
    return request;
}

const login = (url, formData) => {
    const request = axios({
        url: url,
        method: 'post',
        data: formData,
        responseType: 'json'
    })
    request
        .catch(error => console.log('ajax error: ' + error))
    return request;

}


export { get, post, login };