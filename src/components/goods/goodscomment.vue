<template>
	<div id="tmpl">
		comment {{id}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id :0 // 代表商品的id
			}
		},
		created(){
			this.id = this.$router.paramas.id;
		}
	}

</script>

<style scoped>

</style>