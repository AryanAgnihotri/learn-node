const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(`Welcome to Aryan's home page`);
    } else if(req.url === '/about') {
        res.end('This is our short history');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>Sorry, but we can't find what you're looking for.</p>
            <a href='/'>Home Page</a>
        `);
    }
});

server.listen(5000);
