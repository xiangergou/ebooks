<template>
  <div>
    <div>
       <el-row style="margin-bottom: 20px" v-if="showGuide">
        <el-col :span="23">
          <el-card shadow="hover">
            <span v-for="(k, v) in menuSelectArr" :key="v">
              {{k.title}} >
            </span>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'homeContent',
  props: {
    menuSelectArr: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showGuide: true
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
