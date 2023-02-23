<template>
  <div class="login-container">
    <el-form 
    class="login-form"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    > 
      <div class="login-title">
        <h2>登录页面</h2>
      </div>
      <el-form-item prop="user">
        <span class="svg-container"><svg-icon icon-class="user" /></span>
        <el-input 
        v-model="ruleForm.user"
        placeholder="user" ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container"><svg-icon icon-class="password" /></span>
        <el-input
        v-model="ruleForm.password" 
        type="password"
        placeholder="password"
        show-password
        ></el-input>
      </el-form-item>
      <div class="login-button">
        <el-button :loading="loading" type="primary" size="large" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
        <el-button size="large">注册</el-button>
      </div>
    </el-form>

  </div>
</template>
<script lang="ts" >
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import { useStore, mapGetters } from 'vuex'
  const checkPassword = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input the password'))
    }
    setTimeout(() => {
      if(value.length < 6) {
          callback(new Error('The password must contain more than 6 characters'))
        }else {
          if(!/(?=.*[A-Za-z])(?=.*[\d])(?=.*_)/.test(value)) {
            callback(new Error('The password must contain letters, digits, and underscores'))
          }else {
            callback();
          }
        }
     
    }, 200)
  }

  
  export default {
    setup() {
      const store = useStore()
      const ruleFormRef = ref<FormInstance>()

      // 返回值会暴露给模板和其他的选项式 API 钩子
      return {
        ruleFormRef,
        store
      }
    },
    data() {
      return {
        ruleForm: {
          user: "",
          password: ""
        },
        rules: {
          user: [
            { required: true, message: 'Please input user name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
          ],
          password: [
            { validator: checkPassword, trigger: 'blur' }
          ]
        },
        loading: false
      }
    },
    computed:{
      mapGetters
    },
    methods: {
      submitForm(formEl: FormInstance | undefined) {
        console.log('formEl', formEl)
        if (!formEl) return
        formEl.validate((valid, fields) => {
          if (valid) {
            this.loading = true;
            console.log('submit!')
          } else {
            this.loading = false;
            console.log('error submit!', fields)
          }
        })
      }
    },
    created() {
      console.log('created---------')
      
      console.log( this.store.state.user.token)
      
      
      // console.log(store.state.user)
      //获取token
      // var token = store.getters.token;
      // console.log('token0-----'+ token)

    }
  }
 

</script>
<style lang="scss">
.login-container {
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  position: relative;
  background: #576574;
  color: $color-white;

  .login-form {
    position: absolute;
    width: 600px;
    left: 50%;
    top: 20%;
    margin-left: -300px;

    .login-title {
      padding-bottom: 40px;
      h2 {
        text-align: center;
        font-size: 40px;
      }
    }
      
    .el-form-item {
      background: #222f3e;
      padding: 0 10px;
      margin-bottom: 30px;
      border-radius: 5px;

      .svg-container {
        display: inline-block;
        color: $color-white;
        font-size: 20px;
      }

      .el-input {
        display: inline-block;
        width: 95%;

        .el-input__wrapper {
          width: 100%;
          background: transparent;
          box-shadow: none;
        }
        .el-input__inner {
          background: transparent;
          border: 0px;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $light_gray;
          height: 47px;

        }

        .el-input__icon {
          font-size: 20px;
        }
      }
    }

    .el-form-item__error {
      font-size: 14px;
    }

    .login-button {
      padding-top: 30px;
      text-align: center;
      
      .el-button {
        margin-right: 30px;
      }
    }
  }
}




</style>