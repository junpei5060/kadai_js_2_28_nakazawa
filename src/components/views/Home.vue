<template>
    <div container>
        <body>
            <div class="home">
                <h1>Brain Storage CoLorFul</h1>
                <p class="subtitle">すべての記憶をここに保存しよう
                </p>
                <div>
                <router-link to="/form" class="button" type="submit"
                @click.native.prevent="addMemo">
                <span class="add-text">Add</span>
                </router-link>
            </div>
            </div>
            
        </body>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
* {
box-sizing: border-box;
}
body {
margin: 0;
padding: 0;
font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif;
background: #343d46;
letter-spacing : 0.2em;
}

.home{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 400px;
width: 100%;
background: url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60') top center / cover no-repeat;
z-index: 1;
margin-top: 96px;
object-fit: cover;
font-family: monospace;
}

.home h1{
font-size: 50px;
font-weight: bold;
margin-right: 0px;
padding-top: 50px;
margin-bottom: 10px;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

}

.home p{
font-size: 25px;
font-weight: bold;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin: 0;
margin-right: 0px;
}

.subtitle{
padding-bottom: 30px;
font-family: monospace;
}

.box{
margin: 30px auto;
width: 550px;
height: 50px;

}

.container-2{
width: 300px;
vertical-align:middle;
white-space: nowrap;
position: relative;
}

.container-2 input#search{
width: 50px;
height: 50px;
background: #FF8C00;
border: none;
font-size: 10pt;
float: left;
color: #40E0D0;
padding-left: 35px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
color: #fff;

-webkit-transition: width .55s ease;
-moz-transition: width .55s ease;
-ms-transition: width .55s ease;
-o-transition: width .55s ease;
transition: width .55s ease;
}

.container-2 input#search::-webkit-input-placeholder {
color: #65737e;
}

.container-2 input#search:-moz-placeholder { /* Firefox 18- */
color: #65737e;  
}

.container-2 input#search::-moz-placeholder {  /* Firefox 19+ */
color: #65737e;  
}

.container-2 input#search:-ms-input-placeholder {  
color: #65737e;  
}

.container-2 .icon{
position: absolute;
top: 50%;
margin-left: 17px;
margin-top: 14px;
z-index: 1;
color: #FF0080;
}

.container-2 input#search:focus, .container-2 input#search:active{
outline:none;
width: 300px;
}

.container-2:hover input#search{
width: 600px;
}

.container-2:hover .icon{
color: #FF0080;
}

/* html,body{
    height:100%;
}
body{
    text-align:center;
}
body:before{
    content:'';
    height:100%;
    display:inline-block;
    vertical-align:middle;
} */
.button{
    background:rgb(224, 108, 219);
    color:#fff;
    border:none;
    height:60px;
    font-size:1.6em;
    padding:0 2.7em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
    width: 150px;
    font-family: monospace;
    padding-top: 15px;
}
.button:hover{
    background:#fff;
    color:rgb(224, 108, 219);
}
.button:before,.button:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #da3c41;
    transition:400ms ease all;
}
.button:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
}
.button:hover:before,.button:hover:after{
    width:100%;
    transition:800ms ease all;
}


</style>