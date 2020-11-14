<template>
  <el-container>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Page extends Vue {
}
</script>

<style src="../assets/css/components/page.scss" lang="scss"></style>
