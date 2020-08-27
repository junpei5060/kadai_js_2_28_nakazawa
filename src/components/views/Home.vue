<template>
    <div>
        <body>
            
        <carousel :per-page="1"
        autoplay="true"
        :autoplayTimeout="2000"
        :loop="true"
        :speed="500"
        style="margin:0;">
            <slide>
            <div class="lions">
                <p class="question">Which team do you want to be a fan of?</p>
                <h2>LIONS?</h2>
                <div class="btn-border-gradient-wrap btn-border-gradient-wrap--silver" >
                <router-link to="/question1" class="btn btn-border-gradient" ><span class="btn-text-gradient--silver">START</span></router-link>
                </div>
            </div>
            </slide>
            <slide>
            <div class="hawks">
                <p class="question">Which team do you want to be a fan of?</p>
                <h2>HAWKS?</h2>
                <div class="btn-border-gradient-wrap btn-border-gradient-wrap--silver" >
                <router-link to="/question1" class="btn btn-border-gradient" ><span class="btn-text-gradient--silver">START</span></router-link>
                </div>
            </div>
            </slide>
            <slide>
            <div class="rakuten">
                <p class="question">Which team do you want to be a fan of?</p>
                <h2>EAGLES?</h2>
                <div class="btn-border-gradient-wrap btn-border-gradient-wrap--silver" >
                <router-link to="/question1" class="btn btn-border-gradient" ><span class="btn-text-gradient--silver">START</span></router-link>
                </div>
            </div>
            </slide>
            <slide>
            <div class="marines">
                <p class="question">Which team do you want to be a fan of?</p>
                <h2>MARINES?</h2>
                <div class="btn-border-gradient-wrap btn-border-gradient-wrap--silver" >
                <router-link to="/question1" class="btn btn-border-gradient" ><span class="btn-text-gradient--silver">START</span></router-link>
                </div>
            </div>
            </slide>
            <slide>
            <div class="fighters">
                <p class="question">Which team do you want to be a fan of?</p>
                <h2>FIGHTERS?</h2>
                <div class="btn-border-gradient-wrap btn-border-gradient-wrap--silver" >
                <router-link to="/question1" class="btn btn-border-gradient" ><span class="btn-text-gradient--silver">START</span></router-link>
                </div>
            </div>
            </slide>
            <slide>
            <div class="buffaloes">
            <p class="question">Which team do you want to be a fan of?</p>
            <h2>BUFFALOSE?</h2>
                <div class="btn-border-gradient-wrap btn-border-gradient-wrap--silver" >
                <router-link to="/question1" class="btn btn-border-gradient" ><span class="btn-text-gradient--silver">START</span></router-link>
                </div>
            </div>
            </slide>
        </carousel>
            
        
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
background-color: #e6e6e6;
letter-spacing : 0.2em;
}

.lions{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url('https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg') top center / cover no-repeat;
z-index: 1;
}

.lions p{
    font-size: 35px;
    font-weight: bold;
    color: #3FB811;
}

.lions h2 {
margin: 0;
font-size: 50px;
font-weight: normal;
color: #0067C0;
font-weight: bold;
}

.hawks{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url('https://lumy.jp/wp-content/uploads/2018/10/%E9%B7%B9%E3%81%AE%E5%A4%A2.jpg') top center / cover no-repeat;
z-index: 1;
}

.hawks p{
    font-size: 35px;
    font-weight: bold;
    color: #3FB811;
}

.hawks h2 {
margin: 0;
font-size: 50px;
font-weight: normal;
color:#FFD400;
font-weight: bold;
}
.rakuten{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url('https://cdn.pixabay.com/photo/2016/10/10/15/23/bald-eagle-1728739__480.jpg') top center / cover no-repeat;
z-index: 1;
}

.rakuten p{
    font-size: 35px;
    font-weight: bold;
    color: #3FB811;
}

.rakuten h2 {
margin: 0;
font-size: 50px;
font-weight: normal;
color:#DC143C;
font-weight: bold;
}


.marines{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url('https://cdn.pixabay.com/photo/2015/05/15/14/57/seagull-768785__480.jpg') top center / cover no-repeat;
z-index: 1;
}

.marines p{
    font-size: 35px;
    font-weight: bold;
    color: #3FB811;
}

.marines h2 {
margin: 0;
font-size: 50px;
font-weight: normal;
color: rgb(255, 255, 255);
font-weight: bold;
}

.fighters{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url('https://images.unsplash.com/photo-1547146092-983100a60066?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60') top center / cover no-repeat;
z-index: 1;
}

.fighters p{
    font-size: 35px;
    font-weight: bold;
    color: #3FB811;
}

.fighters h2 {
margin: 0;
font-size: 50px;
font-weight: normal;
color: #FFD700;
font-weight: bold;
}

.buffaloes{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url('https://images.unsplash.com/photo-1533817921487-0f02f8026f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60') top center / cover no-repeat;
z-index: 1;
}

.buffaloes p{
    font-size: 35px;
    font-weight: bold;
    color: #3FB811;
}

.buffaloes h2 {
margin: 0;
font-size: 50px;
font-weight: normal;
color: #000080;
font-weight: bold;
}

h3 {
margin: 40px 0 0;
color: #3FB811;
font-weight: bold;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}


.btn,
a.btn,
button.btn {
font-size: 1.6rem;
font-weight: 700;
line-height: 1.5;
position: relative;
display: inline-block;
padding: 1rem 4rem;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-transition: all 0.3s;
transition: all 0.3s;
text-align: center;
vertical-align: middle;
text-decoration: none;
letter-spacing: 0.1em;
color: #212529;
border-radius: 0.5rem;
}


.btn-border-gradient-wrap {
display: inline-block;
margin-top: 30px;

padding: 0.2rem;

border-radius: 0.5rem;
}

a.btn-border-gradient {
font-size: 2rem;
background: #000;
}

.btn-text-gradient--silver {
background: -webkit-gradient(
linear,
left bottom,
left top,
from(#fff),
to(rgb(0, 0, 0))
);
background: -webkit-linear-gradient(bottom, #fff, rgb(188, 188, 192));
background: linear-gradient(to top, rgb(81, 69, 192), rgb(252, 4, 4));
-webkit-background-clip: text;

-webkit-text-fill-color: transparent;
}

.btn-border-gradient-wrap--silver:hover a.btn {
text-shadow: 0 0 15px rgba(209, 214, 215, 0.5),
0 0 15px rgba(209, 214, 215, 0.5), 0 0 15px rgba(209, 214, 215, 0.5),
0 0 15px rgba(209, 214, 215, 0.5);
}
</style>