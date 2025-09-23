import { ElMessage } from "element-plus"

export const successMsg = (message) => {
  return ElMessage({
    type: 'success',
    message
  })
}

export const warningMsg = (message) => {
  return ElMessage({
    type: 'warning',
    message
  })
}

export const errorMsg = (message) => {
  return ElMessage({
    type: 'error',
    message
  })
}