let phoneReg = /^1[345789]\d{9}$/

let validate  = {
  validatePhone(data) {
    if (phoneReg.test(data)) {
      return true
    }
    return false
  }
}