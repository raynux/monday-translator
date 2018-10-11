'use strict'
import t from './locales/ja'
import targets from './targets'

const replaceTextContent = ({selectors, key, nodeIndex}) => {
  selectors.forEach((selector) => {
    const elem = document.querySelector(selector)
    if(!elem) { return }

    const targetElem = nodeIndex ? elem.childNodes[nodeIndex] : elem
    const preWhiteSpace = targetElem.textContent.match(/^\s*/)[0]
    const newString = `${preWhiteSpace}${t[key]}`
    if(targetElem.textContent != newString) {
      targetElem.textContent = newString
    }
  })
}

let counter = 0

const observer = new MutationObserver(() => {
  console.log(counter)
  counter += 1
  targets.forEach((target) => {
    replaceTextContent(target)
  })
})
observer.observe(document.body, {
  attributes: false,
  childList: true,
  characterData: true,
})

setInterval(() => {
  targets.forEach((target) => {
    replaceTextContent(target)
  })
}, 2000)