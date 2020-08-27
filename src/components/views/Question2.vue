<template>
    <div class="container">
        <div class="box">
            <div id="bgimg"></div>
            <h1>From now on, when you finish answering 4 questions, 
                <br>your favor team must be in place</h1>
            <div class="question">
                <p>Question２：Do you think the world is weak and strong？</p>
                <router-link class="yes-button" to="/question3" @click.native="increment">Yes</router-link>
                <router-link class="no-button" to="/question3">No</router-link>
            </div>
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
    methods:{
    increment(){
    this.$store.state.count++;
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
    background: url('https://cdn.pixabay.com/photo/2016/02/25/16/04/baseball-1222404__480.jpg') top center / cover no-repeat;
    z-index: 1;
    opacity: 0.5;
    position: relative;
}

h1{
    font-weight: bold;
    color:rgb(255, 255, 255);
    width: 100%; 
    height: 1.5em;
    text-align: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 300px;
    z-index: 2;
    animation-name: fadein;
    animation-duration: 2s;
    font-family :Quicksand, sans-serif;/*Google Font*/

}

@keyframes fadein {
from {
    opacity: 0;
    transform: translateY(20px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
}

p{
    font-weight: bold;
    font-size: 20px;
    color:rgb(255, 255, 255);
    width: 100%; 
    height: 1.5em;
    text-align: center;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 0%;
    bottom: 0%;
    z-index: 3;
    animation-name: fadein;
    animation-duration: 2s; 
    padding: 0.5em 1em;
    background: -moz-linear-gradient(#5eccc7, #ebf18d);
    background: -webkit-linear-gradient(#ffb03c, #5192e7);
    background: linear-gradient(to right, #2629e4, #cfd5f3);
    color: #FFF;
}

.yes-button{
position: absolute;
top: 70%;
left: 40%;
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
width: 100px;
text-align: center;
}
.no-button{
position: absolute;
top: 70%;
left: 60%;
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
width: 100px;
text-align: center;
}

a:hover{
    background: rgba(255, 255, 255, 0.3);
}




</style>