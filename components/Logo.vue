<template>
  <div class="self-start md:self-center">
    <NuxtLink to="/">
      <img src="~/assets/images/logo.svg" class="md:hidden h-24">
      <img src="~/assets/images/logo-text.svg" class="hidden md:block">
    </NuxtLink>
  </div>



</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
