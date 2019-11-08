<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '@/assets/styles/main';
</style>
