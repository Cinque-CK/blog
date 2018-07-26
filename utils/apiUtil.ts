import 'whatwg-fetch';
import { getToken } from '../utils/storageUtil';
const token = getToken();

class ApiUtil {
    public static getJSON = function(url, params, okCallBack, errCallBack) {
        let queryStr = '';
        for (let prop in params) {
            if (params.hasOwnProperty(prop)) {
                queryStr += `${prop}=${params[prop]}&`;
            }
        }
        if (queryStr) {
            queryStr = queryStr.slice(0, -1);
            url = `${url}?${queryStr}`;
        }
        const headers: any = {
            'Content-Type': 'application/json',
            fetch: 1,
            token,
        };
    
        fetch(url, {
            method: 'GET',
            headers
        })
            .then(response => {
                if (response.status >= 400) {
                    if (response.status === 511) {
                        window.location.hash = 'login';
                    } else if (response.status === 500) {
                        // message.error('500系统错误');
                        return;
                    } else {
                        throw new Error('Error');
                    }
                }
                return response.json();
            })
            .then(res => {
                if (typeof okCallBack === 'function') {
                    okCallBack(res);
                }
            })
            .catch(err => {
                if (typeof errCallBack === 'function') {
                    errCallBack(err);
                } else {
                    if (!!err.message && !!err.description) {
                        // message.error(err.description);
                    }
                }
            });
    };

    public static postJSON = function(url, params, okCallBack, errCallBack) {
        const headers: any = {
            'Content-Type': 'application/json',
            fetch: 1,
            token,
        };
        fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(params)
        })
            .then(response => {
                if (response.status >= 400) {
                    if (response.status === 511) {
                        window.location.href = './login.html';
                    } else if (response.status === 500) {
                        // message.error('500系统错误');
                        return;
                    } else {
                        throw new Error('Error');
                    }
                }
                return response.json();
            })
            .then(msg => {
                if (typeof okCallBack === 'function') {
                    okCallBack(msg);
                }
            })
            .catch(err => {
                if (typeof errCallBack === 'function') {
                    errCallBack(err);
                } else {
                    if (!!err.message && !!err.description) {
                        // message.error(err.description);
                    }
                }
            });
    };

    public static putJSON = function(url, params, okCallBack, errCallBack) {
        const headers: any = {
            'Content-Type': 'application/json',
            fetch: 1,
            token,
        };
        fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(params)
        })
            .then(response => {
                if (response.status >= 400) {
                    if (response.status === 511) {
                        window.location.href = './login.html';
                    } else if (response.status === 500) {
                        // message.error('500系统错误');
                        return;
                    } else {
                        throw new Error('Error');
                    }
                }
                return response.json();
            })
            .then(msg => {
                if (typeof okCallBack === 'function') {
                    okCallBack(msg);
                }
            })
            .catch(err => {
                if (typeof errCallBack === 'function') {
                    errCallBack(err);
                } else {
                    if (!!err.message && !!err.description) {
                        // message.error(err.description);
                    }
                }
            });
    }
}

export default ApiUtil;