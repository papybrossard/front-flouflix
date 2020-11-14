<template>
  <div id="header">
    <div>
      <img alt="flouflix logo" src="../assets/logo.png"/>
    </div>
    <div>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :router="true"
        background-color="black"
        text-color="#E50914"
        class="menu"
      >
        <el-submenu v-for="(route, key) in menuRoutes" :key="key" :index="route.name">
          <template slot="title"> {{ route.text }} </template>
          <el-menu-item v-for="(subroute, idx) in route.sub" :route="route.sub[idx].name" :index="route.sub[idx].name" :key="idx"> {{ route.sub[idx].text }} </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import _ from 'lodash'

@Component({})
export default class Header extends Vue {
  private get menuRoutes (): object[] {
    return [
      {
        name: 'courses',
        text: 'Cours',
        sub: [
          {
            name: 'web',
            text: 'Developpement Web'
          },
          {
            name: 'software',
            text: 'Developpement Logiciel'
          },
          {
            name: 'utilitaries',
            text: 'Utilitaires'
          }
        ]
      },
      {
        name: 'movies',
        text: 'Films',
        sub: [
          {
            name: 'movies',
            text: 'Films'
          },
          {
            name: 'series',
            text: 'Séries'
          },
          {
            name: 'documentary',
            text: 'Documentaires'
          }
        ]
      },
      {
        name: 'books',
        text: 'Livres',
        sub: [
          {
            name: 'novel',
            text: 'Roman'
          },
          {
            name: 'personal_development',
            text: 'Developpement personnel'
          }
        ]
      }
    ]
  }

  private get activeIndex (): string {
    return _.get(this.$route, 'name', '')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="@/assets/css/header.scss">
