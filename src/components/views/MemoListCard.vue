
<template>
<div container>
    <div class="card">
        <span class="masking-tape"></span>
        <!-- <img class="card-img" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""> -->
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
        position: relative;
    background: #F8F0D7;
    border-left:4px dotted rgba(0,0,0,.1);
    border-right:4px dotted rgba(0,0,0,.1);
    box-shadow:0 0 5px rgba(0,0,0,.2);
    padding: 1em;
    color: #65513f;
    width: 300px;
    margin-top: 30px;
}

.masking-tape{
    position: absolute;
    top: -1em;
    left: 26%;
    width:100px;
    height:30px;
    background-image: linear-gradient(-45deg, rgba(227,155,140,.4) 25%, transparent 25%, transparent 50%, rgba(227,155,140,.4) 50%, rgba(227,155,140,.4) 75%, transparent 75%, transparent 100%);
    background-size: 20px 20px;
    border-left:2px dotted rgba(0,0,0,.1);
    border-right:2px dotted rgba(0,0,0,.1);
    box-shadow:0 0 5px rgba(0,0,0,.2);
    padding: 0.25em 2em;
    color: #65513f;
    transform: rotate(-4deg); 
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
position: relative;
padding: 0.6em;
background: -webkit-repeating-linear-gradient(-45deg, #fff5df, #fff5df 4px,#ffe4b1 3px, #ffe4b1 8px);
background: repeating-linear-gradient(-45deg, #fff5df, #fff5df 4px,#ffe4b1 3px, #ffe4b1 8px);
border-radius: 7px;
}

.card-title::after{
    position: absolute;
    content: '';
    top: 100%;
    left: 30px;
    border: 15px solid transparent;
    border-top: 15px solid #ffebbe;
    width: 0;
    height: 0;
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
margin-left: 180px;
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