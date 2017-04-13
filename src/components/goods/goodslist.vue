<template>
	<div id="tmpl">
	  <!--利用mui中的图文表格组件实现：
	  http://www.dcloud.io/hellomui/examples/slider-table-default.html
	  -->
		<div id="mui-content" class="mui-content" style="background-color:#fff">
			<ul class="mui-table-view mui-grid-view">
				<li v-for="item in list" class="mui-table-view-cell mui-media mui-col-xs-6">
					<router-link v-bind="{to:'/goods/goodsinfo/'+item.id}">
						<img class="mui-media-object" :src="item.img_url">
						<div class="mui-media-body" v-text="item.title"></div>
						<div class="desc">
							<p>
								<span>￥{{item.sell_price}}</span>
								<s>￥{{item.market_price}}</s>
							</p>
							<p>
									<h6 class="left">热卖中</h6>
									<h6 class="right">剩余{{item.stock_quantity}}件</h6>
							</p>
						</div>

					</router-link>

				</li>

			</ul>
		</div>
	</div>
</template>

<script>
	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';
	// 代表vm
	export default{
		data(){
			return {
				list:[
//						{
//							"id": 87,
//							"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
//							"add_time": "2015-04-19T16:51:03.000Z",
//							"zhaiyao": "荣耀6 Plus，该机型分为两款型号，分别为PE-",
//							"click": 0,
//							"img_url": "http://www.webhm.top:8080/upload/201504/20/thumb_201504200046589514.jpg",
//							"sell_price": 2195,
//							"market_price": 2499,
//							"stock_quantity": 60
//						},
//						{
//							"id": 88,
//							"title": "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
//							"add_time": "2015-04-19T17:00:58.000Z",
//							"zhaiyao": "iPhone 6 Plus设计上和iPhone 6",
//							"click": 0,
//							"img_url": "http://www.webhm.top:8080/upload/201504/20/thumb_201504200059017695.jpg",
//							"sell_price": 5780,
//							"market_price": 6388,
//							"stock_quantity": 200
//						}
				]
			}
		},
		created(){
		 this.getlist();
		},
		methods:{
			getlist(){
//				获取到商品列表数据
				var url = common.apidomain + '/api/getgoods?pageindex=1';

				this.$http.get(url).then(function(res){
					if(res.body.status != 0 ){
						Toast(res.body.message);
						return;
					}

//					当服务器返回了正常数据的时候做赋值操作
					this.list = res.body.message;
				});
			}
		}
	}

</script>

<style scoped>
#mui-content li{
	border: 1px solid rgba(0,0,0,0.4);
	-webkit-box-shadow: 0 0 4px #000;
	-moz-box-shadow: 0 0 4px #000 ;
	box-shadow: 0 0 4px #000 ;
	margin-left: 4px;
	padding: 5px;
}

	#mui-content .mui-media-body{
		color: #0094ff;
	}

		#mui-content .desc{
			height: 60px;
			background-color: rgba(0,0,0,0.1);
			margin-top: 10px;
			padding: 5px;
			text-align: left;
		}
#mui-content .desc span{
	color: red;
	margin-right: 15px;
}
	#mui-content a{
		padding-left: 0px;
		margin-left: 0px;
	}

	#mui-content .desc .right{
		position: absolute;
		right: 10px;
		bottom: 0px;
	}

#mui-content .desc .left{
	position: absolute;
	left: 10px;
	bottom: 0px;
}

</style>