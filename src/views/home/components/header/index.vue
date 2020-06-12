<template>
  <div class="header-wrap">
    <nav>
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        show-timeout="200"
        @select="handleSelect">
        <el-menu-item index="1" class="_el-menu-item" >首页</el-menu-item>
        <el-submenu :index="k.objectId + ''" v-for="(k, v) in menuList" :key="v">
          <template slot="title">{{k.OriginaName}}</template>
          <el-menu-item :index="item.id + ''" v-for="(item, i) in k.children" :key="i" @click="menuItemClick(k.OriginaName, item.name)">{{item.name}}</el-menu-item>
        </el-submenu>

        <el-submenu index="5" v-if="userInfo.username" style="float:right">
          <template slot="title">{{userInfo.username}}</template>
          <el-menu-item index="5-1" >个人信息</el-menu-item>
          <el-menu-item index="4" class="_el-menu-item">投稿</el-menu-item>
          <el-menu-item index="5-1" @click="logout">登出</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" class="_el-menu-item" v-else style="float:right" @click="changeType">未登录</el-menu-item>
        <el-menu-item index="3" class="_el-menu-item" style="float:right;">
            <el-input v-model="keyWord" placeholder="请输入内容" size="mini" @keyup.enter.native="handleToSearch" />
        </el-menu-item>
      </el-menu>
    </nav>
    <main>
      <div class="content-text">
        <h1>留下</h1>
        <h2>晚来天欲雪 能饮一杯无</h2>
      </div>
    </main>
  </div>
</template>

<script>
import { getMenu, doSearch } from '@/service'
import AV from 'leancloud-storage'
import Bus from '@/utils/bus'

export default {
  name: 'homeHeader',
  data () {
    return {
      keyWord: '',
      avatar: 'https://img.alicdn.com/tfs/TB1K8CryEz1gK0jSZLeXXb9kVXa-400-400.jpg',
      userInfo: {},
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
    this.getUserInfo()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (+key === 4) {
        this.$router.push({path: '/contribute'})
      }
    },
    getUserInfo () {
      const currentUser = AV.User.current()
      if (currentUser) {
        this.userInfo = JSON.parse(JSON.stringify(currentUser))
        console.log(currentUser, 'currentUser')
      // 跳到首页
      } else {
      // 显示注册或登录页面
      }
    },
    logout () {
      AV.User.logOut().then(() => {
        this.userInfo = {}
      })
    },
    menuItemClick (e, k) {
      console.log(e, k, 'e')
    },
    handleToSearch () {
      console.log(this.keyWord)
      doSearch(this.keyWord).then(res => {
        console.log(res, 'res')
      })
    },
    changeType () {
      Bus.$emit('typeChage', '子组件向兄弟组件传值')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap{
  width: 100%;
  height: 100%;
  nav{
    width: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    height: 40px;
    color: #fff;
    z-index: 99;
    .el-menu{
      max-width: 1180px;
      min-width: 960px;
      background: transparent;
      margin: 0 auto;
    }
  }
  main{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    background: rgba(66,64,64,.2);
    .content-text{
      h1{
        color: #fff;
        text-transform: none;
        font-size: 40px;
        font-family: inherit;
        font-weight: normal;
        margin-bottom: 20px;
        font-family: PingFangSC-Regular;
      }
      h2{
        color: #fff;
        font-family: inherit;
        font-size: 25px;
        letter-spacing: 1px;
        font-weight: 300;
        letter-spacing: 1px;
        font-family: FangSong;
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
.el-menu-item *{
  vertical-align: inherit
}
</style>
