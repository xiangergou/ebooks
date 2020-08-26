<template>
  <div class="header-wrap">
    <nav>
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        show-timeout="200">
        <el-menu-item index="1" class="_el-menu-item" @click="toHome">首页</el-menu-item>

        <el-submenu :index="k.objectId + ''" v-for="k in menu" :key="k.objectId" disabled="true">
          <template slot="title"> {{k.title}} </template>
          <span v-for="item in k.subs" :key="item.objectId">
            <el-submenu :index="item.objectId + ''"  v-if="item.subs && item.subs.length > 0" :key="item.objectId">
              <template slot="title">{{item.title}}</template>
              <el-menu-item v-for="kk in item.subs" :key="kk.objectId" :index="kk.objectId + ''" @click="menuItemClick(k, item, kk)">{{kk.title}}</el-menu-item>
            </el-submenu>

            <el-menu-item :index="item.objectId + ''"   @click="menuItemClick(k, item)" v-else>{{item.title}}</el-menu-item>
          </span>
        </el-submenu>

        <el-submenu index="5" v-if="userInfo.username" style="float:right">
          <template slot="title">
            <span style="margin-right:10px">{{userInfo.username}}</span>
            <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          </template>
          <el-menu-item index="5-1" >个人信息</el-menu-item>
          <el-menu-item index="4" class="_el-menu-item">投稿</el-menu-item>
          <el-menu-item index="5-1" @click="logout">登出</el-menu-item>
        </el-submenu>
        <el-menu-item index="5" class="_el-menu-item" v-else style="float:right" @click="login">未登录</el-menu-item>
        <el-menu-item index="3" class="_el-menu-item searchbox">
            <el-input v-model="keyWord" placeholder="请输入内容" size="mini" @keyup.enter.native="handleToSearch" clearable @clear="handleToSearch" disabled="true"/>
        </el-menu-item>
      </el-menu>
    </nav>
    <main>
      <div class="content-text">
        <h1>轻语</h1>
        <h2>动静有时，大音希声</h2>
      </div>
    </main>
  </div>
</template>

<script>
// import { doSearch } from '@/service'
import AV from 'leancloud-storage'
import Bus from '@/utils/bus'

export default {
  name: 'homeHeader',
  data () {
    return {
      keyWord: '云',
      avatar: 'https://img.alicdn.com/tfs/TB1K8CryEz1gK0jSZLeXXb9kVXa-400-400.jpg',
      activeIndex: '1',
      menuList: []
    }
  },
  props: {
    userInfo: {},
    menu: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  created () {
  },
  methods: {
    handleSelect (key, v, item) {
      console.log(key, v, item)
      // if (+key === 4) {
      //   this.$router.push({path: '/contribute'})
      // }
      // Bus.$emit('menuSelect', '子组件向兄弟组件传值')
    },
    toHome () {
      this.$router.push('/home')
    },
    login () {
      this.$router.push('/login')
    },
    logout () {
      AV.User.logOut().then(() => {
        this.userInfo = {}
      })
    },
    menuItemClick (e, k, item) {
      const data = Array.prototype.slice.apply(arguments)
      data.map(k => {
        return {
          title: k.title,
          id: k.objectId
        }
      })
      this.$emit('menuSelect', data)
    },
    handleToSearch () {
      this.$emit('doSearch', this.keyWord)
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
  .searchbox{
    float: right;
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
