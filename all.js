const book = require('fs');
book.writeFile('.html', 'This is the first div', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('You have successfully created a file.');
    }
})