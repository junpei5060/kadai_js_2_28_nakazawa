
<template>
<div class="details container-fluent text-center">
<div class="row justify-content-start">
    <div class="col">
    <div class="card" v-if="memo.id">
        <div class="card-header text-left">
        <h5 class="card-title">{{ memo.title }}</h5>
        <h6 class="card-subtitle text-muted">Platform:
            <a href="#" class="badge" style="margin-left:4px;"
            v-for="(platform, index) in platforms"
            v-bind:key="index"
            v-bind:class="getTargetPlatformClass(platform)"
            v-on:click.prevent="updatePlatform(platform)">
            {{ platform }}
            </a>
        </h6>
        </div>
        <div class="card-body text-left">
        <p class="card-text" v-html="formatedDescription"/>
        <hr class="mb-3">
        <small>Release Date. {{ formatedReleasedAt }}</small>
        </div>
        <div class="card-footer text-right">
        <button class="btn"
            v-bind:class="{'btn-primary': memo.million, 'btn-success': !memo.million}"
            v-on:click="updateMillion(memo.million)">
            {{ millionButtonLabel }}
        </button>
        <button class="btn btn-primary"
            v-on:click="historyBack">
            back
        </button>
        </div>
    </div>
    </div>
</div>
</div>
</template>

<script>
export default {
name: 'MemoDetails',
data () {
return {
    targetId: this.id
}
},
// routeの動的セグメント
props: ['id'],
mounted () {
this.init()
this.start()
},
destroyed () {
this.stop()
},
beforeRouteUpdate (to, from, next) {
// pathの:idを直接書き換えたときの対応
this.targetId = to.params.id
next()
},
/* eslint-disable */
methods: {
init () {
    this.$store.dispatch('memo/clear')
},
start () {
    this.$store.dispatch('memo/startListener', { id: this.targetId })
},
stop () {
    this.$store.dispatch('memo/stopListener')
},
updateMillion (million) {
    this.$store.dispatch('memo/updateMillion')
},
updatePlatform (platform) {
    this.$store.dispatch('memo/updatePlatforms', { platform: platform })
}
},
computed: {
memo () {
    return this.$store.getters['memo/data']
}
}
}
</script>
/* eslint-disable */