import axios from "axios"
import { Toast } from "vant"
let root
//自动切换正式与测试环境
if (location.href.indexOf("hupun") > -1) {
  // root = "https://app-dk.hupun.com"
} else {
  // root = "http://114.67.231.162"
}

let instance = axios.create({
  baseURL:  process.env.NODE_ENV === "development" ? "" : root,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

//过滤无值参数
function filterNull(obj) {
  var param = {}
  if (obj === null || obj === undefined || obj === "") return param
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      param[key] = filterNull(obj[key])
    } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
      param[key] = obj[key]
    }
  }
  return param
}

//请求拦截
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//响应拦截
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.resolve(error.response)
  }
)

function _axios(method, url, data, success) {
  data = filterNull(data)
  instance({
    method: method,
    url: url,
    data: data.data || null,
    params: data.params || null
  }).then(r => {
    success(r)
  })
}

function _axiosPromise(method, url, data) {
  data = filterNull(data)
  return instance({
    method: method,
    url: url,
    data: data.data || null,
    params: data.params || null
  })
}

let api = {
  get(url, data, success) {
    if (success) {
      return _axios("GET", url, data, success)
    } else {
      return _axiosPromise("GET", url, data)
    }
  },
  post(url, data, success) {
    if (success) {
      return _axios("POST", url, data, success)
    } else {
      return _axiosPromise("POST", url, data)
    }
  }
}

export default api
