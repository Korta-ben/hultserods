<template>

  <div class=" mx-auto content max-w-hr">
    <CoolLightBox
      :items="images"
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-5">
      <div
        class="image bg-center bg-cover bg-no-repeat object-cover"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import CoolLightBox from "vue-cool-lightbox";
  import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
  export default {
    components: {
      CoolLightBox,
    },
    head () {
      return {
        title: "Galleri",
        meta: [
          { hid: 'og-title', property: 'og:title', content: "Galleri"},
          // other meta
        ]
      }
    },
    data(){
      return {
        // images: [
        //   "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        //   "https://static.toiimg.com/photo/72975551.cms",
        // ],
        // index: null,
        items:[],
        index: null,
      }

    },


    async fetch() {
      let { data } = await axios.get('https://api.hultserodstradgardar.com/wp-json/wp/v2/gallery/232')
      // console.log(data.acf.images)
      this.items = data
      // console.log( this.items)




    },

    computed:{
      images(){

        return this.items.acf?.images.map(
          o =>  o.url

        );

      }
    }


  }



</script>
<style>
  .image {
    width: 327px;
    height: 276px;
    margin: 0 auto;
  }
</style>
