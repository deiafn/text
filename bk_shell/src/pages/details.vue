<template>
  <div class="in">
  	<common-header></common-header>
  	<div class="in_2"><img :src="$route.query.imgs"></div>
  	<div class="in_3">
  		<div class="in_31"><div><img src="../assets/sellers/10.gif"></div>关注</div>
  		<div class="in_32"><span>必看好房</span><span>{{$route.query.la}}</span><span>地铁</span><span>随时可看</span></div>
  		<div class="in_33">{{$route.query.in}}</div>
  		<div class="in_34">房源负责人：莫佳明</div>
  	</div>
  	<div class="in_4">
  		<span><div>{{$route.query.pr}}</div>售价</span>
  		<span><div>{{$route.query.ad.split("/")[0]}}</div>房型</span>
  		<span><div>{{$route.query.ad.split("/")[1]}}</div>建筑面积</span>
  	</div>
  	<div class="in_5">
  		<div class="in_51"><span>本房随时可看</span>马上咨询 <button>咨询看房</button></div>
  		<div class="in_52">更多人看，卖的更快</div>
  		<div class="in_53">真实房源，假一赔百元</div>
  		<div class="in_54">
  			<ul>
  				<li><span>单价：</span>{{$route.query.un}}</li>
  				<li><span>挂牌：</span>2018.09.30</li>
  				<li><span>朝向：</span>{{$route.query.ad.split("/")[2]}}</li>
  				<li><span>楼层：</span>低楼层/8层</li>
  				<li><span>楼型：</span>塔楼</li>
  				<li><span>装修：</span>简装</li>
  				<li><span>年代：</span>1995年</li>
  				<li><span>用途：</span>普通住宅</li>
  				<li><span>权属：</span>商品房</li>
  				<li class="ss"><span>首付预算：</span><router-link to="/">首付及贷款情况请咨询经纪人</router-link></li>
  				<li class="ss"><span>小区：</span><router-link to="/">{{$route.query.ad.split("/")[3]}}</router-link></li>
  			</ul>
  		</div>
  		<div class="in_7">推荐经纪人</div>
  		<div class="in_55">
  		<div class="in_551"><img src="../assets/sellers/15.gif"></div>
  		<div class="in_552"><span>刘美馥<br></span>专业挑选好房，用心为您讲解房源</div>
  		<div class="in_551"><img src="../assets/sellers/16.gif"></div>
  		<div class="in_551"><img src="../assets/sellers/17.gif"></div>
  		</div>
  		<div class="in_55">
  		<div class="in_551"><img src="../assets/sellers/18.gif"></div>
  		<div class="in_552"><span>刘美馥<br></span>我带看过本房，清楚本房特色</div>
  		<div class="in_551"><img src="../assets/sellers/16.gif"></div>
  		<div class="in_551"><img src="../assets/sellers/17.gif"></div>
  		</div>
  		<div class="in_55">
  		<div class="in_551"><img src="../assets/sellers/19.gif"></div>
  		<div class="in_552"><span>刘美馥<br></span>我带看过本房，清楚本房特色</div>
  		<div class="in_551"><img src="../assets/sellers/16.gif"></div>
  		<div class="in_551"><img src="../assets/sellers/17.gif"></div>
  		</div>
  		<div class="in_56">
  			<div class="in_561"><img src="../assets/sellers/21.gif"></div>
  			<div class="in_562">房型分间</div>
  			<div class="in_563">客厅：17.98㎡/暂无数据/无窗</div>
  			<div class="in_563">卧室A：12.67㎡/东 北/普通窗</div>
  			<div class="in_563">卧室B：5.99㎡/东/普通窗</div>
  		</div>
  	</div>
  		<div class="in_6"><img src="../assets/sellers/20.gif"></div>
  		<div class="in_7">房源介绍</div>
  		<div class="in_8">此房源满五唯一无按揭楼层好交通便利小区环境安静该房子为简单住家装修，自居住以来除了对房屋简单的装修保养以外，没有进行过格局上的改动，购买后需重新装修为好公交：206路、20路、229路、252路、262路、264A路、270路...</div>
  		<div class="in_9">
  			<img src="../assets/sellers/18.gif">
  			<span>莫佳明</span>
  			<button style="background: #3bc48b;">在线问</button>
  			<button style="background: #3072f6;">打电话</button>
  		</div>
  </div>
</template>

<script>
import commonHeader from '../components/commonHeader'
export default {
  data () {
    return {
    	details:{}
    }
  },
  components: {
    commonHeader,
  },
  methods: {
  	 postDetails(){
			axios.post('/api/user/selectTool',{id:window.location.search.substr(1).match(sid)}).then((res) => {
        console.log(res)
        this.details = (res.data)
			})
		}
  },	
	mounted(){
//		this.postDetails()
	}
}
</script>
<style scoped="scoped">
a{
	text-decoration: none;
}
.in{
	background: #FFFFFF;
}
.in_2,.in_2 img{
	width: 750px;
	height: 564px;
}
.in_3,.in_5,.in_7,.in_8{
	padding: 0 45px;
}
.in_31{
	float: right;
	width: 70px;
}
.in_31 img{
	width: 35px;
	font-size: 20px;
}
.in_32{
	margin-top: 40px;
	text-align: left;
}
.in_32 span{
	font-size: 18px;
	padding: 6px;
	background: #f4f7f9;
	color: #8399ae;
	border-radius: 5px;
	margin-right: 8px;
}
.in_32 span:nth-of-type(1){
	background: #222222;
	color: #ffefc4;
}
.in_33{
	margin: 34px 0;
	text-align: left;
	font-size: 44px;
}
.in_34{
	text-align: left;
	font-size: 22px;
}
.in_4{
	padding: 36px 0;
	background: url(../assets/sellers/11.gif) center no-repeat;
	background-size: 750px 76px;
	display: flex;
	font-size: 22px;
	color: #8f95a2;
}
.in_4 div{
	margin-bottom: 10px;
	color: red;
	font-size: 32px;
}
.in_51{
	text-indent: 50px;
	text-align: left;
	line-height: 58px;
	font-size: 21px;
	background: url(../assets/sellers/12.gif) left center no-repeat;
	background-size: 30px;
}
.in_51 span{
	margin-right: 14px;
}
.in_51 button{
	float: right;
	padding: 16px 22px;
	font-size: 20px;
	background: #FFFFFF;
	border: 1px solid #cdd0d5;
}
.in_52{
	font-size: 23px;
	margin-top: 30px;
	text-align: left;
	text-indent: 138px;
	background: url(../assets/sellers/13.gif) center no-repeat;
	background-size: 658px;
}
.in_53{
	font-size: 23px;
	margin-top: 30px;
	text-align: left;
	text-indent: 66px;
	background: url(../assets/sellers/14.gif) center no-repeat;
	background-size: 658px;
}
.in_54{
	margin: 20px 0;
	font-size: 28px;
	height: 450px;
}
.in_54 li{
	text-align: left;
	float: left;
	width: 330px;
	line-height: 62px;
	list-style-type: none;
}
.in_54 li span{
	color: #8f96a2;
}
.in_54 .ss{
	width: 660px;
}
.in_55{
	margin-top: 30px;
	display: flex;
	text-align: left;
}
.in_551 img{
	border-radius: 50px;
	width: 77px;
}
.in_552{
	width: 368px;
	font-size: 22px;
}
.in_552 span{
	margin-top: 10px;
	font-size: 28px;
}
.in_56{
	border-top: 1px solid #E1E1E1;
	padding: 33px 0;
	text-align: left;
}
.in_561{
	float: right;
}
.in_561 img{
	width: 117px;
}
.in_562{
	margin-bottom: 10px;
	font-size: 27px;
}
.in_563{
	font-size: 22px;
}
.in_6 img{
	width: 100%;
	height: 400px;
}
.in_7{
	text-align: left;
	font-size: 28px;
}
.in_8{
	line-height: 44px;
	font-size: 26px;
	text-align: left;
	margin-top: 20px;
}
.in_9{
	font-size: 28px;
	width: 750px;
	position: fixed;
	bottom: 0;
	background: #FFFFFF;
	height: 156px;
	text-align: left;
}
.in_9 img{
	margin-top: 40px;
	float: left;
	margin-left: 53px;
	border-radius: 50px;
	width: 77px;
}
.in_9 span{
	margin:0 60px 0 20px ;
	float: left;
	padding-top: 30px;
}
.in_9 button{
	margin-right: 15px;
	margin-top: 30px;
	color: #FFFFFF;
	border-radius: 10px;
	border: 0;
	padding: 34px 54px;
}

</style>
