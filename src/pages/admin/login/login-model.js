import { request } from './../../../utils/request';
import { message } from 'antd'
export function login(param, callback) {
    var params = {
        url: 'token/app',
        type: 'post',
        data: param,
        sCallback: function (data) {
            callback && callback(data)
        },
        eCallback: function (err) {
            message.error('登录失败')
        }
    }
    request(params)
}