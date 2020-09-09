<template>
    <div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
            <div class="content">
                <div>

                <h3>Thank you! Become a GEEK that changes the world</h3>
                
                </div>
                <div>
                    <router-link to="/form" class="button">
                    <span class="add-text">Add More</span>
                    </router-link>
                </div>
            </div>
    </div>
</template>

<style scoped>
    .bg {
    animation:slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #FF0080 50%, #FF8C00 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
}

.bg2 {
    animation-direction:alternate-reverse;
    animation-duration:4s;
}

.bg3 {
    animation-duration:5s;
}

.content{
    margin: 0 auto;
    background-color:rgba(255,255,255,.8);
    border-radius:.25em;
    box-shadow:0 0 .25em rgba(0,0,0,.25);
    box-sizing:border-box;
    left:50%;
    padding:10vmin;
    position:fixed;
    text-align:center;
    top:50%;
    transform:translate(-50%, -50%);
}

@keyframes slide {
    0% {
        transform:translateX(-25%);
    }
    100% {
        transform:translateX(25%);
    }
}
h3{
    margin-bottom: 50px;
}
html,body{
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
}
.button{
    background:rgb(224, 108, 219);
    color:#fff;
    border:none;
    height:60px;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
    width: 150px;
    font-family: monospace;
    padding:15px;
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