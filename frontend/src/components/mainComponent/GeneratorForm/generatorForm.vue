<script setup lang="ts">
import { h, ref } from 'vue'
import { FormInst, SelectOption } from 'naive-ui'
import { programmingLanguages, programmingConstructs, nameStyle } from '@/const/optionList.ts'
import { generate_variable } from '@/service'
import { useGenerateResultStore } from '@/store/moudles/generateResultStore.ts'

const formRef = ref<FormInst | null>(null)
const modelRef = ref<GeneratorData>({
  variable: null, // 变量的中文名称或描述
  language: null, // 变量使用的编程语言
  style: null, // 变量名称的风格
  type: null, // 变量的类型 如：函数、常量、类型、变量、命名空间、枚举、宏、类、接口
  prefix: null, // 变量的前缀
  suffix: null, // 后缀
  length: null, // 变量名的长度 不得超过这个长度
  mount: 4 // 生成的数量 默认4
})
const isLoading = ref(false)
const trim = (value: string): SelectOption => {
  return {
    label: value.slice(0, 2),
    value
  }
}
const rules = {
  variable: {
    required: true,
    trigger: 'blur',
    validator(rule, value) {
      if (!value) {
        return new Error('变量是必填项')
      }
      if (value.length > 20) {
        return new Error('长度不能超过20个字符')
      }
      return true
    }
  }
}
const generateResultStore = useGenerateResultStore()
const handleGenerate = () => {
  isLoading.value = true
  formRef.value?.validate(errors => {
    if (errors) {
      console.log('cs')
      window['$message'].error('请先输入变量描述')
      isLoading.value = false
      return
    }

    generate_variable(modelRef.value)
      .then(res => {
        generateResultStore.setCurrent(res.data.res_list)
        res.data.res_list.map(item => {
          generateResultStore.updateList({ variable: item, datetime: Date.now() })
        })
        isLoading.value = false
      })
      .catch(err => {
        console.log('err', err)
        isLoading.value = false
      })
  })
}
const renderLabel = option => {
  return [
    h('img', {
      src: option.logo,
      style: {
        height: '20px',
        width: '20px',
        verticalAlign: 'middle',
        marginRight: '8px'
      }
    }),
    option.label
  ]
}
</script>

<template>
  <n-card title="生成器">
    <n-form ref="formRef" :model="modelRef" :rules="rules">
      <n-form-item path="variable">
        <n-input v-model:value="modelRef.variable" type="textarea" placeholder="变量的中文名称或描述" />
      </n-form-item>
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <n-form-item label="编程语言" path="language">
            <n-select
              v-model:value="modelRef.language"
              placeholder="选择编程语言"
              :fallback-option="false"
              :render-label="renderLabel"
              :options="programmingLanguages"
            /> </n-form-item
        ></n-gi>
        <n-gi>
          <n-form-item label="命名风格" path="style">
            <n-select
              multiple
              :fallback-option="trim"
              v-model:value="modelRef.style"
              placeholder="选择命名风格"
              :options="nameStyle"
            />
          </n-form-item>
        </n-gi>
      </n-grid>
      <n-form-item label="变量类型" path="type">
        <n-select v-model:value="modelRef.type" placeholder="选择命名风格" :options="programmingConstructs" />
      </n-form-item>
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <n-form-item label="变量前缀" path="prefix">
            <n-input v-model:value="modelRef.prefix" type="text" placeholder="变量前缀" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="变量后缀" path="suffix">
            <n-input v-model:value="modelRef.suffix" type="text" placeholder="变量后缀" />
          </n-form-item>
        </n-gi>
      </n-grid>
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <n-form-item label="变量长度" path="length">
            <n-input-number v-model:value="modelRef.length" min="1" :max="10" clearable placeholder="变量长度" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="生成数量" path="mount">
            <n-input-number v-model:value="modelRef.mount" min="1" :max="8" clearable placeholder="生成数量默认为4" />
          </n-form-item>
        </n-gi>
      </n-grid>
      <n-form-item>
        <n-button :loading="isLoading" @click="handleGenerate" type="primary" size="large">生成</n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<style scoped>
.n-button {
  width: 100%;
}
</style>
