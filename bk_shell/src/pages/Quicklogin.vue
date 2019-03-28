<template>
  <div>
  	<div class="in_1">
  		<div><img src="../assets/登录注册/31.gif"></div>
  		<div class="in_12"></div>
  		<div class="in_13"><router-link to="/register">注册</router-link></div>
  	</div>
  	<div class="in_2">
  		<div class="in_21">手机快捷登录</div>
  		<div class="in_25">未注册过的手机号将自动创建贝壳账号，经纪人不会看到您的手机号</div>
  		<form action="#">
  		<div class="in_22"><input type="number" placeholder="请输入手机号">
  		<input type="button" value="发送验证码"></div>
  		<input type="number" placeholder="请输入验证码">
  		<div class="in_23"><input type="submit" value="登录"></div>
  		</form>
  		<div class="in_24"><router-link to="/Login">账号密码登录</router-link></div>
  	</div>
  	<div class="in_3">
  		注册/登录即代表同意<span>《贝壳隐私政策》</span>及<span>《贝壳用户服务协议》</span>
  	</div>
  </div>
</template>

<script>
export default {
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
	margin-top: 24px;
	width: 35px;
}
.in_1 .in_12{
	font-size: 30px;
	line-height: 78px;
	margin: 0 216px;
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
.in_22{
	position: relative;
	text-align: left;
}
.in_22 input:nth-of-type(1){
	margin-left: 57px;
	width: 484px;
}
.in_22 input:nth-of-type(2){
	position: absolute;
	top: 10px;
	right: 57px;
	background: #FFFFFF;
	width: 154px;
	color: #9399a5;
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
.in_25{
	color: #858c9a;
	font-size: 27px;
	line-height: 42px;
	padding: 0 60px;
	text-align: left;
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
