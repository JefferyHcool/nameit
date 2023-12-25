<script setup lang="ts">
import HeaderComponent from '@/components/headerComponent/headerComponent.vue'
import MainComponent from '@/components/mainComponent/mainComponent.vue'
import { useDesignStore } from '@/store/moudles/designStore.ts'
import FooterComponent from '@/components/footerComponent/footerComponent.vue'
const designStore = useDesignStore()
</script>

<template>
  <div class="container">
    <n-layout :class="designStore.getTheme == 'light' ? 'border' : 'border-dark'">
      <n-space vertical>
        <n-layout-header> <header-component></header-component> </n-layout-header>
        <n-layout-content> <main-component></main-component> </n-layout-content>
        <n-layout-footer> <footer-component></footer-component> </n-layout-footer>
      </n-space>
    </n-layout>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem 8rem 0 8rem;
}
.border-dark {
  border-radius: 10px;
  padding: 10px;

  box-shadow:
    20px 20px 60px #181818,
    -20px -20px 60px #202020;
}
.border {
  border-radius: 10px;
  padding: 10px;
  box-shadow:
    -20px 20px 60px #bebebe,
    20px -20px 60px #ffffff;
}
</style>
