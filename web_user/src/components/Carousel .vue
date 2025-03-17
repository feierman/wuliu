<template>

</template>
<script setup lang="ts">
import {reactive} from "vue";
const imgs =reactive([
  {
    id:1,
    name:'千图通',
    image:'https://ts1.tc.mm.bing.net/th/id/R-C.57384e4c2dd256a755578f00845e60af?rik=uy9%2bvT4%2b7Rur%2fA&riu=http%3a%2f%2fimg06file.tooopen.com%2fimages%2f20171224%2ftooopen_sy_231021357463.jpg&ehk=whpCWn%2byPBvtGi1%2boY1sEBq%2frEUaP6w2N5bnBQsLWdo%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 2,
    name: '大山',
    image: 'https://img.shetu66.com/2023/06/28/1687923713713305.png'
  },
  {
    id:3,
    name:'天源',
    image:'https://bpic.588ku.com/illus_list_pic/23/07/15/e21b58889bf41d069ba2d5d67ec43496.jpg'
  }
])


</script>
<style scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>


