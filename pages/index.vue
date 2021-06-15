<template>

  <div id="home">
    <HeaderImage />


    <PageContent :pageContent="pageContent"/>

  </div>

</template>

<script>

  import axios from 'axios'

  export default {
    data(){
      return {
        pageContent:[],
      }
    },

    async fetch() {
      const { data } = await axios.get('https://hultapi.kortaben.work/wp-json/wp/v2/pages/12')

      this.pageContent = data
    },






  }


</script>

<style>

</style>
