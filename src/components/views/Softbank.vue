<template>
    <div class="container">
        <div v-inview:animate="'fadeInLeft'">
            <h1 class="team-text">The team that attracts you the most...</h1>
            <h2 class="team">SoftBank Hawks</h2>
        </div>
        <div>
            <p class="about-team">Characteristics of the team as seen from the manager</p>
            <p class="text">The Hawks are the best team in the Pacific League right now. 
            <br>
            They have won the Japan Series to determine the best team in Japan many times <br>
            in the last 10 years and have never lost a game in any of the tournaments they have played in. 
            <br>One of the secrets of the Hawks' strength is that they have a winner's mentality. 
            <br> No matter what the situation is, they don't get in a hurry, <br>
            and his OPS has always been over 1. This player is one of the reasons why he is the strongest player on the Hawks. <br>
            </p>
        </div>
        <p class="check">Check it out for yourself?</p>
        <div class="btn-container">
        <a href="https://youtu.be/qs7m-mwQNjs" class="btn btn-gradient"><span>Watch Pacific League TV</span></a>
        </div>
    </div>
</template>




<style scoped>

.container{
    animation: SlideIn 1.2s;
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

.team-text{
    margin-top: 200px;
    margin-left: 300px;
    font-size: 22px;
}

.team{
    text-align: center;
    font-size: 42px;
}

.about-team{
    text-align: center;
    font-weight: bold;
}

.text{
    text-align: center;
}

.check{
    text-align: center;
    font-weight: bold;
    font-size:32px;
    color: darkblue;
}

*,
*:before,
*:after {
-webkit-box-sizing: inherit;
box-sizing: inherit;
}

html {
-webkit-box-sizing: border-box;
box-sizing: border-box;
font-size: 62.5%;/*rem算出をしやすくするために*/
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

a.btn-gradient {
-webkit-transform: skew(-15deg);
transform: skew(-15deg);
color: #fff;
border-radius: 0;
background-image: -webkit-gradient(linear, left top, right top, from(#2af598), to(#009efd));
background-image: -webkit-linear-gradient(left, #2af598 0%, #009efd 100%);
background-image: linear-gradient(90deg, #2af598 0%, #009efd 100%);
-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
}

a.btn-gradient:hover {
-webkit-transform: skew(0);
transform: skew(0);
color: #fff;
-webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
}

.btn-container{
    text-align: center;
}

@media screen and (max-width: 479px) {

.team{
    font-size: 28px;
}

.team-text{
margin-top: 120px;
margin-left: 50px;
font-size: 14px;
}

.about-team{
text-align: center;
font-weight: bold;
font-size: 12px;
}

.text{
    width: 300px;
    text-align: center;
    margin: 0 auto;
}

.btn,
a.btn,
button.btn {
font-size: 0.8rem;
font-weight: 700;
line-height: 1.1;
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

a.btn-gradient {
-webkit-transform: skew(-15deg);
transform: skew(-15deg);
color: #fff;
border-radius: 0;
background-image: -webkit-gradient(linear, left top, right top, from(#2af598), to(#009efd));
background-image: -webkit-linear-gradient(left, #2af598 0%, #009efd 100%);
background-image: linear-gradient(90deg, #2af598 0%, #009efd 100%);
-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
}

a.btn-gradient:hover {
-webkit-transform: skew(0);
transform: skew(0);
color: #fff;
-webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
}

.btn-container{
    text-align: center;
}
.check{
font-size: 24px;
}
}


</style>