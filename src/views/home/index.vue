<template>
  <div style="background: rgb(242,242,242)">
    <el-container>
      <el-header height="320px" class="header">
        <HomeHeader :menu="menu" />
      </el-header>
      <el-container>
        <el-main>
          <HomeContent></HomeContent>
        </el-main>
        <el-aside width="400px">
          <HomeAside :userInfo="userInfo" @showDrawer="showDrawer"></HomeAside>
        </el-aside>
      </el-container>
      <el-footer>
        <HomeFooter />
      </el-footer>
    </el-container>
    <!-- 个人中心 -->
    <UserInfo :showUser.sync="showUser"/>
  </div>
</template>
<script>
import { HomeHeader, HomeContent, HomeFooter, HomeAside } from './components'
import UserInfo from '../user/info'
import effect from '@/utils/index'
import AV from 'leancloud-storage'
import { getMenu } from '@/service'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeContent,
    HomeFooter,
    HomeAside,
    UserInfo
  },
  data () {
    return {
      booksList: [],
      userInfo: {},
      showUser: true,
      menu: []
    }
  },
  created () {
    effect()
    this.getUserInfo()

    getMenu().then(res => {
      const data = JSON.parse(JSON.stringify(res))
      this.menu = this.filterArray(data)
    })
  },
  methods: {
    showDrawer (flag = true) {
      this.showUser = flag
    },
    filterArray (data, pid = '') {
      var tree = []
      var temp
      for (var i = 0; i < data.length; i++) {
        if (data[i].pid === pid) {
          var obj = data[i]
          temp = this.filterArray(data, data[i].objectId)
          if (temp.length > 0) {
            obj.subs = temp
          }
          tree.push(obj)
        }
      }
      return tree
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
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
    color: #333;
    text-align: center;
    padding: 0;
  }

  .el-aside {
    color: #333;
    text-align: center;
  }

  .el-main {
    color: #333;
    text-align: center;
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
  .header::before{
    width: 100%;
    height: 320px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background:rgba(255,255,255, 0.2);
  }
  .header{
    padding: 0;
    background: url('https://img.alicdn.com/tfs/TB1zfikJ8r0gK0jSZFnXXbRRXXa-5000-3272.jpg');
    background-size: cover;
    background-position: center center;
  }
</style>
