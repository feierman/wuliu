<template>
  <a-layout>
    <a-layout-header :style="headerStyle"><PcHeader /></a-layout-header>

  </a-layout>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import type {CSSProperties} from 'vue';

import PcHeader from "@/components/PcHeader.vue";
const headerStyle = ref<CSSProperties>({
  textAlign: 'center',
  height:60,
  paddingInline: '64',
  lineHeight: '64px',
  backgroundColor: '#fff'
})
</script>
<style scoped>



</style>
