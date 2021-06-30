<template>
  <div id="home"  class="px-5 lg:content-bg">

    <!--    <HeaderImage />-->
        <PageContent :page-content="data[0]" class=""/>
        <PageBlocks :page-blocks="data[0].acf" />
  </div>
</template>

<script>

import axios from 'axios'
export default {

  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://api.hultserodstradgardar.com/wp-json/wp/v2/pages?slug=${params.slug}`
    )
    return { data }
  },
  head () {
    return {
      title: this.data[0].title.rendered,
      meta: [
        { hid: 'og-title', property: 'og:title', content: this.data[0].title.rendered},
        // other meta
      ]
    }
  },
}

</script>
