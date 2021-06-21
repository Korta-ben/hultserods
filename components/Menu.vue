<template>
  <nav class=" w-1/4 md:w-full md:mt-12 flex flex-col justify-end">
    <div
      class="float-right md:hidden mt-10 flex flex-col items-end"
      @click="showMenu = !showMenu"
    >
      <div class="navicon navico1" />
      <div class="navicon navico2" />
      <div class="navicon navico3" />
    </div>
    <ul
      :class="{hidden : showMenu}"
      class="menu text-right bg-hultChalk  flex flex-col justify-end uppercase   right-0 md:hidden"
    >
      <li v-for="item in menuItems" :key="item.id" class="py-4 pl-4 pr-0">
<!--        <NuxtLink-->
<!--          :to="item.slug"-->
<!--        >-->
<!--          {{ item.title }}-->
<!--        </NuxtLink>-->
        <NuxtLink
          :to="item.slug"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>

    <ul
      class="md:max-w-menu  md:bg-transparent md:mx-auto md:flex-row  md:mt-0  md:justify-center md:block hidden md:space-y-0 md:pr-0  uppercase"
    >
      <li v-for="item in menuItems" :key="item.id" class="p-4  md:text-center md:inline-block">
        <NuxtLink
          :to="item.slug"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      menuItems: null,
      showMenu: true
    }
  },
  async fetch () {
    this.menuItems = await fetch('https://hultapi.kortaben.work/wp-json/wp/v2/menu')
      .then(res =>
        res.json()
      )
  }

}
</script>

<style>
</style>
