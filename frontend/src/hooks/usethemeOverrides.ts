import { useDesignStore } from '@/store/moudles/designStore.ts'
import { computed, toRefs } from 'vue'
import { GlobalThemeOverrides } from 'naive-ui'

export const useThemeOverridesHook = () => {
  const designStore = useDesignStore()
  const { getTheme } = toRefs(designStore)
  return computed((): GlobalThemeOverrides => {
    // 通用

    // 亮色主题
    const lightObject = {
      common: {
        // baseColor: '#ffffff',

        primaryColor: '#18171D',
        primaryColorHover: '#000',
        primaryColorPressed: '#000'
        // textColor: '#FFFFFF',
        // textColor1: '#FFFFFF'
      }
    }

    // 暗色主题
    const dartObject = {
      common: {
        primaryColor: '#000',
        primaryColorHover: '#000',
        primaryColorPressed: '#000'
        // ...其他通用样式
      },

      Button: {
        textColor: '#FFFFFF' // 修正颜色值格式
        // ...其他按钮样式
      },
      LoadingBar: {
        colorLoading: '#FFFFFF'
      }
      // ...其他组件样式
    }

    return !getTheme.value ? dartObject : lightObject
  })
}
