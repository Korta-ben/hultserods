<template>
  <div id="home"  class="px-5  lg:content-bg">

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
      `https://hultapi.kortaben.work/wp-json/wp/v2/pages?slug=${params.slug}`
    )
    return { data }


  },
  // data () {
  //   return {
  //     slug:this.$route.params.slug,
  //     pageBlocks:[]
  //   }
  // },
  //
  // async asyncData (slug) {
  //
  //   const { data } = await axios.get(
  //     `https://hultapi.kortaben.work/wp-json/wp/v2/pages?slug=`+slug
  //   )
  //   // return { data }
  //
  //   console.log(data)
  //
  //
  // },
  mounted() {
    // console.log(this.$route.params.slug)
  }


}

</script>
