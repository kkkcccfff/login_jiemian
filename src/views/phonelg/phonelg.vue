<template>
    <div class="main">
       <Header><div class="left" slot="left" @click="back"></div><div slot="center">手机登录</div></Header>
       <Loginfp></Loginfp>
    </div>
</template>

<script>
import Header from '@/components/header/header.vue';
import Loginfp from '@/components/loginfp/loginfp.vue';
export default{
    name : 'viewphonelg',
    data(){
        return{
          
        }
    },
    components:{
        Header,
        Loginfp
        
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style scoped

.left{
    background: url(~assets/img/back.png) no-repeat;
    background-size: 100% auto;
    background-position: center;
    position: absolute;
    left:45px;
    top: 34px;
}
</style>