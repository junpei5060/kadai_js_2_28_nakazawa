<template>
<div class="container">
<div class="row">
    <div class="col-md-12">
    <h2>ログイン成功</h2>
    <div class="mt-4"><b-button block variant="primary" @click="logout">ログアウト</b-button></div>
    </div>
</div>
</div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../../router/rourer'

export default {
name: 'success',
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
.mt-4 {
margin-top: 4px;
width: 500px;
margin: 0 auto;
}

.container{
    margin-top: 200px;
    width: 1200px;
}

h2{
    width: 500px;
    text-align: center;
    font-size: 24px;
    margin: 0 auto;
}
</style>
