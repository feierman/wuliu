<template xmlns="">
  <a-layout style="height: 100vh; overflow: hidden;">
    <a-layout-header :style="headerStyle"><PcHeader /></a-layout-header>
    <a-layout-content :style="contentStyle">
      <Carousel  />
      <Search />
    </a-layout-content>
    <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import type {CSSProperties} from 'vue';
 import PcHeader from "@/components/Pcheader.vue";
import Carousel from "@/components/Carousel .vue";
import Search from "@/components/Search.vue";
const headerStyle = ref<CSSProperties>({
  textAlign: 'center',
  height:'60px',
  lineHeight: '60px',
  backgroundColor: '#fff'
})
const contentStyle = ref<CSSProperties>({
  paddingInline: '64',

  backgroundColor: '#fff'
})
const footerStyle = ref<CSSProperties>({
  textAlign: 'center',
  paddingInline: '64',
  backgroundColor: '#ccc'
})
</script>
<style scoped>



</style>
