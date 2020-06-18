<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-12 15:04:00
 * @LastEditTime: 2020-06-12 15:38:27
-->
<template>
  <div>
    <el-drawer
      title="我是标题"
      :visible.sync="showUser"
      :before-close="handleClose"
      :modal="false"
      size="70%"
      :with-header="false">
      <info />
    </el-drawer>
  </div>
</template>

<script>
import info from './component/info'
export default {
  name: 'userInfo',
  props: {
    showUser: false
  },
  components: {
    info
  },
  data () {
    return {
      // showUser: true
    }
  },
  methods: {
    handleClose (done) {
      this.$emit('update:showUser', false)
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    }
  }
}
</script>

<style>

</style>
