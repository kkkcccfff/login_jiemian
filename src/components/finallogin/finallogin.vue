<template>
<section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">登录</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification"
                      :class="{right_phone: rightPhone}" @click.prevent="getCode">
                {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="" alt="captcha"
                  @click="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>

    <Altertip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></Altertip>
  </section>
  
</template>

<script>
import Altertip from '@/components/altertip/altertip.vue';
import { setInterval, clearInterval } from 'timers';
export default {
    name : 'finallogin',
    data(){
        return{
            loginWay:true,
            computeTime: 0, // 计时的时间
            showPwd: false, // 是否显示密码
            phone: '', // 手机号
            code:'', // 短信验证码
            name: '', // 用户名
            pwd: '', // 密码
            captcha: '', // 图形验证码
            alertText: '', // 提示文本
            alertShow: false, // 是否显示警告框
        }
    },
    components:{
        Altertip
    },
    computed:{
        rightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
        //异步获取短信验证码
        async getCode(){
            if(this.computeTime<0){
                this.computeTime = 0;
            }
            if(!this.computeTime){
                this.computeTime = 30
                
                 this.interval = setInterval(()=>{
                    this.computeTime--
                    if(this.computeTime <=0){
                        clearInterval(this.interval)
                    }
                },1000)
            }
        },
        //异步登录
        async login(){
            if(this.loginWay){
                const {phone,code,rightPhone} = this;
                if(!rightPhone){
                    this.showAlert('手机号不正确');
                    return;
                }else if(!/^\d{6}$/.test(code)){
                    this.showAlert('验证码必须为6位')
                    return;
                }
                //发送ajax请求短信登陆
            }
                else{//密码登录
                    const {name,pwd,captcha} = this;
                    if(!(name && pwd)){
                        this.showAlert('用户名或密码必须填写');
                        return
                    }else if(!captcha){
                        this.showAlert('验证码必须填写')
                    }
                    //发送ajax请求密码登录

                }
            // 停止计时
            if(this.computeTime) {
                    clearInterval(this.intervalId)
                    this.computeTime = 0
                    this.intervalId = undefined
            }

            
        },
        showAlert(alertText) {
            this.alertShow = true
            this.alertText = alertText
        },
        getCaptcha () {
        
      
        },
    
        closeTip(){
            this.alertShow = false;
            this.alertText = ''
        }
    }

}
</script>





<style scoped>
@media only screen and (min-width: 900px) {
  .loginContainer{
      box-shadow: 0 0 10px #ccc;
      margin-top: 10px;
  }
}

.loginContainer{
    width :100%;
    height :100%;
    background: #fff;
}
.loginInner{
      padding-top :60px;
      width:80%;
      margin :0 auto;
}
.login_header .login_logo{
        
          font-size :40px;
          font-weight: bold;
          color: #02a774;
          text-align: center;
}
.login_header .login_header_title{
          padding-top :40px;
          text-align :center;
}
.login_header_title a{
    color: #333;
    font-size: 14px;
    padding-bottom: 4px;
}
.login_header_title a:first-child{
    margin-right: 40px;
}
.login_header_title a.on{
    color: #02a774;
    font-weight: 700;
    border-bottom: 2px solid #02a774;
}
.login_content>form>div{
    display: none;
}
.login_content>form>div.on{
    display: block;
}
.login_content>form>div input{
    width: 100%;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: 0;
    font: 400 14px Arial
}
.login_content>form>div input:focus{
    border: 1px solid #02a774;
}
.login_content .login_message{
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
}
.login_content .login_message .get_verification{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: 0;
    color: #ccc;
    font-size: 14px;
    background: transparent;
}
.get_verification.right_phone{
    color: black!important;
}
 .login_verification{
              position: relative;
              margin-top :16px;
              height :48px;
              
              font-size :14px;
              background: #fff;
 }
 .login_verification .switch_button{
            font-size: 12px;
            border: 1px solid #ddd;
            border-radius :8px;
            transition: background-color .3s,border-color .3s;
            padding: 0 6px;
            width :30px;
            height :16px;
            line-height: 16px;
            color: #fff;
            position :absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
 }
 .login_verification .switch_button.on{
     background :#02a774;
 }
 .login_verification .switch_button.off{
     background: #fff;
     
 }
.login_verification .switch_button.off .switch_text{
      float: right;
      color: #ddd;
      font-weight: 900;
}
.login_verification .switch_button>.switch_circle{
     position: absolute;
    top :-1px;
    left :-1px;
    width :16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    transition: transform .3s;
}
.switch_circle.right{
    transform :translateX(30px);
}
.login_hint{
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
    padding: 0 4px;
}
.login_hint a{
    color :#02a774;
}
.login_submit{
            display: block;
            width :100%;
            height :42px;
            margin-top: 30px;
            border-radius: 4px;
            background: #4cd96f;
            color :#fff;
            text-align :center;
            font-size: 16px;
            line-height: 42px;
            border: 0;
}
.about_us{
          display: block;
          font-size:  12px;
          margin-top:  20px;
          text-align:  center;
          color:  #999;

}
.go_back{
        position: absolute;
        top: 5px;
        left: 5px;
        width: 30px;
        height: 30px;
}
.go_back>.iconfont{
          font-size:  20px;
          color:  #999;
}
</style>