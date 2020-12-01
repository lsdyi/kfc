<template>
  <div>
		<el-page-header content="折扣专区"></el-page-header>
		<Food v-for="(item,index) in items" 
			:key="index" 
			:name="item.name" 
			:picurl="item.picurl"
			:salenum="item.salenum"
			:des="item.des"
			:price="item.price" />
	</div>
</template>

<script>
import Food from './Food'

export default {
	components: {
		Food,
	},
	
	data: function() {
		return {
			items: [
				{name: "六味小吃桶", picurl:"../../static/p2.png", price:30, salenum:500, des: "1份川辣嫩牛卷+1份波纹霸王薯条（中）+1个经典葡式蛋挞+1杯百事可乐（中）"},
				{name: "六味小吃桶", picurl:"../../static/p2.png", price:30, salenum:500, des: "1份川辣嫩牛卷+1份波纹霸王薯条（中）+1个经典葡式蛋挞+1杯百事可乐（中）"},
				{name: "六味小吃桶", picurl:"../../static/p2.png", price:30, salenum:500, des: "1份川辣嫩牛卷+1份波纹霸王薯条（中）+1个经典葡式蛋挞+1杯百事可乐（中）"},
				{name: "六味小吃桶", picurl:"../../static/p2.png", price:30, salenum:500, des: "1份川辣嫩牛卷+1份波纹霸王薯条（中）+1个经典葡式蛋挞+1杯百事可乐（中）"},
				{name: "六味小吃桶", picurl:"../../static/p2.png", price:30, salenum:500, des: "1份川辣嫩牛卷+1份波纹霸王薯条（中）+1个经典葡式蛋挞+1杯百事可乐（中）"},
			]
		}
	}
}
</script>

<style>

</style>