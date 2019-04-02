<template>
  <div class="in">
  	<div class="in_f"><img src="../assets/index/31.gif"></div>
  	<div class="in_1">
  		<div class="in_11"><router-link to="/Individual"><img src="../assets/index/6.gif"></router-link></div>
  		<div class="in_12">二手房 / 租房 / 新房</div>
  		<div class="in_13">好房好服务<br>找房上贝壳</div>
  		<div class="in_14"><router-link to="/Location"><img src="../assets/index/7.gif">长沙</router-link></div>
  		<div class="in_15"><input type="text" placeholder="输入小区或商圈开始找房咯~"></div>
  	</div>
  	<div class="in_2">
  		<div><router-link to="/secondary">
  			<img src="https://s1.ljcdn.com/mensa/static/m/images/home/icon_ershoufang.png?version=fasfgd8dt4">
  		</router-link><br/>
  			<router-link to="/secondary">二手房</router-link></div>
  		<div><router-link to="/">
  			<img src="https://s1.ljcdn.com/mensa/static/m/images/home/icon_zufang.png?version=fasfgd8dt4">
  		</router-link><br/>
  			<router-link to="/">租房</router-link></div>
  		<div><router-link to="/">
  			<img src="https://s1.ljcdn.com/mensa/static/m/images/home/icon_xinfang.png?version=fasfgd8dt4">
  		</router-link><br/>
  			<router-link to="/">新房</router-link></div>
  		<div><router-link to="/">
  			<img src="https://s1.ljcdn.com/mensa/static/m/images/home/icon_haiwai.png?version=fasfgd8dt4">
  		</router-link><br/>
  			<router-link to="/">海外</router-link></div>
  	</div>
  	<div class="in_3">
  		<div class="in_31">常用工具</div>
  		<div class="in_32">
  			<ul>
  				<li v-for="item in tools" :key="item.toolid">
  					<router-link to="/"><img :src="item.img"><br/>
  			{{item.tool}}</router-link>
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
  		<div class="in_5" v-for="item in introduce" :key="item.id">
  			<router-link :to="{path: 'details', query: {in:item.introduce,ad:item.address,pr:item.Price,un:item.UnitPrice,la:item.Label,imgs:item.introduceimg}}">
  			<img :src="item.introduceimg">
  			<div class="in_51">{{item.introduce}}</div>
  			<div class="in_52">{{item.address}}</div>
  			<div class="in_53">{{item.Price}}<span>{{item.UnitPrice}}</span></div>
  			<div class="in_54"><span class="in_541">必看好房</span><span>{{item.Label}}</span><span>地铁</span></div>
  		</router-link>
  		</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
    return {
    	tools:{},
    	introduce:{},
			linkImg:[require('@/assets/index/17.gif'),require('@/assets/index/18.gif'),require('@/assets/index/19.gif'),require('@/assets/index/20.gif'),require('@/assets/index/21.gif'),require('@/assets/index/22.gif'),require('@/assets/index/23.gif'),require('@/assets/index/24.gif'),require('@/assets/index/25.gif')],
			introImg:[require('@/assets/index/1.jpg'),require('@/assets/index/2.jpg'),require('@/assets/index/3.jpg'),require('@/assets/index/4.jpg'),require('@/assets/index/5.jpg'),require('@/assets/index/6.jpg'),require('@/assets/index/7.jpg'),require('@/assets/index/8.jpg'),require('@/assets/index/9.jpg'),require('@/assets/index/10.jpg'),require('@/assets/index/11.jpg'),require('@/assets/index/12.jpg')]
    }
  },
	methods:{
		postIndex(){
			axios.post('/api/user/selectTool').then((res) => {
        console.log(res)
        this.tools = (res.data)
        this.tools[0].img=this.linkImg[0]
        this.tools[1].img=this.linkImg[1]
        this.tools[2].img=this.linkImg[2]
        this.tools[3].img=this.linkImg[3]
        this.tools[4].img=this.linkImg[4]
        this.tools[5].img=this.linkImg[5]
        this.tools[6].img=this.linkImg[6]
        this.tools[7].img=this.linkImg[7]
        this.tools[8].img=this.linkImg[8]
			})
		},
		postIntroduce(){
			axios.post('/api/user/selectIntroduce').then((res) => {
        console.log(res)
        this.introduce = (res.data)
        this.introduce[0].introduceimg=this.introImg[0]
        this.introduce[1].introduceimg=this.introImg[1]
        this.introduce[2].introduceimg=this.introImg[2]
        this.introduce[3].introduceimg=this.introImg[3]
        this.introduce[4].introduceimg=this.introImg[4]
        this.introduce[5].introduceimg=this.introImg[5]
        this.introduce[6].introduceimg=this.introImg[6]
        this.introduce[7].introduceimg=this.introImg[7]
        this.introduce[8].introduceimg=this.introImg[8]
        this.introduce[9].introduceimg=this.introImg[9]
        this.introduce[10].introduceimg=this.introImg[10]
        this.introduce[11].introduceimg=this.introImg[11]
			})
		}
	},	
	mounted(){
		this.postIndex(),
		this.postIntroduce()
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
	.in{
	background: #FFFFFF;
	}
	.in_1{
		width: 100%;
		height: 465px;
		background: url(https://s1.ljcdn.com/mensa/static/m/images/home/head_bg.jpg?version=farfmolueg) no-repeat;
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
		background: url(../assets/index/8.gif) #fff left 34px center no-repeat;
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
		font-size: 20px;
	}
	.in_32 li img{
		height: 40px;
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
	.in_54 .in_541{
		padding: 3px 8px;
		background: #222222;
		color: #fff5c9;
		margin-right: 14px;
	}
	.in_54 span{
		padding: 3px 8px;
		background: #f4f7f9;
		margin-right: 14px;
	}
</style>
