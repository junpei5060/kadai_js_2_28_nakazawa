<template>
  <div>
    <body>
      <header>
            <h1>
                <a href="/">Brain Storage</a><br>
            </h1>
            <nav class="pc-nav">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/form">新規作成</router-link></li>
                    <li><span @click="logout">ログアウト</span></li>
                    
                </ul>
            </nav>
        </header>
      <transition mode=”out-in”>
      <router-view></router-view>
      </transition>
    </body>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import router from './router/rourer'


export default {
  name:'App',
  methods: {
  logout() {
    firebase.auth().signOut().then(function() {
    router.push('/')
    }).catch(error => {
    console.log(error.message)
    router.push('/')
    })
}
}
}
</script>


<style scoped>
header {
padding: 32px 4% 0px;
position: fixed;
top: 0;
width: 100%;
background-color: transparent;
display: flex;
align-items: center;
z-index: 2;
font-family: monospace;
}
h1 {
margin: 0; padding: 0;
font-size: 24px;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

router-link{
    text-decoration: none;
}


h1 a {	
text-decoration: none;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

nav {
margin: 0 0 0 auto;
}
ul {
list-style: none;
margin: 0 auto;
display: flex;
margin-right: 80px;
font-weight: bold;
}
li {
margin: 0 0 0 15px;
font-size: 16px;
font-weight: bold;
text-decoration: none;
color: #FF8C00;
background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
cursor: pointer;
}
v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}


/* スマホ対応 */
@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
body{
  overflow:hidden;
}


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

h1{
margin: 0; padding: 0;
font-size: 16px;
}

ul{
list-style: none;
display: flex;
margin-right: 30px;
font-weight: bold;
}

li{
font-size: 12px;
}
}

</style>