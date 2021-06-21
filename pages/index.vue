<template>
  <div id="home">
    <HeaderImage />

    <PageContent :page-content="pageContent" />
    <PageBlocks :page-blocks="pageBlocks" />
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
  }

}

</script>

<style>

</style>
