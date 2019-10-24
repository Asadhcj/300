<template>
  <div class="round">
    <round-item v-for="(item, index) in itemContentArr" :key="index" :item-content="item"/>
  </div>
</template>

<script>
import RoundItem from './round-item'
export default {
  name: 'Round',
  components: { RoundItem },
  data () {
    return {
      itemContentArr: [
        {
          title: '主要著作',
          items: ['《无为而治:设计自动运行的企业制度》', '《商业模式的全新设计》', '《经济学：范式革命》', '《新范式金融学》、《新范式金融学》', '均为新兴学科领域开山之作']
        },
        {
          title: '主要著作',
          items: ['《无为而治:设计自动运行的企业制度》', '《商业模式的全新设计》', '《经济学：范式革命》', '《新范式金融学》、《新范式金融学》', '均为新兴学科领域开山之作']
        },
        {
          title: '主要著作',
          items: ['《无为而治:设计自动运行的企业制度》', '《商业模式的全新设计》', '《经济学：范式革命》', '《新范式金融学》、《新范式金融学》', '均为新兴学科领域开山之作']
        },
        {
          title: '主要著作',
          items: ['《无为而治:设计自动运行的企业制度》', '《商业模式的全新设计》', '《经济学：范式革命》', '《新范式金融学》、《新范式金融学》', '均为新兴学科领域开山之作']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .round{
    position: relative;
    height: 580px;
    background: url("../../../../assets/images/service_3.jpg");
  }
</style>
