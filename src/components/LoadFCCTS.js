// Loading JS Scripts On Demand and Asynchronously
// https://www.youtube.com/watch?v=sTvZOLpAE60

class ScriptLoader {
  constructor(scriptSrc) {
    this.scriptSrc = scriptSrc
    this.scriptElement = document.createElement('script')
    this.head = document.querySelector('head')
  }

  load() {
    return new Promise((res, rej) => {
      this.scriptElement.src = this.scriptSrc
      this.scriptElement.onload = e => res(e)
      this.scriptElement.onerror = err => res(err)
      this.head.appendChild(this.scriptElement)
    })
  }
}

export const loadFCCTestSuite = () => {
  if (!document.querySelector('#fcc_test_suite_wrapper'))
    new ScriptLoader('https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js')
      .load()
      .catch(err => console.error(err))
}
