const server = require('server');
const { get, post } = server.router;
const { render, json } = server.reply;

server({ port: 8080 },[
    get('/', ctx => render('templates/index.html'))
]);