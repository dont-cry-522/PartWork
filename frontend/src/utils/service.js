import axios from 'axios'
import { ElMessage, ElMessageBox} from 'element-plus'

const service = axios.create({
    baseURL: '/api',
    timeout:600
})


service.interceptors.response.use(
     response => {
    const res = response.data

    // 这里根据后端返回的数据结构进行调整
    // 假设后端返回的数据结构为 { code: 200, message: 'success', data: {} }
    if (res.code !== 200) {
      // 处理业务错误
      ElMessage({
        message: res.info || 'Error',
        type: 'error',
        duration: 3 * 1000
      })

      // 特殊状态码处理
      if (res.code === 401 || res.code === 403) {
        // 重新登录
        ElMessageBox.confirm('登录状态已过期，请重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    let message = error.message

    if (error.response) {
      // 根据HTTP状态码处理
      switch (error.response.status) {
        case 400:
          message = '请求错误'
          break
        case 401:
          message = '未授权，请登录'
          // 可以在这里跳转到登录页面
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器内部错误'
          break
        case 501:
          message = '服务未实现'
          break
        case 502:
          message = '网关错误'
          break
        case 503:
          message = '服务不可用'
          break
        case 504:
          message = '网关超时'
          break
        case 505:
          message = 'HTTP版本不受支持'
          break
        default:
          message = `连接错误${error.response.status}`
      }
    } else if (error.message.includes('timeout')) {
      message = '网络请求超时'
    } else if (error.message === 'Network Error') {
      message = '网络连接错误'
    }

    ElMessage({
      message,
      type: 'error',
      duration: 5 * 1000
    })

    return Promise.reject(error)
  }
)

/**
 * 通用请求方法
 * @param {Object} config 请求配置
 * @returns {Promise} 返回Promise对象
 */
export function request(config) {
  return service.request(config)
}

/**
 * GET请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config 其他配置
 * @returns {Promise} 返回Promise对象
 */
export function get(url, params = {}, config = {}) {
  return service.get(url, {
    params,
    ...config
  })
}

/**
 * POST请求
 * @param {String} url 请求地址
 * @param {Object} data 请求体数据
 * @param {Object} config 其他配置
 * @returns {Promise} 返回Promise对象
 */
export function post(url, data = {}, config = {}) {
  return service.post(url, data, config)
}

/**
 * PUT请求
 * @param {String} url 请求地址
 * @param {Object} data 请求体数据
 * @param {Object} config 其他配置
 * @returns {Promise} 返回Promise对象
 */
export function put(url, data = {}, config = {}) {
  return service.put(url, data, config)
}

/**
 * DELETE请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config 其他配置
 * @returns {Promise} 返回Promise对象
 */
export function del(url, params = {}, config = {}) {
  return service.delete(url, {
    params,
    ...config
  })
}

/**
 * 文件上传
 * @param {String} url 请求地址
 * @param {FormData} formData 表单数据
 * @param {Function} onUploadProgress 上传进度回调
 * @returns {Promise} 返回Promise对象
 */
export function upload(url, formData, onUploadProgress = null) {
  return service.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress
  })
}

export default service