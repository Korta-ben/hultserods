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
    <!--        post cards-->
    <div v-if="postCards" class="mx-auto max-w-cardPost md:post-card">
      <PostCard v-for="(card, i ) in postCards" :key="i" :card="card" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    pageBlocks: {
      type: [Object, Array]
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
    }

  }

}

</script>
