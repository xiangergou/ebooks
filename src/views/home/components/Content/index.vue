<template>
  <div>
    <el-row  v-if="showGuide">
      <el-col :span="23">
        <el-card shadow="hover" class="comtent-tabs" :body-style="{ padding: '0px' }">
          <div class="comtent-tabs">
            <div v-for="(k, v) in menuSelectArr" :key="v" class="text item">
              <span>{{ k.title }}</span>
              <span v-show="v !== menuSelectArr.length-1"> > </span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <router-view :contentData="contentData" />
  </div>
</template>

<script>
export default {
  name: 'homeContent',
  props: {
    contentData: {
      type: Array,
      default: () => []
    },
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

<style scoped lang="scss">
.comtent-tabs{
  display: flex;
  line-height: 40px;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
  div{
    margin-right: 10px;
    span{
      display: inline;
    }
  }
}
.text {
  font-size: 14px;
}
</style>
