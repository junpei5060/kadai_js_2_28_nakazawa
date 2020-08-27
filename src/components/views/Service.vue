<template>
    <div class="container">
        <div class="bgimg">
        <p class="vision-title">We'll find the right team for you.</p>
        </div>
            <h1 class="about">Service</h1>
            <h2 class="vision">Find the Pacific League favourites</h2>
            <p class="text">In just five questions, we'll recommend a team for you
            </p>
        <div class="usage">
        <h1 class="about">Usage</h1>
            <div class="step">
            <div class="text1">
                <h2>① Press start</h2>
                <p>First, just press the home page button.</p>
            </div>
            <div class="text1">
                <h2>② Answer question</h2>
                <p>It's just five questions to answer.</p>
            </div>
            <div class="text1">
                <h2>③ Find your favorite team</h2>
                <p>Now we just need to get into it.</p>
            </div>
            <div class="text1">
                <h2>④ Watch the video</h2>
                <p>Watch a lot of videos!</p>
            </div>
            </div>
            <router-link to="/question1" class="btn btn-border-gradient" ><span class="btn-text-gradient--silver">Do you want to try?</span></router-link>
        </div>
    </div>
</template>

<style scoped>

.container{
color: rgb(48, 48, 48);

}

@keyframes SlideIn {
0% {
opacity: 0;
transform: translateX(64px);
}
100% {
opacity: 1;
transform: translateX(0);
}
}

.bgimg{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: url('https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60') top center / cover no-repeat;
z-index: 1;
opacity: 1;
position: relative;
}

.about{
margin-top: 80px;
text-align: center;
font-size: 32px;
margin-bottom: 30px;

}

.vision{
text-align: center;
font-size: 42px;
padding-bottom: 0;
margin: 0;
}

.vision-title{
text-align: center;
font-weight: bold;
font-size: 64px;
margin: 0px;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, rgb(16, 235, 213), #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: SlideIn 1.8s;
}

.text{
text-align: center;
margin-bottom: 100px;
}

.usage{
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 800px;
width: 100%;
background: url('https://images.unsplash.com/photo-1477951233099-d2c5fbd878ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60') top center / cover no-repeat;
z-index: 1;
opacity: 1;
position: relative;
}

.step{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 40px;
}

.text1{
margin-left: 40px;
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
color: #5d9bd8;
border-radius: 0.5rem;
}


.btn-border-gradient-wrap {
display: inline-block;
margin-top: 60px;

padding: 0.2rem;

border-radius: 0.5rem;
}

a.btn-border-gradient {
font-size: 2rem;
background: rgb(132, 224, 168);
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
background: linear-gradient(to top, rgb(23, 157, 219), rgb(238, 150, 150));
-webkit-background-clip: text;

-webkit-text-fill-color: transparent;
}

.btn-border-gradient-wrap--silver:hover a.btn {
text-shadow: 0 0 15px rgba(106, 226, 206, 0.5),
0 0 15px rgba(209, 214, 215, 0.5), 0 0 15px rgba(209, 214, 215, 0.5),
0 0 15px rgba(209, 214, 215, 0.5);
}

</style>
