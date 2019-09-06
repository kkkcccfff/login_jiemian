<template>
    <div id="header">
        <div class="left"><slot name='left'></slot></div>
        <div class="center"><slot name='center'></slot></div>
        <div class="right"><slot name='right'></slot></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#header{
    width: 100%;
    height: 88px;
    display: flex;
    text-align: center;
    position: relative;
    
}
.left,.right{
    width: 30px;
    height: 30px;
}
.center{
    flex: 1;
    text-align: center;
    line-height: 88px;
    font-size: 18px;
}
</style>