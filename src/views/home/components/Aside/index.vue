<template>
  <div class="aside-box">
    <el-card class="box-card" shadow="hover">
      <div class="header" @click="showDrawer">
        <img src="https://img.alicdn.com/tfs/TB1K8CryEz1gK0jSZLeXXb9kVXa-400-400.jpg" alt="">
      </div>
      <aside>
        <h3>{{userInfo.username || 'name'}}</h3>
        <span>以前看见山，总想知道山后面是什么</span>
      </aside>
    </el-card>
    <el-card class="box-card" shadow="hover" style="padding-top:10px">
      <div slot="header">
        <span>
          您的小小赞助会让在下更有动力投入书籍更新。谢谢。
        </span>
      </div>
      <footer class="codeListBox" style="margin-top:20px">
        <div v-for="(o, i) in codeList" :key="i">
          <el-image
            style="width: 130px; height: 130px"
            src="https://lc-gluttony.s3.amazonaws.com/AlWeYVtSToe0/85e98990a25522edfdd8/a6x12455zlk8tb4wsmeva2c.png"
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
  props: {
    userInfo: {}
  },
  data () {
    return {
      codeList: [{url: '', title: '微信'}, {url: '', title: '支付宝'}]
    }
  },
  methods: {
    showDrawer () {
      this.$emit('showDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-box{
  padding: 20px;
  width: 390px;
  .box-card{
    width: 300px;
    margin: 0 auto;
    background: #fff;
    padding: 20px 10px;
    margin-bottom: 10px;
    // box-shadow: 0 2px 2px 0 rgba(20, 19, 19, 0.12), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12), 0 -1px 0.5px 0 rgba(0,0,0,0.09);
    .header{
      // background: url('https://img.alicdn.com/tfs/TB1sz9SJYY1gK0jSZTEXXXDQVXa-298-100.jpg') no-repeat;
      img{
        // position: absolute;
        // bottom: -40px;
        width: 126px;
        height: 126px;
        border-radius: 80px;
        border: 1px solid #eeeeee;
        padding: 1px;
        transition: transform 0.4s ease-out;
      }
      img:hover{
        transform: rotate(360deg);
      }
    }
    aside{
      font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
      h3{
        font-size: 14px;
        line-height: 2;
        color: #222;
        font-weight: 600;
      }
      span{
        display: block;
        text-align: center;
        font-size: 13px;
        color: #999;
        opacity: 1;
      }
    }
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

<style lang="scss">
.box-card{
  .el-card__body{
    padding: 0
  }
}

</style>
