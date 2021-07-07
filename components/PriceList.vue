<template>

  <li class="flex flex-wrap justify-between">
    <div class="w-3/5 md:w-auto" v-html="priceList.item "></div>
    <div class="justify-self-end" v-html="priceList.price"></div>

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
