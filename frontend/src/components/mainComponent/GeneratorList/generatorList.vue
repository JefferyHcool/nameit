<script setup lang="ts">
import { useGenerateResultStore } from '@/store/moudles/generateResultStore.ts'
import { computed, ref } from 'vue'
const state = ['error', 'default', 'primary', 'info', 'success', 'warning']
const reslut_ref = ref()
const generateResultStore = useGenerateResultStore()
const getRandomStateValue = () => {
  const randomIndex = Math.floor(Math.random() * state.length)
  return state[randomIndex]
}
generateResultStore.$subscribe((mutation, state) => {
  console.log(mutation, state)
  if (mutation.type == 'direct') {
    reslut_ref.value = generateResultStore.getCurrent
  }
})
const result_list = generateResultStore.getResultList
const handleCopy = (e: Event) => {
  const target = e.target as HTMLElement
  navigator.clipboard
    .writeText(target.innerText)
    .then(() => {
      window['$message'].success('复制成功')
    })
    .catch(err => {
      console.error('复制失败: ', err)
    })
}
</script>

<template>
  <n-card title="生成结果">
    <n-card>
      <n-space>
        <n-tag
          @click="handleCopy"
          style="cursor: pointer"
          :type="getRandomStateValue()"
          v-for="(item, k) in reslut_ref"
          :key="k"
        >
          {{ item }}
        </n-tag>
      </n-space>
    </n-card>

    <n-list>
      <template #header> 生成历史 </template>
      <n-scrollbar style="max-height: 24rem">
        <n-empty v-if="!result_list.length" description="快开始使用吧"></n-empty>
        <template v-else>
          <n-list-item v-for="(i, k) in result_list" :key="k">
            <n-space justify="space-between">
              <n-tag @click="handleCopy" style="cursor: pointer" type="info"> {{ i.variable }} </n-tag>
              <n-time :time="i.datetime" :to="Date.now()" type="relative" />
            </n-space>
          </n-list-item>
        </template>
      </n-scrollbar>
    </n-list>
  </n-card>
</template>

<style scoped></style>
