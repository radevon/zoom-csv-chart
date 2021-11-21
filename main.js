const {BrowserWindow, app} = require('electron')

// Дождаться полной инициализации Electron
// Только после этого возможно создавать окна
app.whenReady().then(() => {
    // Создаёт новое окно браузера
    const win = new BrowserWindow({
        show:false
    })

    //win.webContents.openDevTools();
    win.setMenuBarVisibility(false);
    win.maximize();
    // Загружаем в окне веб-содержимое
    win.loadFile('index.html')

    win.once('ready-to-show', win.show)
})

// Завершить работу приложения 
// если пользователь закрыл все окна программы
app.on('window-all-closed', app.quit)