import { request } from './../../../utils/request';
import { message } from 'antd'
export function getCompanyInfo(cid, callback) {
    var params = {
        url: 'company/get_info/' + cid,
        sCallback: function (data) {
            callback && callback(data)
        },
        eCallback: function (err) {
            message.error('请求失败！请重试')
        }
    }
    request(params)
}