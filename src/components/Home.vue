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
import { Toast } from 'mint-ui';
	export default{
		data(){
		return {
			list:[]
			}
		},
		created(){
			// 当页面中的data和methods对象都创建完毕以后，就会自动调用created
			this.getimgs();
		},
		methods:{
			getimgs(){
				// 实现轮播组件中的数据请求
				// 1.0 确定url
				var url = 'http://webhm.top:8899/api/getlunbo';

				// 2.0 调用$http.get()
				this.$http.get(url).then(function(response){
					var data = response.body;
					//错误处理
					if(data.status != 0){
						Toast(data.message);
						return;
					}

					// 如果服务器返回的数据正常则赋值给list
					this.list = data.message;
				});
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