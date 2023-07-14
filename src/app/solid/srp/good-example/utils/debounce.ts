export function debounce(fn: Function, delay: number) {
  let timer: any
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
