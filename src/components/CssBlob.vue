<template>
  <div class="">
    <svg  style="width: 0; height: 0;">
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
        <feColorMatrix
                       in="blur"
                       values="1 0 0 0 0
                               0 1 0 0 0
                               0 0 1 0 0
                               0 0 0 30 -7
                               "
                       />
      </filter>
    </svg>
    <div class="hooks-main">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.hooks-main > div {
  transform: rotate(20deg);
    background: linear-gradient(#ffab00, #ffd800, #ff8900, #ff5c00);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

.hooks-main > svg {
  display: none;
}

.hooks-main > div {
  opacity: 0.6;
  width: 600px;
  height: 120px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.hooks-main > div::after {
  content: "";
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
}

.hooks-main > div:nth-child(2) {
  width: 300px;
  height: 300px;
}

.hooks-main {
  width: 100%;
  height: 100%;
  filter: url("#goo");
  overflow: hidden;
}
</style>
