# demo说明

- requireAsar.js 封装的用来加载asar的接口

asar加载测试目标：
1. 代码加载asar包
2. asar包内的相对路径文件，比如browserWindow.loadFile('xxx.html'),可以正常解析
3. asar包内的html使用的相对路径，可以正常加载对应资源
4. asar包内require其它相对路径的模块，可以正常加载
5. asar包内用fs加载相对路径内容