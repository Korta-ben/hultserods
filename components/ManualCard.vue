<template>

  <div class="flex-1 bg-hultCream leading-8 mb-cardBottom md:mb-0 md:manual-card flex flex-col">
    <img :src="card.image"  class="object-cover"/>
    <h2 class="pl-8 sm:px-10 md:px-16 mt-10 font-crimson text-2xl manual-card-heading" v-html="card.title"></h2>
    <div class="px-8 pt-4 pb-12 sm:px-10 md:px-16 " v-html="card.body "></div>

  </div>



</template>

<script>

  export default {
    props: {
      card: {
        type: Object,
      }
    }





  }
</script>

<style>
</style>
