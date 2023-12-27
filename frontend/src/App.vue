<script setup lang="ts">
import { darkTheme, NConfigProvider } from 'naive-ui'
import { useThemeOverridesHook } from '@/hooks'
import { AppProvider } from '@/components/AppProvider'
import { zhCN, dateZhCN } from 'naive-ui'
const appTheme = useThemeOverridesHook()
const datelocal = dateZhCN
const local = zhCN
import { readonly, ref, watchEffect } from 'vue'
import { useDesignStore } from '@/store/moudles/designStore.ts'
const isDark = useDesignStore().getTheme
// 假设这是您用来判断主题的响应式变量

watchEffect(() => {
  if (isDark != 'light') {
    document.documentElement.style.setProperty('--background-image', 'var(--background-image-dark)')
  } else {
    document.documentElement.style.setProperty('--background-image', 'var(--background-image-light)')
  }
})
</script>

<template>
  <n-config-provider
    :theme="isDark == 'light' ? '' : darkTheme"
    :locale="local"
    :date-locale="datelocal"
    :theme-overrides="appTheme"
  >
    <app-provider></app-provider>
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped></style>
