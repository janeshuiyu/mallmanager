<template>
  <el-container class="header">
    <el-header>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="/static/logo.png" alt>
          </div>
        </el-col>
        <el-col :span="19" class="middle">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <a href="#" class="loginout" @click.prevent="handleloginout()">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu default-active="2-1" class="menu" :unique-opened="true" :router="true">
          <!-- 用户管理-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">
              <i class="el-icon-location"></i>
              用户列表
            </el-menu-item>
          </el-submenu>
          <!-- 权限管理-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">
              <i class="el-icon-menu"></i>
              角色列表
            </el-menu-item>
            <el-menu-item index="/rights">
              <i class="el-icon-view"></i>
              权限列表
            </el-menu-item>
          </el-submenu>
          <!-- 商品管理-->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="3-1">
              <i class="el-icon-view"></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="3-1">
              <i class="el-icon-view"></i>
              商品分类
            </el-menu-item>
          </el-submenu>
          <!--订单管理-->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-location"></i>
              订单列表
            </el-menu-item>
          </el-submenu>
          <!--数据统计-->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-location"></i>
              数据报表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view>ccccccc</router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  beforeCreate(){
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push({name:'login'})
    }
  },
methods:{
  handleloginout(){
    this.$message.success('退出成功')
    localStorage.clear()
    this.$router.push({name:'login'})
  }
}
}
</script>

<style>
.container {
    height: 100%;
}

.header {
    background-color: #b3c0d1;
}

.aside {
    background-color: #d3dce6;
}

.main {
    background-color: #e9eef3;
    height: 100%;
}

.header .middle{
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
.header .loginout{
    line-height: 60px;
    text-decoration: none;
}

.aside .menu{
    height: 100%;
}
</style>
