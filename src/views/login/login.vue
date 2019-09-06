<template>
<div id='main'>
    <Header><div slot='center'>登录</div></Header>
    <Login></Login>
</div>
</template>

<script>
import Header from '@/components/header/header.vue';
import Login from '@/components/newlogin/login.vue';
export default {
    name : 'viewlogin',
    components:{
        Header,
        Login
    }
}
</script>

<style scoped>

</style>