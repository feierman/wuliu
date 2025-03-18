<template>
  <a-layout>
    <a-layout-header :style="headerStyle"><PcHeader /></a-layout-header>

  </a-layout>
</template>
<script lang="ts" setup>


import PcHeader from "@/components/Pcheader.vue";

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
