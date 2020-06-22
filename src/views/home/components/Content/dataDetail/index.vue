<template>
  <div class="dataDetail-wrap">
    <header>
      <h1>{{detail.title}}</h1>
      <article>
        <el-image
          style="width: 100px; height: 100px"
          src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          fit="fill">
        </el-image>

      </article>
      <footer>
      </footer>
    </header>
    <article>
      <el-tag>标签一</el-tag>
      <h2>这是内容</h2>
    </article>
    <aside>
      下载
      打赏
    </aside>
    <footer id="common" style="border: 1px solid #ccc" ref="footer">
      评论
    </footer>
  </div>
</template>

<script>
import { getDetail } from '@/service'
import Valine from 'valine'

export default {
  name: 'dataDetail',
  created () {
    console.log(this.$route.query)
    const { id } = this.$route.query
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
      nick: '轻语1',
      lang: 'zh-CN',
      enableQQ: true,
      meta: ['nick', 'mail']
      // requiredFields:
      // guest_info: 'nick,mail'
    })
  },
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    init (id) {
      getDetail(id).then(res => {
        const data = JSON.parse(JSON.stringify(res))
        console.log(data, 'data')
        this.detail = data
      })
    }
  }
}
</script>

<style scoped lang="scss">
.dataDetail-wrap{
  header{
    text-align: center;
    footer{
      text-align: center;
    }
  }
}
</style>
