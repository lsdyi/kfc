<template>
		<div class="block">
      <hr>
      <img :src="picurl" id="foodpic" @click="picClicked" />
      <hr>
        <p id="foodname">{{ name }}</p>

        <p id="des">{{ des }}</p>
        <table id="tab">
          <tr>
        <td><p id="salenum">月售：{{ salenum }}</p></td>

        <td><p id="price" class="price"><i class="el-icon-shopping-cart-full"></i>单价：{{ price }}</p></td>
        
        
        <td><el-button class="el-icon-plus" type="warning">
          <i >加入购物车</i>
        </el-button></td>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ["name", "picurl", "des", "price", "salenum"],
    
    methods: {
      picClicked() {
        console.log("dsa")
        // window.location.href=""
        window.open("../../static/fooddetail/page_1.html","_blank");
      }
    }
}
</script>

<style>
#foodpic {
  float: left;
  height: 250px;
  width: 300px;
}

.block {
  height: 300px;
}

#foodname {
  font-size: 30px; 
}

#des {
  position: relative;
  top:-150px;
  font-size: 20px;
  left:150px;
}
#foodname{
  font-size: 50px;
  position: relative;
  top:-40px;
}
/* #salenum{
  position: relative;
  top:-240px;
}*/
#price{
   margin-left:20px;
} 
#tab{
  position: relative;
  top:-270px;
  left:650px;
}
.el-icon-plus {
  position: relative;
  top:-5px;
  margin-left: 20px;
} 
.price{
  color:#ff2a3c;
  font-size: 20px;
  font-weight:900;
}
</style>
