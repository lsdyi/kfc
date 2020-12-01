<template>
  <div class="block">
   <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in pics" :key="item">
      <img :src="'../../static/'+item">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            pics: [
                "1.png",
                "2.png",
                "3.png",
                "4.jpg",
                "5.png",
                "6.png",
            ]
        }
    }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>