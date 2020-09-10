<template>
<div>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
        <div class="content">
            <h1 class="title">あなたの記憶装置をつくろう</h1>
            <h2 class="sub">覚えた用語を追加しましょう</h2>
            <div class="cp_iptxt">
                <input type="text" class="ef" placeholder="用語"
                v-model.trim="memo.title">
                <span class="focus_line"><i></i></span>
            </div>
            <div class="cp_iptxt">
                <textarea type="text" class="ef" placeholder="詳細"
                v-model.trim="memo.description"/>
                <span class="focus_line"><i></i></span>
            </div>
            <div>
                <router-link to="/thanks" class="button" type="submit"
                @click.native.prevent="addMemo">
                <span class="add-text">Add</span>
                </router-link>
            </div>
        </div>
</div>
</template>

<script>
import CONSTANTS from '../../constants/index'
export default {
name: 'MemoListForm',
data () {
return {
    memo: this.emptyMemo()
}
},
methods: {
addMemo () {
    if (!this.memo.title || !this.memo.description) {
    return
    }
    this.memo.platforms = []
    this.memo.million = false
    this.memo.releasedAt = new Date()
    this.$store.dispatch('memos/addMemo', this.memo)
    this.memo = this.emptyMemo()
},
emptyMemo () {
    return CONSTANTS.NEW_EMPTY_MEMO()
}
},
watch: {
'memo' (n, o) {
    console.log('new: %s, old: %s', JSON.stringify(n), JSON.stringify(o))
}
}
}
</script>

<style scoped>
.bg {
    animation:slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #FF0080 50%, #FF8C00 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
}

.bg2 {
    animation-direction:alternate-reverse;
    animation-duration:4s;
}

.bg3 {
    animation-duration:5s;
}

.content{
    margin: 0 auto;
    background-color:rgba(255,255,255,.8);
    border-radius:.25em;
    box-shadow:0 0 .25em rgba(0,0,0,.25);
    box-sizing:border-box;
    left:50%;
    padding:10vmin;
    position:fixed;
    text-align:center;
    top:50%;
    transform:translate(-50%, -50%);
}

@keyframes slide {
    0% {
        transform:translateX(-25%);
    }
    100% {
        transform:translateX(25%);
    }
}

.title{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 25px;
    font-size: 24px;
        color: #FF8C00;
    background: -webkit-linear-gradient(0deg, #40E0D0, rgb(224, 108, 219), #FF0080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family:monospace;
}

.sub{
    text-align: center;
    font-size: 16px;
    margin-top: 0;
    font-family:monospace;
}

.cp_iptxt {
	position: relative;
	width: 100%;
	margin: 30px auto;
}
.cp_iptxt input[type='text'] {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	letter-spacing: 1px;
	padding-left: 4em;
}
.cp_iptxt textarea[type='text']:focus {
	outline: none;
}
.cp_iptxt textarea[type='text'] {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	letter-spacing: 1px;
	padding-left: 4em;
}
.cp_iptxt input[type='text']:focus {
	outline: none;
}
.ef {
	padding: 10px 14px;
	transition: 1.2s;
	border: 1px solid #427eec;
	background: transparent;
}
.ef ~ .focus_line:before,
.ef ~ .focus_line:after {
	position: absolute;
	top: 0;
	right: 0;
	width: 0;
	height: 2px;
	content: '';
	transition: 1.2s;
	transition-delay: 0.2s;
	background-color: rgb(224, 108, 219);
}
.ef ~ .focus_line:after {
	top: auto;
	right: auto;
	bottom: 0;
	left: 0;
	transition-delay: 0.6s;
}
.ef ~ .focus_line i:before,
.ef ~ .focus_line i:after {
	position: absolute;
	top: 0;
	left: 0;
	width: 2px;
	height: 0;
	content: '';
	transition: 0.2s;
	background-color: rgb(224, 108, 219);
}
.ef ~ .focus_line i:after {
	top: auto;
	right: 0;
	bottom: 0;
	left: auto;
	transition-delay: 0.4s;
}
.ef:focus ~ .focus_line:before,
.ef:focus ~ .focus_line:after,
.cp_iptxt.ef ~ .focus_line:before,
.cp_iptxt.ef ~ .focus_line:after {
	width: 100%;
	transition: 0.2s;
	transition-delay: 0.6s;
}
.ef:focus ~ .focus_line:after,
.cp_iptxt.ef ~ .focus_line:after {
	transition-delay: 0.2s;
}
.ef:focus ~ .focus_line i:before,
.ef:focus ~ .focus_line i:after,
.cp_iptxt.ef ~ .focus_line i:before,
.cp_iptxt.ef ~ .focus_line i:after {
	height: 100%;
	transition: 0.2s;
}
.ef:focus ~ .focus_line i:after,
.cp_iptxt.ef ~ .focus_line i:after {
	transition-delay: 0.4s;
}
.ef ~ label {
	position: absolute;
	z-index: -1;
	top: 10px;
	left: 14px;
	width: 100%;
	transition: 0.3s;
	letter-spacing: 0.5px;
	color: #aaaaaa;
}
.ef:focus ~ label, .cp_iptxt.ef ~ label {
	font-size: px;
	top: -18px;
	left: 0;
	transition: 0.3s;
	color: #da3c41;
}
html,body{
    height:100%;
}
body{
    text-align:center;
}
body:before{
    content:'';
    height:100%;
    display:inline-block;
    vertical-align:middle;
}
.button{
    background:rgb(224, 108, 219);
    color:#fff;
    border:none;
    height:60px;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
    width: 150px;
    font-family: monospace;
    padding-top: 15px;
}
.button:hover{
    background:#fff;
    color:rgb(224, 108, 219);
}
.button:before,.button:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #da3c41;
    transition:400ms ease all;
}
.button:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
}
.button:hover:before,.button:hover:after{
    width:100%;
    transition:800ms ease all;
}

/* スマホ対応 */
@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
.title{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 25px;
    font-size: 18px;
        color: #FF8C00;
    background: -webkit-linear-gradient(0deg, #40E0D0, rgb(224, 108, 219), #FF0080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family:monospace;
}

.sub{
    text-align: center;
    font-size: 10px;
    margin-top: 0;
    font-family:monospace;
}

.button{
    background:rgb(224, 108, 219);
    color:#fff;
    border:none;
    height:60px;
    font-size:1.6em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
    width: 150px;
    font-family: monospace;
    padding-top: 15px;
}

}
</style>