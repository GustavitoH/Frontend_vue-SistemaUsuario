<template>
  <main>
    <div id="app">
      <div id="nav">
        <px-header></px-header>
        <div class="d-flex">
          <px-Menu></px-Menu>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader';
import PxMenu from '@/components/PxMenu';

export default {
  name: 'App',

  components: {
    PxHeader,
    PxMenu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #14d67f;
    }
  }
}
</style>
