const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
    
        res.write('<html>');
        res.write('<head> <title>Enter Message</title> </head>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><input type="submit" value="Send"></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST') {
        let body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
    
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    }
    
    //Construct Response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title>Message Found</title> </head>');
    res.write('<body> <h1>Hello World</h1> </body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;