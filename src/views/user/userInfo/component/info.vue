<template>
  <div class="userInfo-wrap">
    <aside>
      <header>
        <h1>个人中心</h1>
        <el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" class="avatar"></el-avatar>
        <h2>落白</h2>
      </header>
      <el-tabs tab-position="right"  @tab-click="handleClick">
        <el-tab-pane label="基本资料">
        </el-tab-pane>
        <el-tab-pane label="我的分享">
        </el-tab-pane>
        <el-tab-pane label="投稿">
        </el-tab-pane>
      </el-tabs>
    </aside>
    <main>
      <component v-bind:is="activeComponent"></component>
    </main>
  </div>
</template>

<script>
import basic from './basic'
import contribute from './contribute'

export default {
  components: {
    basic,
    contribute
  },
  data () {
    return {
      activeIndex: 2
    }
  },
  computed: {
    activeComponent () {
      return this.activeIndex === 0 ? basic : this.activeIndex === 1 ? '' : contribute
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
      const { index } = tab
      this.activeIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
.userInfo-wrap{
  width: 100%;
  display: flex;
  height: 100%;
  aside{
    width: 160px;
    height: 100%;
    padding-top: 30px;
    box-shadow: -2px 0px 9px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    .avatar{
      margin: 20px 0 5px
    }
    h2{
      font-size: 12px;
    }
  }
  main{
    padding: 20px
  }
}

</style>
<style>
.el-tabs--right .el-tabs__header.is-right {
  float: none;
  margin-left: 1px;
}
.el-tabs__item.is-active {
  color: rgb(67, 175, 148);
}
.el-tabs__active-bar{
  background-color: rgb(67, 175, 148);
}
.el-tabs__item:hover{
  color: rgb(67, 175, 148);
}
</style>
