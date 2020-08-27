<template>
    <div class="container">
        <div v-inview:animate="'fadeInLeft'">
            <h1 class="team-text">The team that attracts you the most...</h1>
            <h2 class="team">ORIX Buffaloes</h2>
        </div>
        <div>
            <p class="about-team">Characteristics of the team as seen from the manager</p>
            <p class="text">One of the attractions of the Orix is that they have some great pitching players. 
            <br>
            One of them is Masataka Yoshida. <br>
            Yoshida is a fan favorite because of his great muscle tone. 
            <br>He has a very high batting average and consistent results, and his OPS is on the same level as Yanagida, the best hitter in the league, sometimes exceeding 1.
            <br> Yoshida's performance is one of the most appealing aspects of the Orix team.<br>
            Another key player is Yoshinobu Yamamoto.He is one of the best pitchers in the league. <br>
            His straight line is always at the 100-mph level, and he can use his breaking ball, mainly his cut ball, and his curve.<br> 
            In addition to these two players, ORIX has other attractive young players, and although the team has been in a slump since 2014, we have the strength to compete.</p>
        </div>
        <p class="check">Check it out for yourself?</p>
        <div class="btn-container">
        <a href="https://youtu.be/ddGgl76LYeE" class="btn btn-gradient"><span>Watch Pacific League TV</span></a>
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