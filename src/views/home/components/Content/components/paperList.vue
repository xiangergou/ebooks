<!--
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-11 21:41:35
 * @LastEditTime: 2020-06-12 14:08:16
-->
<template>
  <div>
    <div class="layout_pageHeader">
      <el-form
        :inline="true"
        :model="formOptions"
        size="small">
        <el-form-item label="学科分类">
          <el-select v-model="formOptions.disciplineId" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.key"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="格式">
          <el-select
            :clearable="true"
            v-model="formOptions.format"
            placeholder="请选择格式">
            <el-option
              label=".pdf"
              value=".pdf"/>
            <el-option
              label=".doc"
              value=".doc"/>
          </el-select>
        </el-form-item>
        <el-form-item label="年份">
          <el-date-picker
          v-model="formOptions.date"
          type="year"
          placeholder="选择年">
         </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            size="mini"
            @click="handleSearch">查询</el-button>
        </el-form-item>
        <!-- <el-form-item>
          <el-button
            type="primary"
            size="mini"
            @click="getMultipleSelectionAll">获取已选数据</el-button>
        </el-form-item> -->
      </el-form>
      <el-table
        stripe
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          property="date"
          label="日期"
          width="120">
        </el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          property="address"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <footer>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fuck',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      options: [],
      formOptions: {
        disciplineId: '',
        format: '',
        date: ''
      }
    }
  },
  methods: {
    handleSearch () {

    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
.layout_pageHeader{
  width: 100%;
  text-align: left;
}
</style>
