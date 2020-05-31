/*
 * @Author: liuxia
 * @Date: 2019-01-11 16:01:32
 * @Last Modified by: liuxia
 * @Last Modified time: 2020-05-31 18:30:23
 */

<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" style="background:#fff">
      <el-form-item label="资源属性">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="资源分类">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="资源简介">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="资源封面">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="资源作者">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="资源上传">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import { validateMobile } from '@/utils/validate'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/styles/mixin.scss";

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:rgba(14, 14, 14, 1);
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111954218&di=b3fbd00e05db66171fa842dc8342aca4&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1777h1000%2F20171203%2Fac8f-fypikwt4241401.jpg');
  background-size: cover;
  background-position: center center;
}

</style>
