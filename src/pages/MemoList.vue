<template>
<div>
<home></home>
    <div class="memo-list container-fluent">
        <div class="row justify-content-center">
            <memo-list-card
            v-for="(memo, index) in memos"
            v-bind:key="index"
            v-bind:memo="memo"/>
        </div>

    </div>
</div>
</template>

<script>
import Home from '../components/views/Home'
import MemoListCard from '../components/views/MemoListCard'

export default {
name: 'MemoList',
components: {
Home,
'memo-list-card': MemoListCard,
},
data () {
return {
}
},
mounted () {
this.init()
this.start()
},
destroyed () {
this.stop()
},
methods: {
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
    this.$store.dispatch('memos/deleteMemo', { id })
}
},
computed: {
memos () {
    return this.$store.getters['memos/data']
}
}
}
</script>

<style scoped>
.memo-list {
text-align: center;
}
.row {
margin-left: 0%;
}
.btn-delete{
display: inline-block;
text-decoration: none;
background: #87befd;
color: #FFF;
width: 120px;
height: 120px;
line-height: 120px;
border-radius: 50%;
text-align: center;
overflow: hidden;
transition: .4s;
}
</style>
