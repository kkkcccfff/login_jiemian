<template>
    <div class="container">
        <div class="box">
            <el-input placeholder="请输入手机号码" v-model="input2">
                <template slot="prepend"><button>用户名</button></template>
            </el-input>
        </div>
        <div class="box">
        <div class="btn">
            <el-button  type="primary"  plain class="sbbtn">下一步</el-button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'forgetpw',
    data(){
        return{
            input2:''
        }
    },
    components:{
        
    },
    
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
</style>