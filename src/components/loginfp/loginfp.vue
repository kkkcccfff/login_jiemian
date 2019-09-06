<template>
    <div class="container">
        <div class="box">
            <el-input placeholder="请输入手机号码" v-model="input2">
                <template slot="append"><button>获取验证码</button></template>
            </el-input>
        </div>
        <div class="box">
            <el-input  show-password clearable v-model="paw" placeholder="请输入验证码"></el-input>
        </div>
        <div class="btn">
            <el-button type="primary"  plain class="sbbtn" @click="login">登录</el-button>
        </div>
        <div class="other">
            <a @click="zm" href="#" class="forgetpsw">账号密码登录</a>
            <a href="#" class="alterpsw">手机快速注册</a>
        </div>
    </div>
</template>

<script>
export default {
    name : 'loginfp',
    data(){
       return {
           input2:'',
           paw:'',
       }
    },
    components:{
        
    },
    methods:{
        zm(){
            this.$router.push('/login');
        },
        login(){
            this.$router.push('/home');
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
button {
    border: none;
    background: none;
}
.btn {
    text-align: center;
    margin-top: 30px;
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