<template>
  <div>
    <!--text below content-->
    <div
      v-if="textBelowContent"
      class="content m-auto px-16 md:px-28 leading-7  max-w-hr mt-24"
      v-html="textBelowContent"
    />

    <!--  price list   -->
    <div v-if="priceLists " class="content md:pricelist  m-auto max-w-hr px-16  lg:px-28  mt-24">
      <h2 class="font-crimson text-4xl leading-heading50 pb-6">
        Prislista
      </h2>
      <ul class="inline leading-7 text-base grid md:grid-cols-6">
        <PriceList v-for="(list, i) in priceLists" :key="i" :price-list="list" />
      </ul>
    </div>

    <div class="mx-auto  max-w-hr flex mb-cardBottom md:mb-40 mt-24">
      <NuxtLink
        class="mx-auto  transition  text-xl font-bold text-hultWhite bg-hultRoseGold hover:bg-hultLightGreen w-72 py-5 px-14 text-center"
        to="/kontakt"
      >
        Kontakta
      </NuxtLink>
    </div>
    <!--        manual cards if available -->
    <div
      v-if="manualCards"
      class="flex flex-col md:flex-row  mx-auto  max-w-hr  md:justify-between md:mb-cardBottom"
    >
      <ManualCard v-for="(card, i) in manualCards" :key="i" :card="card" />
    </div>
    <!--    reviews -->

    <div v-if="customerRviews"
      class=" max-w-hr  mx-auto">
      <h2 class="max-w-hr text-center text-4xl leading-10 pb-8 font-crimson">Fina ord från våra gäster</h2>
      <div class="flex flex-wrap justify-evenly md:items-center">
        <div class="order-2 w-1/2 md:w-11 md:order-1">
          <img src="~/assets/images/line-5.svg" @click="clickedPrevious(customerRviews)" class="reviewNav">
        </div>
<!--        <Review  v-for="(review, i) in customerRviews" :key="i" :review="review"/>-->
        <Review  :review="review"/>
        <div class="order-3 mw-1/2 md:w-11">
          <img src="~/assets/images/line-4.svg" @click="clickedNext(customerRviews)" class="reviewNav">
        </div>
      </div>


    </div>
    <!--        post cards-->
    <div v-if="postCards" class="mx-auto max-w-cardPost md:post-card">
      <PostCard v-for="(card, i ) in postCards" :key="i" :card="card" />
    </div>
  </div>
</template>

<script>

import Review from "./Review";
export default {
  components: {Review},
  props: {
    pageBlocks: {
      type: [Object, Array]
    }
  },
  data (){
    return {
      current:0,
      reviewLength: this.pageBlocks?.reviews.length,
      review:this.pageBlocks?.reviews[0],
    }

  },

  computed: {

    manualCards () {
      return this.pageBlocks?.cards_manual || ''
    },
    postCards () {
      return this.pageBlocks?.post_cards || ''
    },
    textBelowContent () {
      return this.pageBlocks?.text_below_content || ''
    },
    priceLists () {
      return this.pageBlocks?.price_list || ''
    },

    customerRviews(){
      return this.pageBlocks?.reviews || ''
      // this.review = this.pageBlocks?.reviews[0]
      // this.previousReview = this.
    }

  },
  methods:{
    clickedPrevious(customerRviews){
      this.current = this.current + 1; // increase i by one
      this.current = this.current % this.reviewLength; // if we've gone too high, start from `0` again
      // return arr[i]; // give us back the item of where we are now
      // console.log(customerRviews[this.current])
      this.review = customerRviews[this.current]
    },
    clickedNext(customerRviews){
      if (this.current === 0) { // i would become 0
        this.current = this.reviewLength; // so put it at the other end of the array
      }
      this.current = this.current - 1; // decrease by one
      // console.log(customerRviews[this.current]); // give us back the item of where we are now
      this.review = customerRviews[this.current]
    }
  }

}

</script>
