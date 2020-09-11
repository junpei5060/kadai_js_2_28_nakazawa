
<template>
<div container>
    <div class="card">
        <img class="card-img" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
        <div>
            <a class="button"  v-on:click="remove(memo.id)">
                <span>削除</span></a>
        </div>
        <div class="card-content">
        <h1 class="card-title"> {{ formatedTitle }}</h1>
        </div>
        <p class="card-sub">詳細</p>
        <span class="card-text">{{ formatedDescription }}</span>
        
    </div> 
</div>
</template>

<script>
export default {
name: 'MemoListCard',
data () {
return {
    releasedAtFromNow: this.getReleasedAtFromNow()
}
},
mounted () {
// releasedAtFromNowを1分ごとに更新する
window.setInterval(() => {
    this.releasedAtFromNow = this.getReleasedAtFromNow()
}, 1000 * 60)
},
props: {
'memo': {
    type: Object,
    required: true
}
},
methods: {
getReleasedAtFromNow () {
    if (!this.memo || !this.memo.releasedAt) {
    return ''
    }
    return this.$moment(this.memo.releasedAt).fromNow()
},
getOmissionAndPlusMidpoint (str, limit) {
    if (str.length < limit) {
    return str
    }
    return str.substr(0, limit) + '…'
},
init () {
    this.$store.dispatch('memos/clear')
},
start () {
    this.$store.dispatch('memos/startListener')
},
stop () {
    this.$store.dispatch('memos/stopListener')
},
remove (id) {
    if(confirm('データが完全に削除されますが、問題ないですか？絶対に他人のデータは削除しないでください'))
    this.$store.dispatch('memos/deleteMemo', { id })
}
},
computed: {
formatedTitle () {
    if (!this.memo || !this.memo.title) {
    return ''
    }
    return this.getOmissionAndPlusMidpoint(this.memo.title,100)
},
formatedDescription () {
    if (!this.memo || !this.memo.description) {
    return ''
    }
    return this.getOmissionAndPlusMidpoint(this.memo.description, 500)
},
memos () {
    return this.$store.getters['memos/data']
}
},
// watch: {
// 'memo' (n, o) {
//     // console.log('new: %s, old: %s', JSON.stringify(n), JSON.stringify(o))
//     console.log('watch memo')
// }
// }
}
</script>

<style scoped>
body {
    background: #eee;
}
.container{
    margin: 0 auto;
}
.card {
    margin: 30px auto;
    width: 350px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
}
.card-img {
    border-radius: 5px 5px 0 0;
    max-width: 100%;
    height: auto;
    opacity: 0.7;
}
.card-content {
    padding-top: 10px;
    padding-bottom: 20px;
}
.card-title {
font-size: 20px;
margin-bottom: 0px;
text-align: center;
color: #0bd;
font-family:monospace;
}
.card-sub{
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 10px;
    font-family:monospace;
}
.card-text {
color: #777;
font-size: 14px;
line-height: 1.5;
font-family:monospace;
margin: 0 auto;
width: 80%;
}
/* ボタン */
.button{
    font-family:monospace;
}
.button span {
position: relative;
display: inline-block;
}
.button span {
margin-top: 10px;
padding: .10em 1em;
background: -webkit-linear-gradient(#f5b4ca , #f5b4ca);
background: linear-gradient(#f5b4ca , #f5b4ca);
border: 1px solid #f5b4ca;
border-radius: 30px;
color: #fff;
text-decoration: none;
text-align: center;
-webkit-transition: .3s ease-in-out;
transition: .3s ease-in-out;
font-size: 10px;
margin-left: 300px;
margin-bottom: 0;
}
.button::after {
position: absolute;
bottom: -15px;
left: 50%;
z-index: -1;
content: '';
width: 100%;
height: 24px;
background-color: rgba(0,0,0,.1);
border-radius: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
-webkit-transition: .3s ease-in-out;
transition: .3s ease-in-out;
}
.button:hover span {
-webkit-transform: translateY(-10px);
transform: translateY(-10px);
}
.button:hover::after {
width: 70%;
height: 18px;
}
</style>