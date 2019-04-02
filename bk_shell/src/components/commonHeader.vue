<template>
  	<div class="in_1">
  		<div class="in_11" @click="back"><img src="../assets/login/1.gif"></div>
  		<router-link to="/Location"><span>广州<img src="../assets/login/2.gif"></span></router-link>
  		<div class="in_12"><router-link to="/"><img src="../assets/login/4.gif"></router-link></div>
  		<div class="in_13"><router-link to="/Individual"><img src="../assets/login/3.gif"></router-link></div>
  	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  	back(){
    	this.$router.go(-1);
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
.in_11 img{
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
</style>
