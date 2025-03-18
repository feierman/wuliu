<template>
  <a-row>
    <a-col :span="24" class="top">
      <router-link to="/">
        <a-image
            :width="60"
            :preview="false"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style="border-radius: 10px"
        />
      </router-link>
      <div class="right">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />

      </div>
    </a-col>
  </a-row>

</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import { MailOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';
const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
    {
        key: 'home',
        icon: () => h(MailOutlined),
        label: '首页',

    },
    {
        key: 'utools',
        icon: () => h(SettingOutlined),
        label: '行业工具',

        children: [
            {
              key:'xinxiadd',
                label: '信息发布 ',

            },
            {
              key:'dingdanSearch',
                label: '订单查询',

            },
        ],
    },
  {
    key:'shop',
    label:'商家入驻',
    title:'shop'
  },
  {
    key:'logo',
    label:'登录',
    title:'login'
  }

]);
</script>

<style scoped lang="scss" >
  .top{
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }
</style>