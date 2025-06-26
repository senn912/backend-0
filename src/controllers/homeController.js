const connection = require('../config/database');
const { getAllUsers, updateUserById, deleteUserById } = require('../services/CRUDService');

const getHomepage = async (req, res) => {

    let result = await getAllUsers();
    return res.render('home.ejs', { listUsers: result })

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

    let [result, fields] = await connection.query(
        `insert into Users (email,name,city) values(?,?,?)`, [email, name, city],
    );

    console.log(">>> check result ", result);
    res.send(`
        <html>
        
            <title>Back to home after 5 second</title>
            <script>
                let count = 5;
                function updateCountdown() {
                    document.getElementById('countdown').innerText = count;
                    count--;
                    if (count >= 0) {
                        setTimeout(updateCountdown, 1000);
                    } else {
                        window.location.href = '/';
                    }
                }
                window.onload = updateCountdown;
            </script>
        
    <body>
        <h1>Create succed</h1>
        <div>Back to home after <span id="countdown">5</span> second...</div>
    </body>
        </html > `);

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let [result, fields] = await connection.query('select * from Users where id = ?', [userId]);
    console.log(">>>check results: ", result)

    let user = result && result.length > 0 ? result[0] : {};

    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.accname;
    let city = req.body.city;

    await updateUserById(email, city, name, userId)
    // res.send('Updated user succeed');
    res.redirect('/');

}
const getDeletePage = async (req, res) => {

    const userId = req.params.id;
    let [result, fields] = await connection.query('select * from Users where id = ?', [userId]);
    console.log(">>>check results: ", userId)
    let user = result && result.length > 0 ? result[0] : {};
    res.render('delete.ejs', { userDelete: user });
}

const postDeleteUser = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.accname;
    let city = req.body.city;

    await deleteUserById(userId)
    res.send(
        `<html>
        <title > Delete completed </title>
        <h1> Delete completed</h1>
            <script>
                let count = 5;
                function updateCountdown() {
                    document.getElementById('countdown').innerText = count;
                    count--;
                    if (count >= 0) {
                        setTimeout(updateCountdown, 1000);
                    } else {
                        window.location.href = '/';
                    }
                }
                window.onload = updateCountdown;
            </script>
        
    <body>
    
        <div>Back to home after <span id="countdown">5</span> second...</div>
    </body>
        </html > `);
    //res.redirect('/');
}


module.exports = {
    getHomepage, getABC, getABCD, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, getDeletePage
}