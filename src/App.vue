<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import effect from '@/utils/index'
export default {
  name: 'App',
  mounted () {
    effect()
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
@import './styles/transition.scss';
#app {
    font-family: "Monospaced Number","Chinese Quote",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
}
</style>
