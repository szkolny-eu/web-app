const path = require('path');
const {app, BrowserWindow,protocol} = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 1000,
        height: 700,
        minHeight: 700,
        minWidth: 900,
        webPreferences: {
            nodeIntegration: true
        },
        backgroundColor: "#fafafa"
    });
    win.setMenu(null);
    win.setIcon("icon.png");
    win.setTitle("Szkolny.eu");

    // and load the index.html of the app.
    win.loadFile('index.html');
}

app.whenReady().then(createWindow)
