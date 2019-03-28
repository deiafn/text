<template>
  <div>
  	<div class="ss"><router-link to="/"><span><img src="../assets/登录注册/8.gif"></span></router-link>
  		<input placeholder="请输入城市名称"></div>
  	<div class="in_1">
  		<div class="yes_1">国内城市</div>
  		<div>海外城市</div>
  	</div>
  	<div class="in_2">
  		<span>岳阳</span><span>GPS定位</span><span>重新定位</span>
  	</div>
  	<div class="in_3">历史</div>
  		<div class="in_3"><div>广州</div></div>
  	<div class="in_3"></div>
  	<div class="in_4">
  		<ul>
  			<li v-for="item in hotCities" :key="item.id">{{item.name}}</li>
  		</ul>
  	</div>
  	<div v-for="(item,key) in cities" :key="key">
  		<div class="in_3">{{key}}</div>
  	<div class="in_4">
  		<ul>
  			<li v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
  		</ul>
  	</div>
  	</div>
  	<div class="in_5">
  		<ul>
  			<li>#</li>
  			<li v-for="(item,key) of cities" :key="key">{{key}}</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	data () {
    return {
      cities: {},
      hotCities: [],
      types: []
    }
  },
	methods:{
		postLocation(){
			axios.post('/api/user/selectType').then((res) => {
        console.log(res)
        this.types = res.data
			})
		},
		getLocation(){
			axios.get('/static/mock/city.json').then(this.handleGetCityInfoSucc)
		},
    handleGetCityInfoSucc (res) {
    	res = res.data
    	if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
	},	
	mounted(){
		this.postLocation(),
		this.getLocation()
	}
}
</script>
<style scoped="scoped">
a{
		color: #2C3E50;
	text-decoration: none;
}
.ss{
	padding: 13px 0;
}
.ss span img{
	margin-right: 40px;
	width: 29px;
}
.ss input{
	font-size: 22px;
	height: 70px;
	border: 0;
	text-indent: 62px;
	border-radius: 50px;
	background: url(../assets/登录注册/9.gif) left 30px center #f8f8f9 no-repeat;
	background-size: 25px;
	width: 612px;
}
.in_1{
	font-size: 29px;
	display: flex;
	height: 88px;
	line-height: 88px;
	margin: 0 143px;
	color: #9096a2;
}
.yes_1{
	background: url(../assets/登录注册/7.gif) bottom 9px center no-repeat;
	background-size: 22px;
	color: #000000;
}
.in_2{
	padding:  0 48px;
	text-align: left;
	height: 116px;
	line-height: 116px;
	border-bottom: 1px solid #e4e6f0;
	border-top: 1px solid #e4e6f0;
}
.in_2 span:nth-of-type(1){
	font-size: 28px;
	margin-right: 28px;
	color: #0d1a35;
}
.in_2 span:nth-of-type(2){
	font-size: 24px;
	color: #8c939f;
}
.in_2 span:nth-of-type(3){
	float: right;
	font-size: 22px;
	color: #1e66f5;
}
.in_3{
	float: left;
	background: #f8f8f9;
	padding-left: 48px;
	width: 702px;
	font-size: 22px;
	text-align: left;
	line-height: 72px;
}
.in_3 div{
	float: left;
	line-height: 54px;
	margin-right: 30px;
	padding: 0 75px;
	margin-bottom: 30px;
	background: #FFFFFF;
}
.in_4{
	float: left;
	width: 704px;
	padding: 0 0 0 46px;
	border-bottom: 1px solid #e4e6f0;
	border-top: 1px solid #e4e6f0;
}
.in_4 li{
	list-style-type: none;
	text-align: left;
	line-height: 114px;
	border-top: 1px solid #e3e5ef;
}
.in_4 li:nth-of-type(1){
	border-top: 0;
}
.in_5{
	position: fixed;
	right: 20px;
	top: 300px;
	line-height: 35px;
	font-size: 19px;
}
.in_5 li{
	list-style-type: none;
}
</style>
