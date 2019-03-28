<template>
  <div>
  	<div class="in_1">
  		<div><img src="../assets/登录注册/32.gif"></div>
  		<div class="in_12">注册账号</div>
  		<div></div>
  	</div>
  	<div class="in_2">
  		<form>
  		<div class="in_21">
  			<input type="number" placeholder="请输入手机号" v-model="userPhone" >
  			<input type="button" value="发送验证码"></div>
  		<div class="in_22"><input type="number" placeholder="请输入验证码"></div>
  		<div class="in_22">
  			<input type="password" placeholder="请输入新密码（最少8位，数字+字母）" v-model="userPass">
  		</div>
  		<div class="in_23"><input type="submit" @click="addUser" value="提交"></div>
  		</form>
  	</div>
  	<div class="in_3">
  		注册/登录即代表同意《贝壳隐私政策》及《贝壳用户服务协议》
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userPhone: '',
      userPass: ''
    }
  },
  methods: {
  	addUser:function (event) {
      var regPhone = /^1(3|5|8)\d{9}$/;
      var regAge = /^[a-zA-Z0-9]{8,16}$/;
  		if(this.userPhone==""){
  			alert("手机号不能为空");
  		}else if(regPhone.test(this.userPhone) == false){
  			alert("请输入正确的手机号码");
  		}else if(this.userPass==""){
  			alert("密码不能为空");
  		}else if(regAge.test(this.userPass) == false){
  			alert("请输入8-16位，数字+字母");
  		}else{
  			let data ={username: this.userPhone,password: this.userPass}
  			this.$http.post('/api/user/addUser',data).then((res) => {
        		console.log(res);
        		if(res.data == -1) {
  						alert("该账号已存在");
              this.showTishi = true
            }else{
  						alert("注册成功");
  						this.$router.push({path:'/Login'})
            }
      		})
  		}
  		
  		
      }
  }
}
</script>
<style scoped="scoped">
a{
		color: #2C3E50;
	text-decoration: none;
}
.in_1{
	height: 78px;
	display: flex;
	padding-bottom: 6px;
}
.in_1 div img{
	margin-top: 20px;
	width: 29px;
}
.in_1 .in_12{
	font-size: 30px;
	line-height: 78px;
	margin: 0 216px;
}
.in_2 input{
	height: 106px;
	font-size: 28px;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	padding-bottom: 8px;
	border-bottom: 1px solid #e1e1e1;
}
.in_21{
	position: relative;
	text-align: left;
}
.in_21 input:nth-of-type(1){
	margin-left: 57px;
	width: 484px;
}
.in_21 input:nth-of-type(2){
	position: absolute;
	top: 10px;
	right: 57px;
	background: #FFFFFF;
	width: 154px;
	color: #9399a5;
}
.in_22 input{
	width: 638px;
}
.in_23 input{
	margin-top: 23px;
	border: 0;
	width: 638px;
	background: #008aff;
	color: #FFFFFF;
}
.in_3{
	margin-top: 62px;
	text-align: left;
	padding: 0 62px;
	color: #d1d4d8;
	font-size: 22px;
}
.in_3 span{
	text-decoration: underline;
}
</style>
