<template>
  <div class="aside-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>您的小小赞助会让在下更有能力投入书籍更新。谢谢。</span>
      </div>
      <aside></aside>
      <footer class="codeListBox">
        <div v-for="(o, i) in codeList" :key="i">
          <el-image
            style="width: 100px; height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="fill">
          </el-image>
          <p>{{o.title}}</p>
        </div>
      </footer>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'homeAside',
  data () {
    return {
      codeList: [{url: '', title: '微信'}, {url: '', title: '支付宝'}]
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-box{
  width: 390px;
  .box-card{
    width: 300px;
    margin: 0 auto;
    padding-bottom: 20px;
    span{
      font-size: 14px;
    }
  }
  footer{
    display: flex;
    justify-content: space-between;
    div{
      text-align: center;
      p{
        font-size: 13px;
        margin-top: 10px;
      }
      img{
        margin: 0 auto;
      }
    }
  }
}

</style>
