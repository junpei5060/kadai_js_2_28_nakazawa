<template>
  <div>
    <body>
      <header>
            <h1>
                <a href="/">Find the Pacific League favourites</a><br>
            </h1>
            <nav class="pc-nav">
                <ul>
                    <li><router-link to="/about">ABOUT</router-link></li>
                    <li><router-link to="/service">SERVICE</router-link></li>
                </ul>
            </nav>
        </header>
    <transition mode=”out-in”>
      <router-view></router-view>
    </transition>
    </body>
  </div>
</template>

<style scoped>
header {
padding: 30px 4% 10px;
position: fixed;
top: 0;
width: 100%;
background-color: transparent;
display: flex;
align-items: center;
z-index: 2;
}
h1 {
margin: 0; padding: 0;
font-size: 24px;
}

router-link{
    text-decoration: none;
    color: #3FB811; 
}

li a {	
text-decoration: none;
color: #3FB811;
}
h1 a {	
text-decoration: none;
color: #3FB811;
}
nav {
margin: 0 0 0 auto;
}
ul {
list-style: none;
margin: 0 auto;
display: flex;
margin-right: 130px;
font-weight: bold;
}
li {
margin: 0 0 0 15px;
font-size: 16px;
font-weight: bold;
}

.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .3s 0s ease;
}


@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
header {
padding: 30px 4% 10px;
position: fixed;
top: 0;
width: 100%;
background-color: transparent;
display: flex;
align-items: center;
z-index: 2;
}
h1 {
margin: 0; padding: 0;
font-size: 12px;
}

router-link{
    text-decoration: none;
    color: #3FB811; 
}

li a {	
text-decoration: none;
color: #3FB811;
}
h1 a {	
text-decoration: none;
color: #3FB811;
}
nav {
margin: 0 0 0 auto;
}
ul {
list-style: none;
margin: 0 auto;
display: flex;
margin-right: 130px;
font-weight: bold;
}
li {
margin: 0 0 0 15px;
font-size: 16px;
font-weight: bold;
}
}

</style>