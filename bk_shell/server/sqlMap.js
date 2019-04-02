var sqlMap = {
    user: {
        add: 'INSERT INTO user(username, password) VALUES (?, ?)',
        select_name: 'SELECT * from user where username = ?',
        select_password: 'SELECT * from user where password = ?'
    }
}

module.exports = sqlMap;