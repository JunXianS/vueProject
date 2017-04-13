<template>
	<div id="tmpl">
		<mt-swipe :auto="2000">
			<!-- <mt-swipe-item>1</mt-swipe-item>
             -->
			<mt-swipe-item v-for="item in imgs">
				<img :src="item.img">
			</mt-swipe-item>
		</mt-swipe>

	</div>
</template>

<script>
	export default{
		props:['imgs']  //用来接收父组件传入过来的数据
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