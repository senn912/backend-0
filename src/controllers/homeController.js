const connection = require('../config/database');
const getHomepage = (req, res) => {

    return res.render('home.ejs')

}
const getABC = (req, res) => {
    res.render('sample.ejs')
}
const getABCD = (req, res) => {
    res.render('sample2.ejs')
}

const postCreateUser = async (req, res) => {


    let email = req.body.email;
    let name = req.body.accname;
    let city = req.body.city;

    console.log(">>>>>> email = ", email, ' name =', name, ' city = ', city)
  
    
    // connection.query(
    //     `insert into Users (email,name,city)
    //     values(?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('create succeed')
    //     }
    // );
    
    let [results, fields] = await connection.query(
        `insert into Users (email,name,city) values(?,?,?)`,[email, name, city],
    );
    //     `INSERT INTO Users (email, name, city) values(?, ?, ?) `, [email, name, city]
    // );


    console.log(">>> check result ",results);
    res.send('create succeed');



}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage, getABC, getABCD, postCreateUser, getCreatePage
}