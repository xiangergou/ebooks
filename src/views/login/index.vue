/*
 * @Author: liuxia
 * @Date: 2019-01-11 16:01:32
 * @Last Modified by: liuxia
 * @Last Modified time: 2020-08-26 10:18:10
 */

<template>
  <div class="login-container">
    <article>
      <aside>
        <div>
          <h2>
            绿蚁新醅酒，红泥小火炉。
          </h2>
          <h2>
            晚来天欲雪，能饮一杯无？
          </h2>
        </div>
      </aside>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        label-position="left"
        label-width="0px"
        class="card-box login-form">
        <h3 class="title">{{ type === 1 ? 'log in' : 'sign up'}}</h3>
        <el-form-item
          class="login_item"
          prop="username">
          <el-input
            v-model="loginForm.username"
            name="username"
            type="text"
            autocomplete="off"
            clearable
            placeholder="请输入用户名或邮箱地址">
            <i
              slot="prefix"
              class="iconfont el-icon-message" />
          </el-input>
        </el-form-item>
        <el-form-item
          class="login_item"
          prop="password">
          <el-input
            v-model="loginForm.password"
            name="password"
            type="password"
            clearable
            autocomplete="off"
            placeholder="请输入密码"
            @keyup.enter.native="handleLogin">
            <i
              slot="prefix"
              class="iconfont el-icon-lock" />
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass" v-if="type === 0" class="login_item">
          <el-input
            type="password"
            v-model="loginForm.checkPass"
            auto-complete="off"
            placeholder="确认密码">
            <i
              slot="prefix"
              class="iconfont el-icon-s-claim" />
          </el-input>
        </el-form-item>
        <el-form-item class="login_handle">
          <el-button
            :loading="loading"
            type="primary"
            style="width:100%;"
            class="btn_login"
            @click.native.prevent="handleLogin">
            登录
          </el-button>
          <p class="login" @click="signUpOrLogin">
            {{type===1?'没有账号？去注册':'已有账号？立即登录'}}
          </p>
        </el-form-item>
      </el-form>
    </article>
  </div>
</template>
<script>

export default {
  name: 'Login',
  data () {
    const validateAccount = (rule, value, callback) => {
      if (!value.trim()) {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    const validatePass = (rule, value, callback) => {
      if (!value.trim()) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    // <!--二次验证密码-->
    const validatePass2 = (rule, value, callback) => {
      if (!value.trim()) {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      type: 1, // 0 登录 1 注册
      loginForm: {
        username: 'yun',
        password: '222',
        checkPass: '1'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateAccount },
          { min: 3, message: '最少3个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePass },
          { min: 3, message: '最少3个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, trigger: 'blur', validator: validatePass2 }
        ]
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          const type = this.type === 1 ? 'Login' : 'SignUp'
          console.log(type, 'type')
          this.$store.dispatch(type, this.loginForm).then((res) => {
            console.log(res)
            this.loading = false
            console.log('fuck')
            this.$router.push({ path: '/' })
          }).catch((err) => {
            console.log(err)
            this.$message.error(err.rawMessage)
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    signUpOrLogin () {
      this.type = this.type === 0 ? 1 : 0
    }
  }
}
</script>
<style lang="scss">
@import "src/styles/mixin.scss";

.login-container::before{
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background:rgba(255,255,255, 0.2);
}
.login-container {
  min-width: 960px;
  width: 100%;
  height: 100%;
  position: relative;
  background: url('https://img.alicdn.com/tfs/TB1zfikJ8r0gK0jSZFnXXbRRXXa-5000-3272.jpg');
  background-size: cover;
  article{
    float: right;
    margin: 20vh 20vw 0 0;
    display: flex;
    aside{
      max-width: 500px;
      width: 400px;
      background: rgba(0,0,0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      h2{
        font-size: 18px;
        font-family: FangSong;
        color: #fff;
        margin-top: 20px;
        letter-spacing: 2px;
      }
    }
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 8px 40px;
    &.el-input__inner {
      padding-left: 40px;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition-delay: 999999s;
      transition: color 999999s ease-out, background-color 999999s ease-out;
      -webkit-transition-delay: 999999s;
      -webkit-transition: color 999999s ease-out, background-color 999999s ease-out;
    }
  }
  .login-form {
    width: 350px;
    padding: 50px;
    background: rgba(255, 255, 255, 0.83);
    font-size: 16px;
    color: #333;
    .login_item {
      border-bottom: 1px solid #CFCFCF;
      margin-bottom: 30px;
      .el-input {
        display: inline-block;
        height: 100%;
        width: 100%;
        font-size: 16px;
      }
      .el-form-item__error {
        padding-top: 10px;
      }
    }
    .login_handle {
      margin-bottom: 0;
      padding-top: 20px;
      .btn_login {
        height: 50px;
        font-size: 18px;
        background: #4680FF;
        border-radius: 8px;
        border-color: #4680ff;
      }
      p{
        cursor: pointer;
      }
    }
    .title {
      margin-bottom: 20px;
      font-size: 28px;
      color: #333;
      text-align: center;
      font-weight: normal;
    }
    .iconfont {
      width: 25px;
      font-size: 22px;
      color: #999;
    }
  }
}
.el-input__prefix{
  top: 5px;
}

</style>
