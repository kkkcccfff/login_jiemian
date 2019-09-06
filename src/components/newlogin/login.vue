<template>
    
    
    <div class="container">
        <div class="box">
            <el-input clearable v-model="username" placeholder="请输入用户名"></el-input>
        </div>
        <div class="box">
            <el-input  show-password clearable v-model="paw" placeholder="请输入密码"></el-input>
        </div>
        <div class="subbox">
            <el-checkbox v-model="checked" class="remember" >记住密码</el-checkbox>
            <a href="#" class="message" @click='loginfp'>手机验证码登录</a>
        </div>
        <div class="btn">
            <el-button type="primary"  plain class="sbbtn" @click="login">登录</el-button>
        </div>
        <div class="other">
            <a href="#" class="forgetpsw" @click="toforgetpw">忘记密码</a>
            <a href="#" class="alterpsw">修改密码</a>
        </div>
    
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import capi from '@/cookieapi/capi.js';
export default {
    name : 'componetlogin',
    components:{
        
    },
    data() {
    return {
      username: '',
      checked: false,
      paw:'',
    }
  },
  computed:{
      
  },
  mounted(){
      if(capi.getCookie('user')&& capi.getCookie('psw')){
          this.username = capi.getCookie('user');
          this.paw = capi.getCookie('psw');
          this.checked = true;
      }
  },
  methods:{
      loginfp(){
          this.$router.push('/phonelg');
      },
      login(){
          if(this.username === ''|| this.paw === ''){
              Toast({
                    message: '账号或密码不能为空',
                    position: 'bottom',
                    duration: 5000
            });
            return;
          }
          var r = this.valUserName();
          if(!r){return}
          this.$router.push('/home');
          if(this.checked){
          capi.setcookie('user',this.username,3);
          capi.setcookie('psw',this.paw,3);
          }

      },
      valUserName(){
          var p=/^(?<!_)[A-Za-z0-9\u4E00-\u9FFF_]{6,10}$/ ;
          var r = p.test(this.username);
          if(!r){
              Toast({
                    message: '用户名必须为8-12个字母或数字',
                    position: 'bottom',
                    duration: 5000
            });
            return false;
          }
          return true;
      },
      toforgetpw(){
          this.$router.push('/forgetpw');
      }
  }
}
</script>

<style scoped>
.container {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    margin-top: 65px;
}
.box {
    margin-bottom: 25px;
}
.subbox .remember{
    float: left;
}
.subbox a {
    float: right;
    font-size: 14px;
    color: #606266;
}
.btn {
    text-align: center;
    margin-top: 50px;
}
.btn .sbbtn {
    width: 100%;
}
.other {
    margin-top: 20px;
    
}
.other .forgetpsw {
    float: left;
    font-size: 14px;
    color: #606266;
}
.other .alterpsw {
    float: right;
    font-size: 14px;
    color: #606266;
}
</style>