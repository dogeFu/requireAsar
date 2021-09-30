// Modules to control application life and create native browser window
const AsarPath = arguments[4]
const { BrowserWindow} = require('electron')
const path = require('path')
const fs = require('fs')
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  console.log("asar包内创建窗口，加载./asarIndex.html文件，这里不能单纯使用相对路径定位文件，需要利用require的加载环境提供的asar路径转换")
  const htmlPath = path.join(AsarPath,'asarIndex.html')
  mainWindow.loadFile(htmlPath)
  console.log("asarIndex.html内使用了相对路径的css文件，如果界面显示正常，则证明html可加载相对路径资源")

  console.log("asar执行require('./testRequire')")
  require('./testRequire')

  console.log("asar内通过fs加载相对路径文件testFS.txt")
  console.log("testFS.txt:",fs.readFileSync(path.join(AsarPath,'testFS.txt')))
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

createWindow()

module.exports = {
    testExport : "export from asar",
}