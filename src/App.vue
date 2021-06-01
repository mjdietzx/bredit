<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <Header></Header>
      </div>
    </div>
  </div>
  <router-view/>
  <Footer></Footer>
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
