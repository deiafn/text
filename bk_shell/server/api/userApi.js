var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户
router.post('/addUser', (req, res) => {
    var sql_name = $sql.user.select_name;
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql_name,params.username,function(err,result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            conn.query(sql,[params.username,params.password], function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result) {
                    jsonWrite(res, result)
                }
            })
        }else {
            res.send('-1')    //当前注册username与数据库重复时，data返回-1
        }
    })
});
//查找用户名
router.post('/selectUser', (req,res) => {
    var sql_name = $sql.user.select_name;
    var sql_password = $sql.user.select_password;
    var params = req.body;
    conn.query(sql_name,params.username,function(err, result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            res.send('-1')    //查询不出username，data返回-1
        }else {
            conn.query(sql_password,params.password, function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result[0]===undefined) {
                    res.send('0')    //username正确后，password错误，data返回 0
                }else {
                    jsonWrite(res, result);
                }
            })
        }
    })
});
router.post('/selectType',(req,res) => {
    var params = req.body;
	conn.query('SELECT * from type',function(err,result){
		if(err) {
            console.log(err)
        }
		if(result[0]===undefined) {
        res.send('0')
      }else {
        res.send(result)
      }
	});
});
router.post('/selectTool',(req,res) => {
	conn.query('select * from tool',function(err,result){
		if(err) {
            console.log(err)
        }
		if(result[0]===undefined) {
        res.send('0')
      }else {
        res.send(result)
      }
	});
});
router.post('/selectIntroduce',(req,res) => {
	conn.query('select * from introduce',function(err,result){
		if(err) {
            console.log(err)
        }
		if(result[0]===undefined) {
        res.send('0')
      }else {
        res.send(result)
      }
	});
});
router.post('/selectDetails',(req,res) => {
    var params = req.body;
	conn.query('SELECT * FROM introduce WHERE id=?',params.id,function(err,result){
		if(err) {
            console.log(err)
        }
		if(result[0]===undefined) {
        res.send('0')
      }else {
        res.send(result)
      }
	});
});
module.exports = router;