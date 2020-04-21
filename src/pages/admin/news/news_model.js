import { request } from './../../../utils/request';
import { message } from 'antd'
export function placeNews(param, callback) {
    var params = {
        url: 'news/add',
        type:'post',
        data:param,
        sCallback: function (data) {
            callback && callback(data)
        },
        eCallback: function (err) {
            message.error('请求失败！请重试')
        }
    }
    request(params)
}