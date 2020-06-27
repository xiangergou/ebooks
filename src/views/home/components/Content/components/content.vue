<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-11 21:40:46
 * @LastEditTime: 2020-06-27 18:23:01
-->
<template>
  <div class="infinite-list-wrapper">
    <el-row>
      <el-col :span="23" >
        <el-card
          shadow="hover"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
          v-for="(k, v) in contentData" :key="v"
          @click.native="handleToDetail(k)"
          >
          <el-row :gutter="20" class="grid-content">
            <el-col :span="4">
              <div class="grid-img">
                <el-image
                  :src="k.avatar"
                  fit="contain">
                </el-image>
              </div>
            </el-col>
            <el-col :span="19" :offset="1">
              <div>
                <main>
                  <aside>{{k.type}}</aside>
                  <h2>{{k.title}}（全四册) 【{{k.author}}】</h2>
                </main>
                <article>《{{k.title}}》：{{k.desc}}</article>
              </div>
            </el-col>
          </el-row>
          <div class="card-bottom">
             {{transformTime(k.createdAt)}}  10条评论 {{k.likes}}人点赞
             <span style="float:right">查看详情</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import { getBooks } from '@/service'
import { transformTime } from '@/utils/common'

export default {
  name: 'homeContent',
  props: {
    contentData: {
      type: Array,
      default: () => []
    }
  },
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
    transformTime () {
      return transformTime
    },
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
    },
    handleToDetail (e) {
      console.log(e, 'eee')
      this.$router.push({path: 'detail', query: {id: e.objectId}})
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-img{
  width: 100px;
  border: 1px solid #ccc;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
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
