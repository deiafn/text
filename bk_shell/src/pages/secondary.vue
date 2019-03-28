<template>
  <div>
  	<div class="in_f"><img src="../assets/主页/31.gif"></div>
  	<div class="in_f1"><img src="../assets/卖房/5.gif"></div>
  	<div class="in_1">
  		<div class="in_11"><img src="../assets/登录注册/1.gif">
  		<router-link to="/Location"><span>广州<img src="../assets/登录注册/2.gif"></span></router-link></div>
  		<div class="in_12"><img src="../assets/登录注册/4.gif"></div>
  		<div class="in_13"><router-link to="/"><img src="../assets/登录注册/3.gif"></router-link></div>
  	</div>
  	<div class="in_2">
  		<input type="text" placeholder="请输入小区或商圈名称"/>
  	</div>
  	<div class="in_3">
  		<div>区域<img src="../assets/卖房/2.gif"></div>
  		<div>价格<img src="../assets/卖房/2.gif"></div>
  		<div>房型<img src="../assets/卖房/2.gif"></div>
  		<div>更多<img src="../assets/卖房/2.gif"></div>
  	</div>
  	<div class="in_4">
  		<div>满五年</div>
  		<div>VR房源</div>
  		<div>近地铁</div>
  		<div>7日新上</div>
  	</div>
  	<div class="in_5"><router-link to="/"><img src="../assets/卖房/3.gif"></router-link>
  		<div class="in_51"><router-link to="/">高层北向望别墅群，精装修，保养好，看房方便有钥匙</router-link></div>
  		<div class="in_52">3室1厅/91.58㎡/北/滨江绿园</div>
  		<div class="in_53">263万<span>28718元/平</span></div>
  		<div class="in_54"><span class="in_541">必看好房</span><span>新上</span><span>随时可看</span></div>
  		</div>
  	<div class="in_5"><router-link to="/"><img src="../assets/卖房/4.gif"></router-link>
  		<div class="in_51"><router-link to="/">五羊小区 2室2厅 南</router-link></div>
  		<div class="in_52">2室2厅/72㎡/南/五羊小区</div>
  		<div class="in_53">335万<span>46528元/平</span></div>
  		<div class="in_54"><span class="in_541">必看好房</span><span>满五年</span><span>地铁</span></div>
  		</div>
  	<div class="in_5"><router-link to="/"><img src="../assets/卖房/9.gif"></router-link>
  		<div class="in_51"><router-link to="/">碧桂园物业 房子保养好 业主诚心出售未住过</router-link></div>
  		<div class="in_52">3室1厅/78.48㎡/南/碧桂园物业</div>
  		<div class="in_53">159万<span>46328元/平</span></div>
  		<div class="in_54"><span class="in_541">必看好房</span><span>满五年</span><span>地铁</span></div>
  		</div>
  	<div class="in_5"><router-link to="/"><img src="../assets/卖房/6.gif"></router-link>
  		<div class="in_51"><router-link to="/">新未住，南向看花园。房间都是东南</router-link></div>
  		<div class="in_52">2室2厅/82.7㎡/南/亚运城媒体</div>
  		<div class="in_53">226万<span>27354元/平</span></div>
  		<div class="in_54"><span class="in_541">必看好房</span><span>满二年</span><span>地铁</span></div>
  		</div>
  	<div class="in_5"><router-link to="/"><img src="../assets/卖房/7.gif"></router-link>
  		<div class="in_51"><router-link to="/">番同广场 温馨两房 700米到番同广场地铁口</router-link></div>
  		<div class="in_52">2室2厅/72㎡/南/番同广场</div>
  		<div class="in_53">203万<span>28782元/平</span></div>
  		<div class="in_54"><span class="in_541">必看好房</span><span>满五年</span><span>随时可看</span></div>
  		</div>
  	<div class="in_5"><router-link to="/"><img src="../assets/卖房/8.gif"></router-link>
  		<div class="in_51"><router-link to="/">保利塞纳维拉 2室2厅 东南</router-link></div>
  		<div class="in_52">2室2厅/70.52㎡/南/保利塞纳维拉</div>
  		<div class="in_53">149万<span>26799元/平</span></div>
  		<div class="in_54"><span class="in_541">必看好房</span><span>满五年</span><span>地铁</span></div>
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
	padding: 19px;
	background: #f9f9f9;
}
.in_2 input{
	text-indent: 50px;
	width: 712px;
	height: 58px;
	border: 0;
	background: url(../assets/卖房/1.gif) #e8e8e9 left 15px center no-repeat;
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
