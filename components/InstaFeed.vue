<template>
<div class="max-w-hr m-auto images-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-5">
  <img v-for="(photo, i) in photos" :key="i" :src="photo.media_url" />
</div>
</template>

<script>

  import axios from "axios";

  export default {
      data(){
        return{
          photos :[],
        }
      },
      async fetch () {
      const { data } = await
        axios.get(`https://graph.instagram.com/me/media?access_token=${process.env.API_SECRET}&fields=media_url,media_type,permalink`)
        this.photos = data.data.filter(photo => photo.media_type != "VIDEO").slice(0, 4)


    },


  }
</script>

<style>
</style>
