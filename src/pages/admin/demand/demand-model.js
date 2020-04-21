import { request } from './../../../utils/request';
import { message } from 'antd'
export function getDemand(pageIndex, callback) {
    var params = {
        url: 'demand/get?page=' + pageIndex,
        sCallback: function (data) {
            callback && callback(data)
        },
        eCallback: function (err) {
            message.error('请求失败！请重试')
        }
    }
    request(params)
}