<template>
  <div class="bg-dark-0 relative overflow-hidden w-full">
  </div>
  <div class="relative bg-dark-0">
    <router-view/>
  </div>
  <!-- <Footer></Footer> -->
</template>

<script>
  import Header from '/src/components/Header.vue'
  import Footer from '/src/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer,
    },
  }
</script>
