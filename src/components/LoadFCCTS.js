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
  const fccTS = document.querySelector('#fcc_test_suite_wrapper')
  const fccButton = document.querySelector('.fcc-button')
  if (!fccTS)
    new ScriptLoader('https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js')
      .load()
      .then(() => {
        fccButton.innerHTML = 'FCC Test Suite loaded successfully'
        setTimeout(() => {
          fccButton.style.opacity = '0'
          fccButton.style.maxHeight = '0'
          setTimeout(() => {
            fccButton.parentNode.removeChild(fccButton)
          }, 500)
        }, 1000)
      })
      .catch(err => console.error(err))
}
