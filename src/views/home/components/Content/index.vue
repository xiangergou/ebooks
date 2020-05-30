<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="24">
        <el-card shadow="always">
          总是显示
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card
          v-infinite-scroll="load"  infinite-scroll-disabled="disabled"
        >
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <span>
            dddssswwwwwwww
          </span>
        </el-card>
      </el-col>
    </el-row>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  name: 'homeContent',
  data () {
    return {
      count: 10,
      loading: false,
      activeNames: ['1']
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

<style scoped>

</style>
