<template>
  <el-container>
    <el-header>
      <a href=""><img src="@/assets/logo.png" alt="logo"></a>
      <el-menu router :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" style="float: right">
        <el-menu-item v-for="route in routePath" :key="route.path" :index="route.path">
          {{ route.name }}
        </el-menu-item>
        <!-- <el-menu-item index="4">首页</el-menu-item>
        <el-menu-item index="3">登录</el-menu-item>
        <el-menu-item :route="{
          name: 'indexRegister'
        }" index="2">注册</el-menu-item> -->
        <el-submenu index="1">
          <template slot="title">关于我们</template>
          <el-menu-item index="1-1">联系客服</el-menu-item>
          <el-menu-item index="1-2">产品介绍</el-menu-item>
        </el-submenu>

      </el-menu>
    </el-header>
    <el-main height="500px">
      <router-view />
    </el-main>

    <el-footer height="200px" style="background-color: rgb(255, 0, 0)ff; text-align: center;">
      <!-- Footer content -->
      <span>
        <h3>商务合作 |服务协议 |权利声明 |版本更新 |帮助中心 |版权投诉 |找我营销 |企业认证</h3>
      </span>
    </el-footer>
  </el-container>
</template>

<script>

export default {
  name: "IndexView",
  data() {
    return {
      loading: false,
      routePath: [{
        path: "/index/home",
        name: "主页"
      }, {
        path: "/index/login",
        name: "登录"
      }, {
        path: "/index/register",
        name: "注册"
      }]
    }
  },
  methods: {
  },
  mounted() {
    console.log(this.$route.fullPath)
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
