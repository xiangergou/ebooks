<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-18 19:38:11
 * @LastEditTime: 2020-06-18 20:13:02
-->
<template>
  <div>
    <el-form label-position="left" label-width="80px" :model="formLabelAlign">
      <el-form-item label="类型">
        <el-radio-group v-model="value" size="small">
          <el-radio label="1" border>试卷</el-radio>
          <el-radio label="2" border>电子书</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>

      <el-form-item label="封面上传">
        <el-upload
          class="upload-demo"
          action="#"
          :on-preview="handlePreview"
          :before-upload="beforeUpload"
          multiple
          :on-exceed="handleExceed"
          :on-change="handleSuccess"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            <p>哒哒哒</p>
            <p>封面</p>
            </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="formLabelAlign.type" type="textarea" :rows="2"></el-input>
      </el-form-item>

      <el-form-item label="资料上传">
        <el-upload
          class="upload-demo"
          action="#"
          :on-preview="handlePreview"
          :before-upload="beforeUpload"
          multiple
          :on-exceed="handleExceed"
          :on-change="handleSuccess"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            <p>请按照"年份-学科-试卷名"的格式命名</p>
            <p>如 ”2015-政治-全国研究生开始书数农试题“</p>
            </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'contribute',
  data () {
    return {
      fileList: [],
      value: '',
      options: [{
        value: '1',
        label: '试卷'
      }, {
        value: '2',
        label: '电子书'
      }],
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    handlePreview () {

    },
    beforeUpload () {

    },
    handleExceed () {

    },
    handleSuccess () {

    },
    onSubmit () {

    }
  }
}
</script>

<style>

</style>
