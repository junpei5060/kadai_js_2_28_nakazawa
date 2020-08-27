<template>
    <div class="container">
        <div v-inview:animate="'fadeInLeft'">
            <h1 class="team-text">The team that attracts you the most...</h1>
            <h2 class="team">Nippon-Ham Fighters</h2>
        </div>
        <div>
            <p class="about-team">Characteristics of the team as seen from the manager</p>
            <p class="text">What makes the Fighters so appealing is their atmosphere.  
            <br>
            Regardless of whether they are veterans or young players,  <br>
            many of them are energetic and cheerful, 
            <br>nd even if they are losing a game, they do not get down on the bench and do not give up until the end of the game.
            <br> In addition, the team has produced players such as Darvish and Otani in the past, <br>
            so it is easy for superstars to emerge and challenge the MLB.  <br>
            Kiyomiya is one of the most promising young players in the world right now. <br> 
            Come on out and support the energetic and talented youngsters on the Fighters!</p>
        </div>
        <p class="check">Check it out for yourself?</p>
        <div class="btn-container">
        <a href="https://youtu.be/jXpornz5Tec" class="btn btn-gradient"><span>Watch Pacific League TV</span></a>
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


</style>