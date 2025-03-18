<template xmlns="">
  <a-layout>
    <a-layout-header :style="headerStyle"><PcHeader /></a-layout-header>
    <a-layout-content :style="contentStyle">
      <Carousel  />
    </a-layout-content>

  </a-layout>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import type {CSSProperties} from 'vue';
 import PcHeader from "@/components/PcHeader.vue";
import Carousel from "@/components/Carousel .vue";
const headerStyle = ref<CSSProperties>({
  textAlign: 'center',  //
  height:60,
  paddingInline: '64',
  lineHeight: '60px',
  backgroundColor: '#fff'
})
const contentStyle = ref<CSSProperties>({
//   内容撑满body
  height: '90vh',
  paddingInline: '64',
  backgroundColor: '#fff'
})
</script>
<style scoped>



</style>
