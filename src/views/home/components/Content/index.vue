<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <el-row style="margin-bottom: 20px" v-if="showGuide">
      <el-col :span="23">
        <el-card shadow="hover">
          总是显示
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="23" >
          <el-card
          shadow="hover"
          v-infinite-scroll="load"  infinite-scroll-disabled="disabled"
        >
          <el-row :gutter="20" class="grid-content">
            <el-col :span="4">
              <div class="grid-img bg-purple">
                <el-image
                  src="https://www.sanqiu.cc/wp-content/uploads/2020/05/1590884904-20200424022716.jpg"
                  fit="contain">
                </el-image>
              </div>
            </el-col>
            <el-col :span="20">
              <div>
                <main>
                  <aside>留下书屋</aside>
                  <h2>牛奶可乐经济学套装（全四册) 【罗伯特·弗兰克】epub+mobi+azw3</h2>
                </main>
                <article>《牛奶可乐经济学》：《牛奶可乐经济学》是用经济学的原理和方法来解释我们在现实中司空见惯而又未注意到的现象，并通过这些事例和解释来加深人们对经济学的理解。比如，为什么牛奶……</article>
              </div>
            </el-col>
          </el-row>
          <div class="card-bottom">
             2020年5月31日  1条评论 4人点赞  三秋
          </div>
        </el-card>
        <el-card
          shadow="hover"
          v-infinite-scroll="load"  infinite-scroll-disabled="disabled"
          v-for="(k, v) in booksList" :key="v"
        >
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-img">
                <el-image
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="contain">
                </el-image>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple">
                <h2>{{k.title}}</h2>
                <p>{{k.desc}}</p>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
import { getBooks } from '@/service'

export default {
  name: 'homeContent',
  data () {
    return {
      count: 10,
      loading: false,
      activeNames: ['1'],
      booksList: [],
      showGuide: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 10
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  created () {
    getBooks().then(res => {
      console.log(JSON.parse(JSON.stringify(res)), 'res')
      const data = JSON.parse(JSON.stringify(res))
      this.booksList.push(...data)
    })
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    },
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-img{
  width: 100%;
  border: 1px solid #ccc;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}
.grid-content{
  text-align: left;
  padding-bottom: 20px;
  main{
    font-weight: normal;
    line-height: 1.1;
    aside{
      display: inline-block;
      padding: 4px 6px;
      font-size: 12px;
      font-weight: 700;
      height: 14px;
      line-height: 14px;
      color: #fff;
      vertical-align: baseline;
      white-space: nowrap;
      background-color: #51aded;
      margin-right: 5px;
      position: relative;
      top: -3px;
      margin-bottom: 1px;
    }
    aside:after {
      position: absolute;
      width: 0;
      height: 0;
      vertical-align: top;
      content: "";
      top: 8px;
      right: -3px;
      border-left: 4px solid #51aded;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
    }
    h2{
      display: inline;
      margin: 0;
      font-size: 21px;
      font-weight: normal;
      line-height: 15px;
      transition: .5s;
      line-height: .6;
    }
    h2:hover{
      color: #51aded
    }
  }
  article{
    margin-top: 10px;
    font-family: -apple-system,BlinkMacSystemFont,opensans,Optima,"Microsoft Yahei",sans-serif;
    line-height: 1.8;
    font-size: 15px;
    font-weight: 300;
    color: #333;
  }
}
.card-bottom{
  width: 100%;
  padding: 3px 20px;
  border-top: 1px solid #f3f3f3;
  line-height: 27px;
  overflow: hidden;
  display: block;
  clear: both;
  font-size: 12px;
  background: rgba(253,253,253,.7);
  text-align: left;
}
</style>

<style >
.el-card{
  margin-bottom: 10px;
}
.el-card:hover{
  cursor: pointer;
}
.el-image{
  display: block;
}
.el-card__body{
  padding-bottom: 0;
}
</style>
