import Axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import config from '../config'

class httpRequest {

    constructor() {
        this.options = {
            method: '',
            url: ''
        }
        // 存储请求队列
        this.queue = {}
    }

    // 请求拦截
    interceptors(instance, url) {
        // 添加请求拦截器
        instance.interceptors.request.use(config => {
            // config.headers['token'] = getLocalToken(TOKEN_KEY)
            // 在发送请求之前做些什么
            return config;
        }, error => {
            // 对请求错误做些什么
            return Promise.reject(error)
        })

        // 添加响应拦截器
        instance.interceptors.response.use((res) => {
            // console.log('拦截器里面的res', res);
            const { data } = res;
            if (data.code >= 500) {
                // Notice.error({ title: '服务器错误' });
                return Promise.reject('服务器错误');
            }
            if (data.code == 400) {
                // Notice.error({ title: res.data.msg });
                return Promise.reject(res.data.msg);
            }
            if (data.code == 200 || res.status == 201) {
                return Promise.resolve(res.data);
            }

        }, (error) => {
            // console.log('error', error);
            Promise.reject(error);
            // Notice.error({ title: error });
        })
    }

    // 创建实例
    create() {
        let conf = {
            baseURL: config.baseURL,
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }
        return Axios.create(conf)
    }

    // 请求实例
    request(options) {
        console.log('我开始创建Axios实例');
        var instance = this.create()
        this.interceptors(instance, options.url)
        options = Object.assign({}, options)
        this.queue[options.url] = instance
        return instance(options)
    }
}

const httpR = new httpRequest();
const axios = httpR.create();
httpR.interceptors(axios);

Vue.use(VueAxios, axios)
// export default axios;
