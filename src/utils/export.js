```javascript
const fs = require('fs');
const pdf = require('html-pdf');

const exportNote = (note, format) => {
    switch(format) {
        case 'txt':
            fs.writeFile('note.txt', note, (err) => {
                if (err) throw err;
                console.log('The note has been saved as a text file!');
            });
            break;
        case 'pdf':
            pdf.create(note).toFile('note.pdf', (err, res) => {
                if (err) return console.log(err);
                console.log('The note has been saved as a PDF file!');
            });
            break;
        default:
            console.log('Invalid format. Please choose either "txt" or "pdf".');
    }
}

module.exports = {
    exportNote
}
```