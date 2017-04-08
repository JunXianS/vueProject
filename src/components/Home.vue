<template>
	<div id="tmpl">
	 <!-- 1.0 轮播图 -->
		 <mt-swipe :auto="2000">
		  <!-- <mt-swipe-item>1</mt-swipe-item>
		   -->
		   <mt-swipe-item v-for="item in list">
		   	<img :src="item.img">
		   </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return {
			list:[
				    {
				      "url": "http://www.itcast.cn/subject/phoneweb/index.html",
				      "img": "http://8867345.s21i-8.faiusr.com/2/ABUIABACGAAg_dj2wwUowvbjywUwgAU4wAI!640x640.jpg"
				    },
				    {
				      "url": "http://www.itcast.cn/subject/phoneweb/index.html",
				      "img": "http://8867345.s21i-8.faiusr.com/2/ABUIABACGAAgmMv3wwUopMqcATCABTjAAg!640x640.jpg"
				    },
				    {
				      "url": "http://www.itcast.cn/subject/phoneweb/index.html",
				      "img": "http://8867345.s21i-8.faiusr.com/2/ABUIABACGAAgyr6AxAUo2IHXtQMwgAU4wAI!640x640.jpg"
				    }
				  ]
				}
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 300px;
	}
	.mint-swipe-item img{
		width: 100%;
	}
	.mint-swipe-item{
		background-color: red;
		width: 100%;
		height: 300px;
	}
</style>