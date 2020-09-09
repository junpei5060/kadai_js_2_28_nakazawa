<template>
    <div container>
        <body>
            <div class="home">
                <h1>CoLorFul</h1>
                <p class="question">Make all tabs colorful
                </p>
                    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
                        <div class="box">
                        <div class="container-2">
                            <span class="icon"><i class="fa fa-search"></i></span>
                            <input type="search" id="search" placeholder="Search..." />
                        </div>
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


</style>