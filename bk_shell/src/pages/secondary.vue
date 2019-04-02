<template>
  <div class="in">
  	<div class="in_f"><img src="../assets/index/31.gif"></div>
  	<div class="in_f1"><img src="../assets/sellers/5.gif"></div>
  	<common-header></common-header>
  	<div class="in_2">
  		<input type="text" placeholder="请输入小区或商圈名称"/>
  	</div>
  	<div class="in_3">
  		<div>区域<img src="../assets/sellers/2.gif"></div>
  		<div>价格<img src="../assets/sellers/2.gif"></div>
  		<div>房型<img src="../assets/sellers/2.gif"></div>
  		<div>更多<img src="../assets/sellers/2.gif"></div>
  	</div>
  	<div class="in_4">
  		<div>满五年</div>
  		<div>VR房源</div>
  		<div>近地铁</div>
  		<div>7日新上</div>
  	</div>
  	<div class="in_5" v-for="item in introduce" :key="item.id">
  			<router-link to="/"><img :src="item.introduceimg"></router-link>
  		<div class="in_51"><router-link to="/">{{item.introduce}}</router-link></div>
  		<div class="in_52">{{item.address}}</div>
  		<div class="in_53">{{item.Price}}<span>{{item.UnitPrice}}</span></div>
  		<div class="in_54"><span class="in_541">必看好房</span><span>{{item.Label}}</span><span>地铁</span></div>
  		</div>
  </div>
</template>

<script>
import axios from 'axios'
import commonHeader from '../components/commonHeader'
export default {
	data () {
    return {
    	tools:{},
    	introduce:{},
			introImg:[require('@/assets/index/1.jpg'),require('@/assets/index/2.jpg'),require('@/assets/index/3.jpg'),require('@/assets/index/4.jpg'),require('@/assets/index/5.jpg'),require('@/assets/index/6.jpg'),require('@/assets/index/7.jpg'),require('@/assets/index/8.jpg'),require('@/assets/index/9.jpg'),require('@/assets/index/10.jpg'),require('@/assets/index/11.jpg'),require('@/assets/index/12.jpg')]
    }
  },
  components: {
    commonHeader,
  },
	methods:{
  	back(){
    	this.$router.go(-1);
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
		this.postIntroduce()
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
}
.in_f{
	position: fixed;
		right: 36px;
		bottom: 112px;
		border-radius: 50px;
		box-shadow: 10px 10px 10px #E9EAF3;
}
.in_f1{
	position: fixed;
		right: 36px;
		bottom: 220px;
		border-radius: 50px;
}
.in_f1 img{
	width: 95px;
}
.in_f img{
	width: 95px;
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
	padding: 19px;
	background: #f9f9f9;
}
.in_2 input{
	text-indent: 50px;
	width: 712px;
	height: 58px;
	border: 0;
	background: url(../assets/sellers/1.gif) #e8e8e9 left 15px center no-repeat;
	background-size: 27px;
}
.in_3{
	display: flex;
	height: 85px;
	border-bottom: 1px solid #c8c8c8;
	border-top: 1px solid #c8c8c8;
}
.in_3 div{
	font-size: 24px;
	line-height: 85px;
}
.in_3 div img{
	width: 20px;
	margin-left: 10px;
}
.in_4{
	display: flex;
	padding: 30px 30px;
}
.in_4 div{
	font-size: 22px;
	padding: 18px 30px;
	background: #f8f8f9;
}
	.in_5{
		border-bottom: 1px solid #e4e6f0;
		margin-left: 46px;
		padding: 55px 46px 55px 0;
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
	.in_54 .in_541{
		padding: 3px 8px;
		background: #222222;
		color: #fff5c9;
		margin-right: 14px;
	}
</style>
