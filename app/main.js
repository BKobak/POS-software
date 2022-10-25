const { app, BrowserWindow } = require('electron');

// include the Node.js 'path' module at the top of your file
const path = require('path')

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    /*frame: false,*/
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  /*win.maximize();*/
  win.loadFile('./src/index.html')
}

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })