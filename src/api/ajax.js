/*
封装ajax 异步请求
return promise对象  异步返回的数据是: response.data
*/

import axios from 'axios';
import { resolve } from 'dns';
import { reject } from 'q';

export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
    let promise;
    if(type === 'GET'){//发送get请求
        //准备URL query 参数数据
        let  dataStr = '';//数据拼接字符串
        Object.keys(data).forEach(key=>{
            dataStr+= key+'='+data[key]+'&'
        })
        if(dataStr !== ''){
            dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
            url= url+'?'+dataStr;
        }
        promise = axios.get(url);
    }else{     //发送post请求
        promise = axios.post(url,data);
    }
    promise.then(res=>{
        resolve(res.data);
    }).catch(error=>{
        reject(error)
    })
})
}

/*
const response = await ajax()
const result = response.data
const resule = await ajax()
 */