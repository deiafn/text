<template>
  <div>
  	<common-header></common-header>
  	<div class="in_2">
  		<div class="in_21"><img src="../assets/login/5.gif"></div>
			<div class="in_23">{{"欢迎你，"+$route.query.code}}</div>
  	</div>
  	<div class="in_3">
  		<ul>
  			<li><router-link :to="{path: 'follow', query: {code: '没有关注房源' }}">我关注的房源<img src="../assets/login/10.gif"></router-link></li>
  			<li><router-link :to="{path: 'follow', query: {code: '没有关注小区' }}">我关注的小区<img src="../assets/login/10.gif"></router-link></li>
  			<li><router-link :to="{path: 'follow', query: {code: '没有关注新房' }}">我关注的新房<img src="../assets/login/10.gif"></router-link></li>
  			<li><router-link :to="{path: 'follow', query: {code: '没有关注租房' }}">我关注的租房<img src="../assets/login/10.gif"></router-link></li>
  			<li><router-link :to="{path: 'follow', query: {code: '你还没有优惠券' }}">我的租房优惠券<img src="../assets/login/10.gif"></router-link></li>
  		</ul>
  	</div>
  	<div class="in_4"><input type="button" value="退出登录" @click="btn"></div>
  </div>
</template>

<script>
import commonHeader from '../components/commonHeader'
export default {
  data () {
    return {
    }
  },
  components: {
    commonHeader,
  },
  methods: {
  	back(){
    	this.$router.go(-1);
  	},
  	btn(){
  		sessionStorage.removeItem('sid');
  		this.$router.push({
  			path:'/Individual',
  			query:{
  				
  			}
  		});
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
	height: 95px;
	display: flex;
	border-bottom: 1px solid #dedede;
	border-top: 1px solid #dedede;
	background: #FFFFFF;
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
.in_1>a{
	margin: 30px 0;
}
.in_1 a span{
	font-size: 22px;
}
.in_1 span img{
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
.in_23{
	margin-top: 40px;
	color: #FFFFFF;
}
.in_3{
	background: #FFFFFF;
	border-bottom: 1px solid #e6e8f1;
	border-top: 1px solid #e6e8f1;
}
.in_3 ul{
	padding-left: 95px;
	background: url(../assets/login/11.gif) left 38px center no-repeat;
	background-size: 30px;
}
.in_3 li{
	list-style-type: none;
	font-size: 24px;
	line-height: 98px;
	border-top: 1px solid #e6e8f1;
	text-align: left;
}
.in_3 li:nth-of-type(1){
	border-top:0;
}
.in_3 li img{
	float: right;
	margin-top: 34px;
	margin-right: 56px;
	width: 16px;
}
.in_4 input{
	margin-top: 50px;
	background: #FFFFFF;
	border: 1px solid #C8C8C8;
	height: 80px;
	width: 720px;
	font-size: 26px;
}
</style>
