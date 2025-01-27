const path = require("path");
const express = require("express");

const rootDir = path.dirname(process.mainModule.filename);


const app = express();



app.set('view engine', 'ejs');

app.use(express.static(path.join(rootDir, "public"))); // to creat dirctory for the files
 

app.get('/', (req, res) => {

    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('welcome.ejs');

});


app.listen(4000, function () {
    console.log('listening to port 4000')
});

