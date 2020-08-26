<template>
  <div class="dataDetail-wrap">
    <header>
      <h1>{{detail.title}}</h1>
      <h2>
        <span>{{transformTime(detail.createdAt)}}</span>
        <strong>{{detail.author}}</strong>
        <i>{{detail.likes}}</i>
      </h2>
      <article>
        <el-image
          :src="detail.avatar"
          fit="fill">
        </el-image>
      </article>
      <footer>
      </footer>
    </header>
    <article class="dataDetail-content">
      <el-tag>标签一</el-tag>
      <h2>{{detail.desc}}</h2>
    </article>
    <aside>
      <el-button type="success" @click="downLoad">下载</el-button>
    </aside>
    <footer id="common" class="dataDetail-footer" ref="footer">
      评论
    </footer>
  </div>
</template>

<script>
// import { getDetail, getDownloadUrl } from '@/service'
import Valine from 'valine'
import { transformTime } from '@/utils/common'

export default {
  name: 'dataDetail',
  data () {
    return {
      id: null,
      detail: {},
      type: 1 // 1公告 2内容
    }
  },
  created () {
    const { id, type } = this.$route.query
    this.id = id
    this.type = type
    this.init(id)
  },
  mounted () {
    var valine = new Valine()
    valine.init({
      el: '#common',
      appId: 'AlWeYVtSToe0WIC9iWiVHLsQ-MdYXbMMI',
      appKey: 'gC4mPTDAI5e5GriuORDNgED4',
      pageSize: 10,
      language: 'zh-cn',
      placeholder: '说说',
      path: 'window.location.pathname',
      // avatar: 'wavatar',
      lang: 'zh-CN',
      enableQQ: true,
      meta: ['nick', 'mail']
      // requiredFields:
      // guest_info: 'nick,mail'
    })
  },
  computed: {
    transformTime () {
      return transformTime
    }
  },
  methods: {
    init (id) {
      // getDetail(id).then(res => {
      //   const data = JSON.parse(JSON.stringify(res))
      //   console.log(data, 'data')
      //   this.detail = data
      // })
    },
    downLoad () {
      // getDownloadUrl().then(res => {
      //   console.log(res, 'res')
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.dataDetail-wrap{
  header{
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 16px;
  }
  article{
    margin-top: 20px;
    text-align: center;
    .el-image{
      margin: 0 auto;
      width: 100px;
      height: 100px;
    }
  }
  .dataDetail-content{
    text-align: left;
    font-family: PingFangSC-Regular;
    line-height: 20px;
  }
  .dataDetail-footer{
    margin-top: 20px;
    border: 1px dashed #ccc;
  }
}
</style>
