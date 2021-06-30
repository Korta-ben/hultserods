<template>

  <div class="flex flex-col md:flex-row px-4 mx-auto  max-w-hr pb-16 pt-4 md:justify-between space-y-4">

    <div class="md:w-44 flex justify-center">
      <img :src=footerImage >
    </div>
    <div v-html="middleColumn"
         class=" space-y-10 col-span-2 text-base leading-normal md:w-1/2 md:px-11 ">

    </div>
    <div v-html="contactColum"
         class="space-y-4 text-base leading-normal text-center md:text-left md:w-72">
    </div>
  </div>



</template>

<script>

  export default {
    data(){
      return {
        footerItems:null,

      }
    },
    async fetch() {
      this.footerItems = await fetch('https://api.hultserodstradgardar.com/wp-json/wp/v2/ui_setting/102')
        .then(res =>
          res.json()
        )

    },

    computed: {
        footerImage(){
          return  this.footerItems.acf['layout-contents'].filter(item =>{
             return item.acf_fc_layout =='image';
          })['0'].image.url;
        },
        middleColumn() {
          return  this.footerItems.acf['layout-contents'].filter(item =>{
            return item.title =='middle block';
          })[0].textarea;
        },
      contactColum(){
        return  this.footerItems.acf['layout-contents'].filter(item =>{
          return item.title =='last block';
        })[0].textarea;
      }
      },






  }
</script>

<style>
</style>
