<template>
  <div>
    <el-container>
      <el-header height="320px" class="header">
        <HomeHeader></HomeHeader>
      </el-header>
      <el-container>
        <el-main>
          <HomeContent></HomeContent>
        </el-main>
        <el-aside width="300px">
          <HomeAside></HomeAside>
        </el-aside>
      </el-container>
      <el-footer>
        <HomeFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { HomeHeader, HomeContent, HomeFooter, HomeAside } from './components'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeContent,
    HomeFooter,
    HomeAside
  }
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
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
  .header{
    padding: 0;
    background: url('https://ae01.alicdn.com/kf/He146f53d314a4fb9a7a4eded11f0ab698.jpeg');
    background-size: cover;
    background-position: center center;
  }
</style>
