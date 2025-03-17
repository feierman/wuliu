<template>
  <a-row  class="top" >
    <a-col class="left" :span="6">
      <router-link  to="/">
        <a-image :width="60" :preview="false" :src="href" style="border-radius: 10px" />
      </router-link>
    </a-col>
      <a-col class="right" :span="18" >
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="handleMenuClick" />
      </a-col>

  </a-row>

</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';
const href = ref<string>('https://aliyuncdn.antdv.com/vue.png');
const router = useRouter();
const current = ref<string[]>(['1']);

const items = ref<MenuProps['items']>([
  {
    key: '1',
    icon: () => h('i', { class: 'iconfont icon-wuliugongsi' }), // 使用 iconfont
    label: '首页',
    title: '首页',
  },
  {
    key: '2',
    icon: () => h('i', { class: 'iconfont icon-gengduo3' }), // 使用 iconfont
    label: '行业工具',
    title: '行业工具',
    children: [
      {
        key: '2-1',
        icon: () => h('i', { class: 'iconfont icon-xinxifabu' }), // 使用 iconfont
        label: '信息发布',
        title: '信息发布',
      },
      {
        key: '2-2',
        icon: () => h('i', { class: 'iconfont icon-dingdanchaxun' }), // 使用 iconfont
        label: '订单查询',
        title: '订单查询',
      },
    ],
  },
  {
    key: '3',
    icon: () => h('i', { class: 'iconfont icon-shangjiaruzhu' }), // 使用 iconfont
    label: '商家入驻',
    title: '商家入驻',
  },
  {
    key: '4',
    icon: () => h('i', { class: 'iconfont icon-denglu-copy' }), // 使用 iconfont
    label: '登录',
    title: '登录',
  },
]);

const handleMenuClick = ({ key }: { key: string }) => {
  console.log('Clicked menu item:', key);
  current.value = [key];

  if (key === '1') {
    router.push('/');
  } else if (key === '2-1') {
    router.push('/xinxiadd');
  } else if (key === '2-2') {
    router.push('/dingdansearch');
  } else if (key === '3') {
    router.push('/shop');
  } else if (key === '4') {
    router.push('/login');
  }
};
</script>
<style scoped lang="scss">
.top{
  //background-color: $color-surface;
  width: 100%;
  height: 60px;
}

.right{
  display: flex;
  justify-content: flex-end;
  i{
    margin-right: 8px;
  }
}
.ant-menu {
  border-bottom: none !important; /* 移除底部边框 */
}
</style>