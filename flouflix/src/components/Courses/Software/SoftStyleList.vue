<template>
  <div>
    <p> Bonjour SoftWare </p>
      <div v-for="currency in info" :key="currency.code">
        <p> {{currency.code }} </p>
      </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class StyleList extends Vue {
  info: String;

  private mounted () {
    axios.get('https://localhost:8443/books?page=1')
      .then(response => (this.info = response.data.member[0].id))
      .catch(error => console.log(error))
  }
}
</script>
