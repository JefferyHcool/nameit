<template>
  <div class="macos-window-controls">
    <div class="control-dot" id="close"></div>
    <div class="control-dot" id="minimize"></div>
    <div class="control-dot" id="maximize"></div>
  </div>
</template>

<script>
export default {
  name: 'MacOsWindowControls'
  // 你可以在这里添加一些逻辑，例如点击事件处理
}
</script>

<style scoped>
.macos-window-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #bbb;
}

#close {
  background-color: #ff605c;
}

#minimize {
  background-color: #ffbd44;
}

#maximize {
  background-color: #00ca4e;
}
</style>
