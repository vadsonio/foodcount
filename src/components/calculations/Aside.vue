<template>
  <aside class="aside">
    <ul>
      <li v-for="(pageName, index) in pages" :key="index" @click="switchIndex(index)">
        <p :class="{active: activeIndex === index}">
          {{pageName}}
        </p>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  props: {
    activeIndex: Number,
    pages: Array
  },
  methods:{
    switchIndex(index){
      this.$emit('switchActiveIndex', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.aside{
  padding: 20px;
  width: 270px;
  flex-shrink: 0;
  background: #efeeee;
  ul{
    padding: 0;
    list-style: none;
  }
  li{
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 20px;
    p{
      padding: 5px 10px;
    }
    p.active {
      font-weight: 700;
      border-radius: 6px;
      background: #fff;
      color: #FF3D87;
    }
  }
}
</style>