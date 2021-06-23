<template>
  <div id="home" class="px-5 2xl:px-0">
    <HeaderImage />

      <PageContent :page-content="pageContent"  class="lg:content-bg"/>


    <PageBlocks :page-blocks="pageBlocks" />

    <InstaFeed  />
  </div>
</template>

<script>

import axios from 'axios'
export default {

  data () {
    return {
      pageContent: [],
      pageBlocks:[]
    }
  },
  async fetch () {
    const { data } = await axios.get('https://hultapi.kortaben.work/wp-json/wp/v2/pages/12')
    this.pageContent = data
    this.pageBlocks = data.acf
  },

}

</script>

<style>

</style>
