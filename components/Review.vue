<template>

  <div class="max-w-2xl bg-hultWhite md:flex-1  p-11 order-1 md:order-2  mb-10 md:mb-0 w-full ">
    <div v-html="review.review_text" class="text-center leading-7 reviewBody">

    </div>
    <div class="text-right leading-7 text-sm italic reviewName">
        {{ review.name}}
    </div>
  </div>



</template>

<script>

  export default {
    props: {
      review: {
        type: [Object]
      }
    }





  }
</script>

<style>
</style>
