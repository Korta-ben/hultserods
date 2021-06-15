<template>
<!--  <div class="2xl:container xl:mx-auto grid grid-cols-auto font-body md:grid-flow-col min-h-screen">-->
  <div id="app">
    <header
      class="container 2xl:container md:relative md:flex-col md:justify-center md:mt-header  top-0 mx-auto max-w-full flex justify-between items-baseline p-4 content-start">
        <Logo/>
        <Menu />
    </header>

    <div class="container mb-8 mx-auto  max-w-hr border-b border-hultBrown  mx-4 bg-hultBrown"></div>


    <Nuxt />

    <div class=" mt-32 container mb-8 mx-auto  max-w-hr border-b border-hultBrown  mx-4 bg-hultBrown"></div>

    <Footer />
  </div>
</template>



<script>
  export default {

  }

</script>


