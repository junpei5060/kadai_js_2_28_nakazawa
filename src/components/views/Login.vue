<template>
<div class="container">
<div class="row">
    <div class="col-md-12">
    <h2>ログイン画面</h2>
    <!-- <div class="mt-2"><b-form-input v-model="email" type="text" placeholder="メールアドレス" /></div>
    <div class="mt-2"><b-form-input v-model="password" type="text" placeholder="パスワード" /></div> -->
    <!-- <div class="mt-2"><b-button block variant="primary" @click="emailLogin">ログイン</b-button></div> -->
    <div class="mt-2"><b-button block variant="primary" @click="googleLogin">Google ログイン</b-button></div>
    <div class="mt-2"><b-alert v-model="showError" dismissible variant="danger">{{ errorMessage }}</b-alert></div>
    </div>
</div>
</div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../../router/rourer'

export default {
name: 'login',
data() {
return {
    email: '',
    password: '',
    errorMessage: '',
    showError: false
}
},
methods: {
emailLogin() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(result => {
    console.log(result)
    router.push('/success')
    }).catch(error => {
    console.log(error)
    this.errorMessage = error.message
    this.showError = true
    })
},
googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
    console.log(result.user)
    router.push('/success')
    }).catch(error => {
    console.log(error)
    this.errorMessage = error.message
    this.showError = true
    })
}
}
}
</script>

<style scoped>
.container{
    margin-top: 100px;
    width: 1200px;
}

h2{
    width: 500px;
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
}

.mt-2 {
margin: 0 auto;
width: 500px;
padding: 5px 0;
}
</style>