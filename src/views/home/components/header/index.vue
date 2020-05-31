<template>
  <div class="header-wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1" class="_el-menu-item" >首页</el-menu-item>
      <el-submenu :index="v+''" v-for="(k, v) in menuList" :key="v">
        <template slot="title">{{k.OriginaName}}</template>
        <el-menu-item :index="i+''" v-for="(item, i) in k.children" :key="i">{{item.name}}</el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="3" class="_el-menu-item"><a href="https://www.ele.me" target="_blank">搜索</a></el-menu-item>
    </el-menu>
    <main>
      <div class="content-text">
        <h1>留下</h1>
        <h2>晚来天欲雪 能饮一杯无</h2>
      </div>
    </main>
  </div>
</template>

<script>
import { getMenu } from '@/service'

export default {
  name: 'homeHeader',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menuList: []
    }
  },
  created () {
    getMenu().then(res => {
      console.log(JSON.parse(JSON.stringify(res)), 'res')
      const data = JSON.parse(JSON.stringify(res))
      console.log(data, 'data')
      this.menuList = data
      // this.booksList.push(...data)
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap{
  width: 100%;
  height: 100%;
  .el-menu{
    width: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    height: 40px;
    color: #fff;
  }
  main{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    .content-text{
      h1{
        color: #fff;
        text-transform: none;
        font-size: 40px;
      }
      h2{
        color: #fff;
        margin-bottom: 30px;
        font-size: 25px;
        letter-spacing: 1px;
      }
    }
  }
}

</style>
<style >
/* .el-menu-item{
  height: 40px !important;
  line-height: 40px !important;
} */
._el-menu-item{
  height: 40px !important;
  line-height: 40px !important;
  color: #fff;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  height: 40px !important;
  line-height: 40px !important;
  color: #fff;
}

.el-submenu__title{
  height: 40px !important;
  line-height: 40px !important;
  color: #fff;
}
.el-menu.el-menu--horizontal{
  border: none;
}
.el-menu--horizontal>.el-menu-item{
  color: #fff
}
.el-menu--horizontal>.el-menu-item.is-active{
  border: none;
  color: #fff;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border: none;
  color: #fff;
}
.el-menu--horizontal>.el-submenu:hover .el-submenu__title{
  color: #303133
}
</style>
