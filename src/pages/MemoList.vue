<template>
<div class="memo-list container-fluent">
<div class="row justify-content-start">
    <memo-list-card
    v-for="(memo, index) in memos"
    v-bind:key="index"
    v-bind:memo="memo"/>
    <memo-list-form/>
</div>
<div class="row">
    <button class="btn-sm btn-dark m-1"
    v-for="(memo, index) in memos"
    v-bind:key="index"
    v-on:click="remove(memo.id)">
    {{ memo.id }}
    </button>
</div>
</div>
</template>

<script>
import MemoListCard from '../components/views/MemoListCard'
import MemoListForm from '../components/views/MemoListForm'

export default {
name: 'MemoList',
components: {
'memo-list-card': MemoListCard,
'memo-list-form': MemoListForm
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
</style>