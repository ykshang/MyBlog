<script setup>
</script>

<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-character">
    <p class="about-me-card-title-normal">性格</p>
    <div class="about-me-character-content">
      <div class="about-me-character-type">
        <p class="about-me-card-text-big about-me-card-text-color">辩论家</p>
        <p class="about-me-card-text-big">ENTP</p>
      </div>
      <div class="about-me-character-img"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.about-me-character
  padding: 20px
  &:hover &-img
    transform: scale(1.1)

  &-content
    display: flex

  &-type
    width: fit-content

  &-img
    display: flex
    align-items: end
    position: relative
    flex: 1
    transition: transform 1s
    width: fit-content
    min-height: 110px
    margin-right: 30px
    background-image: url("/ENTP.png")
    background-position: right bottom
    background-size: contain
    background-repeat: no-repeat
</style>
