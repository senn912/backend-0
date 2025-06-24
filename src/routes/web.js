
const express = require('express');
const router = express.Router();

//khai báo route
router.get('/', (req, res) => {
    // res.send('Hello World \n Test code dung express and ronaldo \n');
    res.send(`
    <html>
        <body> Hello World \n Test code dung express and ronaldo \n
        <div> <img src="images/1.jpg" alt="Ảnh ví dụ" width="700" /> </div>
        </body>
    </html>
    `);
})

router.get('/abc', (req, res) => {
    //res.send('Check route abc ')
    res.render('sample.ejs')
})

module.exports = router;