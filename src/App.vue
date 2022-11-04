<script setup lang="ts">
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core';
const { x, y } = useMouse();
</script>
<template>
  <a-layout>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div
          :style="{ padding: '24px', background: '#fff', textAlign: 'center' }"
        >
          x {{ x }} y {{ y }}
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Use ant-design-vue like a pro-max
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
