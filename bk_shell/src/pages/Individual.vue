<template>
  <div>
  	<div class="in_1">
  		<div class="in_11"><img src="../assets/登录注册/1.gif">
  		<router-link to="/Location"><span>广州<img src="../assets/登录注册/2.gif"></span></router-link></div>
  		<div class="in_12"><img src="../assets/登录注册/4.gif"></div>
  		<div class="in_13"><router-link to="/"><img src="../assets/登录注册/3.gif"></router-link></div>
  	</div>
  	<div class="in_2">
  		<div class="in_21"><img src="../assets/登录注册/5.gif"></div>
  		<div class="in_22"><span><router-link to="/Login">登录</router-link></span>
  			<span><router-link to="/register">注册</router-link></span></div>
			<div>{{userPhone}}</div>
  	</div>
  	<div class="in_3">
  		<ul>
  			<li>我关注的房源<img src="../assets/登录注册/10.gif"></li>
  			<li>我关注的小区<img src="../assets/登录注册/10.gif"></li>
  			<li>我关注的新房<img src="../assets/登录注册/10.gif"></li>
  			<li>我关注的租房<img src="../assets/登录注册/10.gif"></li>
  			<li>我的租房优惠券<img src="../assets/登录注册/10.gif"></li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userPhone: ''
    }
  },
  methods: {
  }
}
</script>
<style scoped="scoped">
a{
		color: #2C3E50;
	text-decoration: none;
}
.in_1{
	height: 95px;
	display: flex;
	border-bottom: 1px solid #dedede;
	border-top: 1px solid #dedede;
}
.in_11{
	margin-left: 38px;
	margin-right: 0;
}
.in_11>img{
	margin-top: 30px;
	width: 19px;
	margin-right: 54px;
}
.in_11 span{
	font-size: 22px;
}
.in_11 span img{
	margin-left: 8px;
	width: 15px;
}
.in_12{
	margin-left: 134px;
}
.in_12 img{
	margin-top: 26px;
	width: 122px;
}
.in_13{
	margin-right: 38px;
}
.in_13 img{
	margin-top: 30px;
	width: 34px;
}
.in_2{
	background: #4471fb;
	height: 380px;
}
.in_21 img{
	margin-top: 76px;
	width: 102px;
}
.in_22{
	margin-top: 46px;
	margin-bottom: 24px;
}
.in_22 span{
	margin: 0 12px;
	padding:20px 54px;
	text-align: center;
	border: 1px solid #FFFFFF;
}
.in_22 span a{
	color: #FFFFFF;
}
.in_3{
	border-bottom: 1px solid #e6e8f1;
	border-top: 1px solid #e6e8f1;
}
.in_3 ul{
	padding-left: 95px;
	background: url(../assets/登录注册/11.gif) left 38px center no-repeat;
	background-size: 30px;
}
.in_3 li{
	list-style-type: none;
	font-size: 24px;
	line-height: 98px;
	margin-top: 1px solid #e6e8f1;
	text-align: left;
}
.in_3 li:nth-of-type(1){
	margin-top:0;
}
.in_3 li img{
	float: right;
	margin-top: 34px;
	margin-right: 56px;
	width: 16px;
}
</style>
