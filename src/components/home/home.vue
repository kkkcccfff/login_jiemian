<template>
<div class="container">
    <div id="mobile-bar">
            <a class="menu-button"></a>
            <a class="logo" href="/"></a>
    </div>
    <div id="header">
        <a id="logo" href="#">
            <img src="~assets/img/menu.png" alt="vue logo">
            <span>首页</span>
        </a>
        
    </div>
    <div class="miancontainer">
    <div class="sidebar">
        <div class="sidebar-inner">
            <ul class="main-menu">
            <li>
                <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
            </li>
            <li><a href="#">首页</a></li>
            <li><el-link href="https://element.eleme.io" target="_blank">链接</el-link></li>
            <li><el-link type="primary">主要链接</el-link></li>
            </ul>
  </div>
</div>
    </div>
  </div>
   
</template>

<script>
export default {
    name : 'chome',
    data(){
        return{
            input2:''
        }
    },
    mounted(){
        this.initMobileMenu()
    },
    methods:{
    initMobileMenu () {
    var mobileBar = document.getElementById('mobile-bar')
    var sidebar = document.querySelector('.sidebar')
    var menuButton = mobileBar.querySelector('.menu-button')

    menuButton.addEventListener('click', function () {
      sidebar.classList.toggle('open')
    })

    document.body.addEventListener('click', function (e) {
      if (e.target !== menuButton && !sidebar.contains(e.target)) {
        sidebar.classList.remove('open')
      }
    })

    // Toggle sidebar on swipe
    var start = {}, end = {}

    document.body.addEventListener('touchstart', function (e) {
      start.x = e.changedTouches[0].clientX
      start.y = e.changedTouches[0].clientY
    })

    document.body.addEventListener('touchend', function (e) {
      end.y = e.changedTouches[0].clientY
      end.x = e.changedTouches[0].clientX

      var xDiff = end.x - start.x
      var yDiff = end.y - start.y

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0 && start.x <= 80) sidebar.classList.add('open')
        else sidebar.classList.remove('open')
      }
    })
  }
    }
}
</script>

<style scoped>

.container{
   
    height: 700px;
}

.container{
    position: relative;
}
#mobile-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #fff;
  z-index: 9;
  display: none;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
}
@media screen and (max-width: 900px){
#mobile-bar {
    display: block;
}
}
#mobile-bar .menu-button {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 12px;
  background: url("~assets/img/menu.png") center center no-repeat;
  background-size: 24px;
}
#mobile-bar .logo {
  position: absolute;
  width: 30px;
  height: 30px;
  background: url("~assets/img/menu.png") center center no-repeat;
  top: 5px;
  left: 50%;
  margin-left: -15px;
  background-size: 30px;
}
#header {
    position: fixed;
    max-width: 750px;
    width: 100%;
    top: 0;
}
#header {
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    transition: background-color 0.3s ease-in-out;
}
#header {
    background-color: #fff;
    height: 40px;
    padding: 10px 60px;
    position: relative;
    z-index: 100;
}
#logo {
    display: inline-block;
    font-size: 1.5em;
    line-height: 40px;
    color: #273849;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
}
#logo img {
    vertical-align: middle;
    margin-right: 6px;
    width: 40px;
    height: 40px;
}
img {
    border: none;
}
@media screen and (max-width: 900px) {
   #header {
    display: none;
  }
}

.sidebar {
  position: absolute;
  z-index: 10;
  top: 61px;
  left: 0;
  bottom: 0;
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  width: 250px;
  height: 100%;
  
  
}
@media screen and (max-width: 900px) {
  .sidebar {
    position: fixed;
    z-index: 10;
    background-color: #f9f9f9;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    -webkit-transform: translate(-280px, 0); 
    transform: translate(-280px, 0);
  }
}
@media screen and (max-width: 900px){
.sidebar.open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}
}



.sidebar .sidebar-inner {
    width: 260px;
    padding: 7px 0px 60px 2px;
}
@media screen and (max-width: 900px){
.sidebar .sidebar-inner {
    padding: 50px 10px 10px 10px;
    box-sizing: border-box;
}
}
.sidebar ul {
    list-style-type: none;
    margin: 0;
    line-height: 1.5em;
    padding-left: 1em;
}
.sidebar li {
    margin-right: 10px;
    margin-top: 0.5em;
    text-align: center;
}
form {
    display: block;
    margin-top: 0em;
}


</style>