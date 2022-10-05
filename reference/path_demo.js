const path = require('path');

// base file name 
// console.log(path.basename(__filename));



// Directory name
// console.log(path.dirname(__filename));
// path.dirname('/foo/bar/baz/asdf/quux');
// Returns: '/foo/bar/baz/asdf'



// File extension 
// path.extname('index.html');
// Returns: '.html'
// console.log(path.extname(__filename));



// Create path object 
// console.log(path.parse(__filename).name);s
// path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }






// Concatenate paths 
// console.log(path.join(__dirname, 'test', 'hello.html'));
// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

// path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'
