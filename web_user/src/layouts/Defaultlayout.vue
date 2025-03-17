<template>
  <a-layout>
    <a-layout-header :style="headerStyle"><PcHeader /></a-layout-header>

  </a-layout>
</template>
<script lang="ts" setup>
import type { ref ,CSSProperties} from 'vue';

import PcHeader from "@/components/PcHeader.vue";

const headerStyle ={
  textAlign: 'center',
  // color: '#fff',
  height:60,
  paddingInline: '64',
  lineHeight: '64px',
  backgroundColor: '#fff'
}
</script>
<style scoped>



</style>
