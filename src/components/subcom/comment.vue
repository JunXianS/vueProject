<template>
	<div id="tmpl">
	<!--评论组件-->
	<!--1.0 实现提交评论数据到服务器的静态结构-->
		<div id="postcomment">
			<h3>提交评论</h3>
			<p class="p"></p>
			<textarea placeholder="请输入您要评论的内容..." v-model="postcontent"></textarea>
			<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
		</div>

		<!--2.0 实现获取评论数据列表-->
		<div id="list">
			<h3>评论列表</h3>
			<p class="p"></p>
			<div v-for="(item,index) in list">
				<div class="title">
					<span>第{{index + 1}}楼:</span>
					<span>用户：{{item.user_name}}</span>
					<span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
				</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" v-text="item.content"></li>
				</ul>
			</div>
		</div>

		<!--3.0 实现获取更多按钮-->
		<mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
	</div>
</template>

<script>
	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';

	export default{
		data(){
			return {
				pageindex:1 , //代表获取api中的第几页评论数据
				postcontent : '',  //用来自动获取用户填写的评论内容
				list:[]  //评论数据的数组
			}
		},
		props:['id'], //作用是用来接收父组件传入过来的id值
		created(){
//			1.0 获取当前资讯数据的评论信息列表
			this.getcommentlist(this.pageindex);
		},
		methods:{
//			3.0 实现加载更多的方法
			getmore(){
//				1.0 实现this.pageindex值的增加1
				this.pageindex++;
				console.log(this.pageindex);

//				2.0 获取当前this.pageindex值对应的分页数据
				this.getcommentlist(this.pageindex);

			},
//			2.0 获取当前数据的评论数据 pageindex:代表的是当前获取的是哪一页的数据，默认值是1
			getcommentlist(pageindex){
				pageindex = pageindex || 1;
//				1.0 确定评论数据的url
				var url  = common.apidomain + '/api/getcomments/'+this.id+'?pageindex='+pageindex;
//				2.0 发出ajax请求获取数据即可
				this.$http.get(url).then(function(res){
					if(res.body.status != 0 ){
						Toast(res.body.message);
						return;
					}
//3.0 				将message数组中的数据赋值给this.list
					this.list = this.list.concat(res.body.message);
				});
			},
//			1.0 评论数据的提交
			postcomment(){
//				0.0 判断用户是否填写评论内容
				if(this.postcontent.trim().length <= 0){
					Toast('您要评论的内容不能为空');
					return;
				}
//				1.0 确定提交的地址 /api/postcomment/:artid
				var url = common.apidomain + '/api/postcomment/'+this.id;
//				2.0 利用ajax的post请求将数据提交到指定的地址
//				2.0.1 获取到用户在文本框中填写的评论内容，通过 content: 内容 格式提交到请求报文体中
				this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function(res){
					Toast(res.body.message);
					//	3.0 将文本框中的评论内容清空
					this.postcontent = '';
				});
			}
		}
	}

</script>

<style scoped>
/* 1.0 实现提交评论样式 */
#postcomment{
	padding: 5px;
}
	 .p{
		height: 1px;
		width: 100%;
		border-bottom: 1px solid rgba(0,0,0,0.3);
	}

	/*2.0 评论列表的样式*/
#list{
	padding: 5px;
}
.title{
	padding: 5px;
	color: #6d6d72;
	font-size: 15px;
	background-color: rgba(0,0,0,0.1);
}
</style>