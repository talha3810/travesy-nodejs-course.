const http = require('http');

// Create server object
http
    .createServer((req, res) => {
        // Write response
        res.write('Hello World');
        res.end();
    })
    .listen(5004, () => console.log('Server running...'));



// advantage => phele jo hamien server manually  restart krna prta tha wo nodemon ke zirye asan ho jata
  // nodemon
// What is Nodemon npm ?
// The nodemon Module is a module that develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.