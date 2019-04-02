<template>
  <div>
  	<common-header></common-header>
  	<div class="in_2">
  		<div>{{$route.query.code}}</div>
  	</div>
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
.in_2{
	height: 600px;
	background: url(../assets/house_none.png) center no-repeat;
	background-size: 400px;
}
.in_2 div{
	padding-top: 500px;
	font-size: 36px;
	color: #8C939F;
}
</style>
