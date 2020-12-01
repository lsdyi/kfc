<template>
  <div id="search">
		<el-input v-model="input" placeholder="搜索食物" style="width:300px"></el-input>
		<el-button type="danger" plain><i class="el-icon-search"></i></el-button>
	</div>
</template>

<script>
export default {
	data: function() {
		return  {
			input:""
		}
	}
}
</script>

<style>
#search {
	position: absolute;
	left: 550px;
	top: 30px;
}

#search el-input {
	/* border-color: red; */
	border-block-color: red;
}

</style>