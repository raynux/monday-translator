'use strict'

chrome.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion);
})

console.log('Plugin Loaded')
console.log(chrome.runtime.getManifest().name);