/*******don't touch this folder*******/
const http = require('http')
const app = require('./app')
const port =  3000
const server = http.createServer(app)
//server.listen(port)
app.listen(port, () => {
    console.log(`App is running on port ${ port }`);
});
console.log('here')