const http = require('http')
const fs = require('fs')

const port = 1303

const reqHandler = (req, res) => {
    let fname = ""
    switch (req.url) {
        case '/':
            fname = './index.html'
            break;
        case '/about':
            fname = './about.html'
            break;
        case '/contact':
            fname = './contact.html'
            break;
        default:
            fname = './error.html'
    }
    fs.readFile(fname, (err,result) => {
        if(!err) {
            res.end(result) 
        }
    })
}

const myServer = http.createServer(reqHandler)

myServer.listen(port, (err) => {
    if (err) {
        console.log("Server did not start in port " + port)
        return false
    }
    console.log("Server start in port " , port)
})