<template>
  <div class="p-5 content-bg lg:p-0 mx-auto max-w-hr md:post-card mt-24">
    <div class=" bg-hultLightGreen flex flex-col-reverse text-hultWhite leading-7  md:flex-row ">

      <div class="pt-10 p-5 md:max-w-3xl mt-11 md:ml-10 lg:ml-16 mr-16 md:my-16 ">
        <h2 class="mb-7 font-crimson text-4xl" v-html="cardTitle"></h2>
        <div  v-html="cardBody"></div>
        <div class="flex flex-col md:flex-row mb-20 md:mb-0 mt-11 text-sm justify-between leading-7">
          <div >
            <h3 class="font-bold"> Kontakta oss</h3>
            <div v-html=" cardEmailPhone " ></div>
          </div>
          <div class="border-r m-2"></div>
          <div >
            <h3 class="font-bold ">Besök oss</h3>
            <div v-html=" cardAddress "></div>

          </div>
        </div>
      </div>
      <img :src="card.featured_image_src"  class="object-cover md:max-w-lg md:w-5/12"/>
    </div>

    <div class="text-right m-auto 2xl:container pt-12 text-xs  space-y-4">
      Porträtt för ett kommande trädgårdsreportage i Allt om trädgård- Fixa <br>
      Fotograf: Josefin Widell Hultgren
    </div>
  </div>
</template>

<script>





  import axios from 'axios';
  export default {
    head () {
      return {
        title: "Kontakt",
        meta: [
          { hid: 'og-title', property: 'og:title', content: "Kontakt"},
          // other meta
        ]
      }
    },
    data(){
      return {
        card:[],
      }
    },

    async fetch() {
      const { data } = await axios.get('https://api.hultserodstradgardar.com/wp-json/wp/v2/pages/26')

      this.card = data
    },

    computed:{
      cardTitle(){
        return this.card?.acf?.title || ''
      },
      cardBody(){
        return this.card?.acf?.body || ''
      },
      cardEmailPhone(){
        return this.card?.acf?.email_and_phone || ''
      },
      cardAddress(){
        return this.card?.acf?.address || ''
      }
    }


  }



</script>

<style>

</style>
