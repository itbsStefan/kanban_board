var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 1250, height: 640})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
