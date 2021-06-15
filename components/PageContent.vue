<template>

  <div class="mt-24 content-bg px-5">

    <div class="content  max-w-hr m-auto bg-hultWhite ">
      <div>
        <img :src=featureImage />
      </div>
      <div class=" px-16 md:px-28 pb-20">
        <h2 class="text-4xl leading-10 pb-8 md:w-1/2 font-crimson" v-html="pageTitle">

        </h2>
        <div class=" leading-normal space-y-4" v-html="contentOnPage" >

        </div>
      </div>

    </div>
    <!--text below content-->
    <div v-if="textBelowContent" v-html="textBelowContent"
         class="content m-auto px-16 md:px-28 leading-7  max-w-hr mt-24">

    </div>

    <!--  price list   -->
    <div v-if="priceLists " class="content md:pricelist  m-auto max-w-hr px-16  lg:px-28  mt-24">
        <h2 class="font-crimson text-4xl leading-heading50 pb-6">
          Prislista
        </h2>
        <ul class="inline leading-7 text-base grid md:grid-cols-6">
          <PriceList v-for="(list, i) in priceLists" :key="i" :priceList="list" />
        </ul>
    </div>

    <div  class="mx-auto  max-w-hr flex mb-cardBottom md:mb-40 mt-24" >
      <NuxtLink   class="mx-auto   text-xl font-bold text-hultWhite bg-hultRoseGold w-72 py-5 px-14 text-center"
                  to="/kontakt">Kontakta
      </NuxtLink>
    </div>
<!--        manual cards if available -->
    <div v-if=manualCards
         class="flex flex-col md:flex-row  mx-auto  max-w-hr  md:justify-between md:mb-cardBottom">
      <ManualCard  v-for="(card, i) in manualCards" :key="i" :card="card"  />
    </div>



<!--        post cards-->
    <div v-if=postCards class="mx-auto max-w-cardPost md:post-card">
        <PostCard v-for="(card, i ) in postCards" :key=i :card="card"/>
    </div>

  </div>

</template>

<script>

  export default {
    props: {
      pageContent: {
        type: [Object, Array]
      }
    },

    computed: {
      pageTitle(){
        return this.pageContent?.title?.rendered  || ''
      },
      contentOnPage(){
        return this.pageContent?.content?.rendered  || ''
      },
      manualCards(){
        return this.pageContent?.acf?.cards_manual || ''
      },
      featureImage(){
        return this.pageContent.featured_image_src
      },
      postCards(){
        return this.pageContent?.acf?.post_cards || ''
      },
      textBelowContent(){
        return this.pageContent?.acf?.text_below_content || ''
      },
      priceLists(){
        return this.pageContent?.acf?.price_list || ''
      }

    }




  }


</script>

<style>

</style>
