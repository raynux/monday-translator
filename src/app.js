'use strict'
import t from './locales/ja'
import targets from './targets'

const replaceTextContent = ({selectors, key, nodeIndex}) => {
  selectors.forEach((selector) => {
    const elem = document.querySelector(selector)
    if(!elem) { return }

    const targetElem = nodeIndex ? elem.childNodes[nodeIndex] : elem
    const preWhiteSpace = targetElem.textContent.match(/^\s*/)[0]
    targetElem.textContent = `${preWhiteSpace}${t[key]}`
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
  characterData: true
})