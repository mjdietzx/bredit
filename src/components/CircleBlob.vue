<template>
  <div class="">
    <div class="gradient w-80 h-80" style="border-radius: 999px">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.gradient {
  width: 250px;
  height: 300px;
  transform: rotate(-20deg);
  border-top-left-radius: 70% 60%;
  border-top-right-radius: 30% 40%;
  border-bottom-right-radius: 30% 60%;
  border-bottom-left-radius: 70% 40%;
    background: radial-gradient(#ff5c00, #ffd800, #ffab00, #ff8900 );
    background-size: 800% 800%;
}
</style>
