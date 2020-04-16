import axios from "axios";
import {getToken} from './auth'
import { Config } from "./config";
import { message } from "antd";
export function request(params){
    var url = Config.baseURL + params.url;
    if(!params.type){
        params.type = 'GET';
    } 
    axios.request({
        url:url,
        data:params.data,
        method:params.type,
        headers:{
            'content-type': 'application/json',
            'token':getToken()
        }
    }).then((res)=>{
            var code = res.status.toString();
            var startChar = code.charAt(0);
            if(startChar == '2') {
                params.sCallback && params.sCallback(res.data);
            } else {
                params.eCallback && params.eCallback(res.data)
            }
    }).catch((err)=>{
        message.error('登录失败，请检查账号和密码')
    })
}