<template>

  <li class="flex flex-wrap justify-between">
    <div v-html="priceList.item "></div>
    <div v-html="priceList.price"></div>

  </li>



</template>

<script>

  export default {
    props: {
      priceList: {
        type: Object,
      }
    }





  }
</script>

<style>
</style>
