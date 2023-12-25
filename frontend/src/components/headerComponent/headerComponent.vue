<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTypedHook } from '@/hooks'
import MacOsWindowControls from '@/components/headerComponent/MacOsWindowControls.vue'

const element = document.getElementsByClassName('italic')
const typeOption = {
  cursorChar: '_',
  loop: true,
  options: {
    iterations: Infinity,
    easing: 'linear',
    fill: 'forwards'
  }
}
onMounted(() => {
  const instance = useTypedHook(element[0], { ...typeOption })
  instance.type('"计算机科学最难的只有两件事：缓存失效和命名”-- Phil Karlton').pause(5000).go()
})
</script>

<template>
  <mac-os-window-controls></mac-os-window-controls>
  <div class="header">
    <n-text id="title">Name It - 命了个名</n-text>
    <n-text class="italic" italic></n-text>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#title {
  font-weight: 700;
  font-size: 2rem;
}
.italic {
  font-weight: 400;
  font-size: 1.2rem;
}
</style>
