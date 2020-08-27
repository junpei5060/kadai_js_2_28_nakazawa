<template>
    <div class="container">
        <div class="bgimg">
            <h1 class="about">About</h1>
            <h2 class="vision">Vision</h2>
            <p class="vision-title">Pacific League to the world.</p>
            <p class="text">We believe that Japanese professional baseball is something we can be proud of to the world. 
            <br>
            The Pacific League is the best of them all. <br>
            
            <br> Every day, the best players play their best and give us happiness.
            <br> Even when the coronavirus has brought our spirits down, <br>
            the Pacific League remains the same, giving us courage and inspiration. <br>
            <br> 
            I want to bring that kind of excitement to the world.That's why we're here.</p>
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
    background: url('https://images.unsplash.com/photo-1465173121987-373740a169b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60') top center / cover no-repeat;
    z-index: 1;
    opacity: 1;
    position: relative;
}

.about{
    margin-top: 80px;
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
    animation: SlideIn 1.2s;
}

.vision{
    text-align: center;
    font-size: 42px;
    padding-bottom: 0;
    margin: 0;
    animation: SlideIn 1.2s;
}

.vision-title{
    text-align: center;
    font-weight: bold;
    font-size: 64px;
    margin: 0px;
    color: #FF8C00;
    background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: SlideIn 1.8s;
}

.text{
    text-align: center;
    animation: SlideIn 2s;
}

</style>
