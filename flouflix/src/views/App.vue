<template>
  <div>
    <div>
      <Header/>
    </div>
    <div>
      <Page/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '@/components/Header.vue'
import Page from '@/components/Page.vue'

const components = {
  Header,
  Page
}

@Component({ components })
export default class App extends Vue {}
</script>
