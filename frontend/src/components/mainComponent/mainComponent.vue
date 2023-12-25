<script setup lang="ts">
import GeneratorForm from '@/components/mainComponent/GeneratorForm/generatorForm.vue'
import GeneratorList from '@/components/mainComponent/GeneratorList/generatorList.vue'
</script>

<template>
  <div id="container">
    <div class="form-container">
      <div class="form-left">
        <generator-form></generator-form>
      </div>
      <div class="form-right">
        <generator-list></generator-list>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  min-height: 20rem;
}

.form-container {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  min-height: 38rem;
}
.form-left {
  width: 38%;
}
.form-right {
  width: 30%;
}
</style>
