<template>
  <div class="in">
  	<div class="in_1">
  		<div><router-link to="/Individual"><img src="../assets/login/31.gif"></router-link></div>
  		<div class="in_12">{{userHide}}</div>
  		<div class="in_13"><router-link to="/register">注册</router-link></div>
  	</div>
  	<div class="in_2">
  		<div class="in_21">{{userShow}}</div>
  		<form>
  		<input @click="userCm" type="number" placeholder="请输入手机号" v-model="userPhone">
  		<input type="password" placeholder="请输入密码" v-model="userPass">
  		<div class="in_23"><input type="submit" @click="addUser" value="登录"></div>
  		</form>
  		<div class="in_24"><router-link to="/Quicklogin">手机快捷登录</router-link>&nbsp;
  			<router-link to="/Retrieve">忘记密码</router-link></div>
  	</div>
  	<div class="in_3">
  		注册/登录即代表同意<span>《贝壳隐私政策》</span>及<span>《贝壳用户服务协议》</span>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	userHide:'',
    	userShow:'账号密码登录',
      userPhone: '',
      userPass: ''
    }
  },
  methods: {
  	userCm:function(){
  			this.userHide="账号密码登录",
  			this.userShow=""
  	},
  	addUser:function () {
      var regPhone = /^1(3|5|8)\d{9}$/;
      var regAge = /^[a-zA-Z0-9]{8,16}$/;
  		if(this.userPhone==""){
  			alert("手机号不能为空");
  			return false;
  		}else if(regPhone.test(this.userPhone) == false){
  			alert("请输入正确的手机号码");
  		}else if(this.userPass==""){
  			alert("密码不能为空");
  		}else if(regAge.test(this.userPass) == false){
  			alert("请输入8-16位，数字+字母");
  		}else{
  			let data ={username: this.userPhone,password: this.userPass}
  			this.$http.post('/api/user/selectUser',data).then((res) => {
        		console.log(res);
        		if(res.data == -1||res.data == 0) {
  						alert("用户名密码错误");
              this.showTishi = true
            }else{
  						alert("登录成功");
				sessionStorage.setItem('sid', res.data.id); // 设置本地存储信息
				this.$router.push(this.$router.push({
  							path:'/hideIndividual',
  							query:{
  								code:''+this.userPhone+''
  							}
  						}));
  						
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
.in{
	background: #FFFFFF;
	height: 1330px;
}
.in_1{
	height: 78px;
	display: flex;
	padding-bottom: 6px;
}
.in_1 div img{
	margin-top: 24px;
	width: 35px;
}
.in_1 .in_12{
	font-size: 30px;
	line-height: 78px;
	margin: 0;
	width: 430px;
}
.in_13{
	font-size: 26px;
	line-height: 80px;
}
.in_2 input{
	height: 106px;
	font-size: 28px;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	padding-bottom: 8px;
	border-bottom: 1px solid #e1e1e1;
	width: 638px;
}
.in_21{
	text-align: left;
	padding-left: 60px;
	line-height: 120px;
	font-size: 46px;
}
.in_23 input{
	margin-top: 23px;
	border: 0;
	background: #008aff;
	color: #FFFFFF;
}
.in_24{
	margin-top: 45px;
	font-size: 22px;
	margin-bottom: 29px;
}
.in_3{
	text-align: left;
	padding: 0 62px;
	color: #d1d4d8;
	font-size: 22px;
}
.in_3 span{
	text-decoration: underline;
}
</style>
