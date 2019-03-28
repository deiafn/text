var sqlMap = {
    user: {
        add: 'INSERT INTO user(username, password) VALUES (?, ?)',
        select_name: 'SELECT * from user where username = ?',
        select_password: 'SELECT * from user where password = ?'
    },
    city: {
    	select_type: 'SELECT * from type'
    },
    tool: {
    	select_tool: 'select * from tool'
    }
}

module.exports = sqlMap;