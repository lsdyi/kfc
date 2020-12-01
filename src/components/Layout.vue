<template>
  <div id="layout">
    <el-container>
    <el-header style="height:500px">
      <Header />
      <PicShow />
    </el-header>
    <el-container>
      <el-aside width="300px">
        <Menu />
      </el-aside>
      <el-main>
        <!-- <Recommand /> -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
  </div>

  
</template>

<script>
import Menu from './Menu'
import PicShow from './PicShow'
import Header from './Header'

import Food from './Food'
import Recommand from './foodstaff/Recommand'
export default {
 name: "Layout",
 components: {
  Menu,
  PicShow,
  Header,
  Food,
  Recommand
 }
}
</script>

<style>
.el-header, .el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>