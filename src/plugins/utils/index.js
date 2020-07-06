let timer = null
let startY = 0

function touchStart(e) {
  startY = e.targetTouches[0].pageY
}

function touchMove(e, data) {
  if (e.targetTouches[0].pageY <startY) {
     fetch(data.className,data.loadStatus,data.fn,data.wait)
  }
}

/**
 * @param {加载区域元素的类名} className
 * @param {加载状态：1.加载中 2.数据加载完} loadStatus
 * @param {加载数据方法} fn
 * @param {节流时间} wait
 */

function fetch(className, loadStatus, fn, wait) {
  let innerHeight = document.querySelector(className).clientHeight
  // 变量scrollTop是滚动条滚动时，距离顶部的距离
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  // 变量scrollHeight是滚动条的总高度
  let scrollHeight = document.documentElement.clientHeight || document.body.scrollHeight
  // 加载条件
  if (scrollTop + scrollHeight >= innerHeight && innerHeight >= scrollHeight) {
    //如果数据已加载完，则不触发此条件
    if (loadStatus != 2) {
      throttle(fn, wait)
    }
  }
}

/**
 * @param {频繁触发的函数名} fn
 * @param {触发时间间隔} wait
 */
function throttle(fn, wait) {
  if (!timer) {
    timer = setTimeout(() => {
      fn(this, arguments)
      timer = null
    }, wait)
  }
}

export { touchStart, touchMove }
