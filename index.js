#!/usr/bin/env node

const { exec } = require('child_process')
const url = 'https://sprunk.world/?utm_source=cli'

const openBrowser = (url) => {
  let command
  switch (process.platform) {
    case 'darwin':
      command = `open ${url}`
      break
    case 'win32':
      command = `start ${url}`
      break
    default:
      command = `xdg-open ${url}`
  }

  exec(command, (error) => {
    if (error) {
      console.error('An error occurred while opening the browser:', error)
      return
    }
    console.log(`${url} opened in your default browser!`)
  })
}

openBrowser(url)
