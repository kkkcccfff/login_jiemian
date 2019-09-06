<template>
    <div class="main">
        <Header><div @click="back" slot="left" class="left"></div><div slot="center">找回密码</div></Header>
        <Forgetpw>
        </Forgetpw>
    </div>
</template>

<script>
import Header from '@/components/header/header.vue';
import Forgetpw from '@/components/forgetpw/forgetpw.vue';
export default {
    name : 'viewforgetpw',
    components:{
        Header,
        Forgetpw
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
    
}
</script>

<style scoped>
.left{
    background: url(~assets/img/back.png) no-repeat;
    background-size: 100% auto;
    background-position: center;
    position: absolute;
    left:45px;
    top: 34px;
}
</style>