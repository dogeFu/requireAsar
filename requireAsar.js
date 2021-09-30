const {app} = require('electron')
const Module = require('module');
const path = require('path')
const cache = {}
module.exports = function requireAsar(asarPath) {

    asarPath = path.resolve(app.getAppPath(),asarPath)
    if (cache[asarPath]){
        // console.log("requireAsar has cache",asarPath)
        return cache[asarPath]
    }
    let mainScriptPath = ''
    try {
        const packageJson = Module._load(path.join(asarPath, 'package.json'));
        mainScriptPath = packageJson.main
    } catch (error) {
        mainScriptPath = 'main.js'
    }
    // console.log("requireAsar",asarPath,mainScriptPath)
    cache[asarPath] = Module._load(path.join(asarPath, mainScriptPath), Module, true);
    return cache[asarPath]
}