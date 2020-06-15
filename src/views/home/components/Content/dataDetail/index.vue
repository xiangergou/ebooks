<template>
  <div class="dataDetail-wrap">
    <header>
      <h1>title</h1>
      <article>
        <span>2013-4-10</span>
        <span>2013-4-10</span>
        <span>2013-4-10</span>
        <span>2013-4-10</span>
      </article>
      <footer>
        <el-image
          style="width: 100px; height: 100px"
          src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          fit="fill"></el-image>
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
// Use import
import Valine from 'valine'
// or Use require

export default {
  name: 'dataDetail',
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
