<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="24">
        <el-card shadow="hover">
          总是显示
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" v-for="(k, v) in booksList" :key="v">
        <el-card
          shadow="hover"
          v-infinite-scroll="load"  infinite-scroll-disabled="disabled"
        >
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-img bg-purple">
                <el-image
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="contain">
                </el-image>
              </div>
            </el-col>
            <el-col :span="18">
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
      booksList: []
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
  h2{
    font-weight: normal;
  }
}
</style>

<style >
.el-card{
  margin-bottom: 20px;
}
.el-image{
  display: block;
}
</style>
