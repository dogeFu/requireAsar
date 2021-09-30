const {app} = require('electron')
const requireAsar = require("./requireAsar")

app.whenReady().then(() => {
  console.log('开始加载asar包：test3.asar，入口是test3.asar/main.js')
  const mod = requireAsar("test3.asar");
  console.log("asar包加载返回结果",mod)
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


