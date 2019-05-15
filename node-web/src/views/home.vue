<template>
  <div class="home">

  	<div class="header">
  		
  		
  	</div>

  	<div class="conter">
  		<router-link to="/me" tag="a">跳转到 me</router-link>

  		<div class="left">left</div>
  		<div class="right">right</div>

  		<!-- 轮播 -->
  		<div class="lunbo">

  			<ul class="btn">
  				<li>1</li>
  				<li>2</li>
  				<li>3</li>
  				<li>4</li>
  				<li>5</li>
  			</ul>

  			<ul class="imgs">
  				<li><img src=""></li>
  				<li><img src=""></li>
  				<li><img src=""></li>
  				<li><img src=""></li>
  				<li><img src=""></li>	
  			</ul>

  			<span><img src=""> 《 </span>

  			<span><img src=""> 》</span>
  			
  		</div>
  	</div>

  	<div class="footer">
  		<ul>
  			<li>41</li>
  			<li>11</li>
  			<li>22</li>
  			<li>22</li>
  			<li>22</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                // id:'43',
            }
        },


        created(){  //生命周期里接收参数
             
        },


        mounted () {
            console.log(this.$route.meta.title);
            // console.log(this.$router.go(-1));
            // console.log(this.$router.go(1));
            // this.$router.go(-1);
            // this.$router.go(2)
        }
    }
</script>


<style scoped>

.home{
	width: 100%;
	overflow: hidden;
	height:100%;
}

.lunbo{
	width:100%;
	height:500px;
	background:#aaa;
}

.footer{
	width: 100%;
	height:60px;
	position: relative;
    bottom: 0;
	
}
.footer ul{
	width: 100%;
	overflow: hidden;
}
.footer ul li{
	width: 20%;

    float: left;
}
</style>
