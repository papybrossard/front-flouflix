<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {
}
</script>

<style src="@/assets/css/app.scss" lang="scss"></style>
