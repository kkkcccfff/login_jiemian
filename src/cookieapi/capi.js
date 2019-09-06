const capi ={
setcookie(name,value,days){
    var d= new Date();
    d.setTime(d.getTime()+(days*24*60*60*1000));
    var expires = d.toGMTString();
    document.cookie = name+"="+value+";expires="+expires;
},
delCookie(name)//删除cookie
{
   document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
},
getCookie(name){
    var reg = RegExp(name+'=([^;]+)');
    var arr = document.cookie.match(reg);
    if(arr){
      return arr[1];
    }else{
      return '';
    }
  }
}
export default capi;