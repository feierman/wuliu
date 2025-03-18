<template>
  <a-row class="searchbox">
    <a-col :span="18">
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="物流线路查询">物流查询</a-tab-pane>
        <a-tab-pane key="2" tab="乡镇线路查询">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="3" tab="公司查询">Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane key="4" tab="公司查询">Content of Tab Pane 2</a-tab-pane>
      </a-tabs>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const activeKey = ref('1');
</script>

<style scoped lang="scss">
  .searchbox{
    height: 300px;
    margin-top: 20px;

    display: flex;
    justify-content: center;
  }
  :deep(.ant-tabs-nav::before) {
    border-bottom: none; /* 移除底边框 */
  }
:deep(.ant-tabs-nav-list){
  height: 80px; /* 调整头部高度 */

}
  :deep(.ant-tabs-tab) {
    padding: 16px 24px; /* 调整头部内边距 */
    font-size: 20px; /* 调整头部字体大小 */
  }



</style>
