<template>
  <div>
  	<div id="div1">
		用户名：<input type="text" name="user" /><br>
	    密码：<input type="password" name="pass" /><br>
		<input type="submit" value="登陆"  @click="change" />
	</div>
    
  </div>
</template>

<script>
export default {
	data () {
	    return {
	      // id:'43',  //需要传递的参数

	    }
	},

	methods:{

		change(){
	      this.$router.push('/home');
	    },


		// 设置cookie	
		// setCookie(name, value, iDay){

		// 	var oDate=new Date();
		// 	oDate.setDate(oDate.getDate()+iDay);  //设置过期时间
			
		// 	document.cookie=name+'='+value+';expires='+oDate;   //expires：有限时间
		// }

		//获取cookie	
		// getCookie(name){

		// 	var arr=document.cookie.split('; ');
			
		// 	for(var i=0;i<arr.length;i++){

		// 		var arr2=arr[i].split('=');
				
		// 		if(arr2[0]==name){
		// 			return arr2[1];
		// 		}
		// 	}
		// 	return '';
		// }

		//移除cookie
		// function removeCookie(name){
		// 	setCookie(name, 1, -1);   //-1 ：-1天过期
		// }

	},

	mounted(){

	    // this.getCookie();
	    
	}

  
}
</script>

<style>

</style>
