<template>
  <div class="mt-24 ">
    <div class="content  max-w-hr m-auto bg-hultWhite ">
      <div>
        <img :src="featureImage">
      </div>
      <div class=" px-16 md:px-28 pb-20">
        <h2 class="text-4xl leading-10 break-words pb-8 md:w-1/2 font-crimson" v-html="pageTitle" />
        <div class=" leading-normal space-y-4" v-html="contentOnPage" />
      </div>
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
    pageTitle() {
      return this.pageContent?.title?.rendered || ''
    },
    contentOnPage() {
      return this.pageContent?.content?.rendered || ''
    },
    featureImage() {
      return this.pageContent?.featured_image_src
    }
  }
}
</script>
