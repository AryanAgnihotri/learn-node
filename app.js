const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(201, 'ok', { 'content-type': 'text/html' });
        res.write('<h1><i>This is new home page</i></h1>');
    } else if (url === '/about') {
        res.writeHead(201, 'ok', { 'content-type': 'text/html' });
        res.write(`<h1><i>Our Journey to world's largest company</i></h1>`);
    } else {
        res.writeHead(201, 'ok', { 'content-type': 'text/html' });
        res.write('<h1 style="color:red"><i>page not found</i></h1>');
    }
    res.end();
}).listen(5000);
