<template>
  <div>
  	<div class="in_f"><img src="../assets/主页/31.gif"></div>
  	<div class="in_1">
  		<div class="in_11"><router-link to="/Individual"><img src="../assets/主页/6.gif"></router-link></div>
  		<div class="in_12">二手房/租房/新房</div>
  		<div class="in_13">好房好服务<br>找房上贝壳</div>
  		<div class="in_14"><router-link to="/Location"><img src="../assets/主页/7.gif">长沙</router-link></div>
  		<div class="in_15"><input type="text" placeholder="输入小区或商圈开始找房咯~"></div>
  	</div>
  	<div class="in_2">
  		<div><router-link to="/secondary"><img src="../assets/主页/13.gif"></router-link><br/>
  			<router-link to="/secondary">二手房</router-link></div>
  		<div><router-link to="/"><img src="../assets/主页/14.gif"></router-link><br/>
  			<router-link to="/">租房</router-link></div>
  		<div><router-link to="/"><img src="../assets/主页/15.gif"></router-link><br/>
  			<router-link to="/">新房</router-link></div>
  		<div><router-link to="/"><img src="../assets/主页/16.gif"></router-link><br/>
  			<router-link to="/">海外</router-link></div>
  	</div>
  	<div class="in_3">
  		<div class="in_31">常用工具</div>
  		<div class="in_32">
  			<ul>
  				<li v-for="item in tools" :key="item.toolid">
  					<router-link to="/"><img src="http://"></router-link><br/>
  			<router-link to="/">{{item.tool}}</router-link>
  				</li>
  			</ul>
  		</div>
  	</div>
  	<div class="in_4">
  		<div class="in_41">为您推荐</div>
  		<div class="in_42">
  			<span>二手房</span>
  			<span>新房</span>
  			<span>租房</span>
  		</div>
  	</div>
  		<div class="in_5">
  			<router-link to="/"><img src="../assets/主页/26.gif"></router-link>
  		<div class="in_51"><router-link to="/">客村地铁100米 广东教育学院宿舍 低层两房</router-link></div>
  		<div class="in_52">2室1厅/51.69㎡/南/广东教育学院</div>
  		<div class="in_53">168万<span>32502元/平</span></div>
  		<div class="in_54"><span>满两年</span><span>地铁</span></div>
  		</div>
  		<div class="in_5" v-for="item in introduces" :key="item.id">
  			<router-link to="/"><img src="https//"></router-link>
  		<div class="in_51"><router-link to="/">{{item.describe}}</router-link></div>
  		<div class="in_52">{{item.address}}</div>
  		<div class="in_53">{{item.Price}}<span>{{item.UnitPrice}}</span></div>
  		<div class="in_54"><span>{{item.Label}}</span></div>
  		</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
    return {
      tools: [],
      introduces: []
    }
  },
	methods:{
		postIndex(){
			axios.get('/static/mock/index.json').then(this.toolInfo)
		},
    toolInfo (res) {
    	res = res.data
    	if (res.ret && res.data) {
        const data = res.data
        this.tools = data.tool
        this.introduces=data.introduce
      }
    }
	},	
	mounted(){
		this.postIndex()
	}
}
</script>
<style scoped="scoped">
.in_f{
	position: fixed;
		right: 36px;
		bottom: 112px;
		border-radius: 50px;
		box-shadow: 10px 10px 10px #E9EAF3;
}
.in_f img{
	width: 95px;
}
	.in_1{
		width: 100%;
		height: 465px;
		background: url(../assets/主页/12.gif) no-repeat;
		background-size: 100%;
		color: #FFFFFF;
		position: relative;
	}
	.in_11 img{
		position: absolute;
		right: 53px;
		top: 48px;
		width: 30px;
	}
	.in_12{
		position: absolute;
		left: 78px;
		top: 94px;
		font-size: 20px;
	}
	.in_13{
		position: absolute;
		left: 78px;
		top: 134px;
		font-weight: 900;
		font-size: 48px;
	}
	.in_14{
		position: absolute;
		left: 78px;
		bottom: 108px;
		line-height: 65px;
		width: 146px;
		font-size: 24px;
		background: rgba(0,0,0,0.5);
		border-radius: 50px;
	}
	.in_14 a{
		color: #FFFFFF;
	}
	.in_14 img{
		margin-right: 11px;
		width: 22px;
	}
	.in_15 input{
		position: absolute;
		top: 426px;
		left: 5%;
		text-indent: 75px;
		font-size: 24px;
		height: 76px;
		width: 90%;
		border: 0;
		border-radius: 50px;
		background: url(../assets/主页/8.gif) #fff left 34px center no-repeat;
		background-size: 23px;
		box-shadow: 5px 5px 5px #E9EAF3;
	}
	.in_2{
		display: flex;
		font-size: 24px;
		margin-bottom: 56px;
	}
	a{
		color: #2C3E50;
		text-decoration: blink;
	}
	.in_2 div img{
		margin-top: 96px;
		width: 92px;
	}
	.in_31{
		padding-right: 10px;
		font-weight: 700;
		float: left;
		text-indent: 48px;
		font-size: 30px;
	}
	li{
		font-size: 24px;
		margin: 15px 15px;
		width: 120px;
		height: 100px;
		list-style-type: none;
		float: left;
	}
	.in_32{
		margin-top: 20px;
		float: left;
	}
	.in_32 li img{
		height: 46px;
	}
	.in_4{
		float: left;
		margin-bottom: 60px;
	}
	.in_41{
		padding-right: 262px;
		font-weight: 700;
		float: left;
		text-indent: 48px;
		font-size: 30px;
	}
	.in_42{
		font-size: 22px;
		float: right;
		margin-top: 10px;
	}
	.in_42 span{
		margin-right: 46px;
	}
	.in_5{
		border-bottom: 1px solid #e4e6f0;
		margin: 0 46px;
		padding: 55px 0;
	}
	.in_5 img{
		float: left;
		border-radius: 5px;
		width: 206px;
	}
	.in_5 div{
		text-align: left;
		padding-left: 246px;
	}
	.in_51{
		line-height: 40px;
		font-size: 28px;
	}
	.in_52{
		font-size: 20px;
		color: #898989;
		line-height: 40px;
	}
	.in_53{
		line-height: 40px;
		color: #fa4f38;
		font-size: 24px;
	}
	.in_53 span{
		color: #9399a5;
		font-size: 17px;
	}
	.in_54{
		color: #7d95aa;
		font-size: 19px;
	}
	.in_54 span{
		padding: 3px 8px;
		background: #f4f7f9;
		margin-right: 14px;
	}
</style>
