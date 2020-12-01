<template>
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#FFFFFF"
      text-color="#fff"
      active-text-color="#303133">

      <a href="#/recommand" style="text-decoration:none">
      <el-menu-item index="2">
        <i class="el-icon-dish"></i>
        <span slot="title">推荐</span>
      </el-menu-item></a>

      <a href="#/discount" style="text-decoration:none">
      <el-menu-item index="2">
        <i class="el-icon-dish-1"></i>
        <span slot="title">折扣</span>
      </el-menu-item>
      </a>

      <a href="#/tong" style="text-decoration:none">
      <el-menu-item index="2">
        <i class="el-icon-sunset"></i>
        <span slot="title">桶.</span>
      </el-menu-item>
      </a>

      <el-menu-item index="2">
        <i class="el-icon-food"></i>
        <span slot="title">新品上市</span>
        
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-fork-spoon"></i>
        <span slot="title">串串/卤味.</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-knife-fork"></i>
        <span slot="title">美味汉堡/卷.</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-burger"></i>
        <span slot="title">炸鸡/啤酒</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-tableware"></i>
        <span slot="title">原味鸡/脆皮鸡</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-chicken"></i>
        <span slot="title">鸡翅/鸡排</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-ice-cream"></i>
        <span slot="title">甜品/冰淇淋</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-dessert"></i>
        <span slot="title">儿童套装</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-hot-water"></i>
        <span slot="title">早餐单品</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.tac i {
    position: absolute;

    /* visibility: hidden; */
    left:8px;
    top:22px
  }
</style>