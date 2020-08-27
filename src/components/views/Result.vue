<template>
    <div class="container">
        <div class="box">
            <div id="bgimg"></div>
            <vue-typed-js :strings="['Thank you!', 'Are you ready？','To join','The Pacific League!!']"  
                :typeSpeed="20" :startDelay="300" :fadeOut="true" >
                <h1 class="typing"></h1>
                </vue-typed-js>
                <router-link class="btn" v-if="num===0" to="/orix">Go to see Pacific League</router-link>
                <router-link class="btn" v-if="num===1" to="/seibu">Go to see Pacific League</router-link>
                <router-link class="btn" v-if="num===2" to="/nihonhamu">Go to see Pacific League</router-link>
                <router-link class="btn" v-if="num===3" to="/rakuten">Go to see Pacific League</router-link>
                <router-link class="btn" v-if="num===4" to="/lotte">Go to see Pacific League</router-link>
                <router-link class="btn" v-if="num===5" to="/softbank">Go to see Pacific League</router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        num(){
            return this.$store.state.count;
        }
    },
}

</script>

<style scoped>
.container{
    background-color: rgba(0,0,0,0.6);
    margin: 0;
    padding: 0;
    overflow:hidden;
}

.box{
    position: relative;
}

#bgimg{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: url('https://cdn.pixabay.com/photo/2017/08/10/02/34/baseball-2617310__480.jpg') top center / cover no-repeat;
    z-index: 1;
    opacity: 0.8;
    position: relative;
}

.typing{
color:rgb(255, 255, 255);
width: 100%; 
height: 3em;
text-align: center;
position: absolute;
margin: auto;
top: 0%;
left: 0%;
bottom: 200px;
z-index: 2;
white-space: nowrap;
overflow: hidden;
transform: translateY(-50%);

}


.btn{
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%,-50%);
-webkit-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
/*以下装飾*/
margin:0;/*余計な隙間を除く*/
font-size: 20px;/*文字サイズ*/
border: solid white 2px; /*線で囲う*/
padding: 7px;/*文字と線の間の余白*/
color: white;/*文字色*/
text-decoration: none;/*下線を表示させない*/
z-index: 3;
width: 400px;
text-align: center;
}

@media screen and (max-width: 479px) {
.btn{
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%,-50%);
-webkit-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
/*以下装飾*/
margin:0;/*余計な隙間を除く*/
font-size: 14px;/*文字サイズ*/
border: solid white 2px; /*線で囲う*/
padding: 7px;/*文字と線の間の余白*/
color: white;/*文字色*/
text-decoration: none;/*下線を表示させない*/
z-index: 3;
width: 200px;
text-align: center;
}


}


</style>