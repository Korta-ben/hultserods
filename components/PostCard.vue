<template>

  <div class="mt-36 bg-hultLightGreen flex flex-col text-hultWhite leading-7 mb-16 md:flex-row ">
    <img :src="card.image"  class="object-cover md:max-w-lg md:w-5/12"/>
    <div class="px-10 lg:ml-28 md:max-w-3xl mt-11 md:ml-10 mr-10 md:my-20">
      <h2 class="mb-7    font-crimson text-4xl" v-html="card.title"></h2>
      <div  v-html="card.body "></div>
      <div class=" mb-20 md:mb-0 mt-11">
        <NuxtLink :to="card.link">
          LÄS MER <img class="inline pl-4" src="~/assets/images/link-arrow.svg" />
        </NuxtLink>
      </div>
    </div>


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
