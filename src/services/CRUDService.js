const connection = require("../config/database");

const getAllUsers = async () => {
    let [result, fields] = await connection.query('select *from Users');
    return result;
}

const updateUserById = async (email, city, name, userId) => {

    let [result, fields] = await connection.query(
        `UPDATE Users 
        set email=?,city=?,name=?
        where id= ?`, [email, city, name, userId],
    );
}
const deleteUserById = async (userId) => {

    let [result, fields] = await connection.query(
        `DELETE FROM Users  
        WHERE id=?;`, [userId]);
    return result;

}

module.exports = {
    getAllUsers,
    updateUserById,
    deleteUserById,
}