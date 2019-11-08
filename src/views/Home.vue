<template>
  <div id="app" class="main">
    <img src="../assets/images/group-copy-8.svg" alt="Leaf Icon Left" class="Icon--1">
    <img src="../assets/images/group-copy-9.svg" alt="Leaf Icon Right" class="Icon--2">
    <img src="../assets/images/vector-shapes-1.svg" alt="Morph Icon Left" class="Icon--3">
    <img src="../assets/images/vector-shapes-2.svg" alt="Morph Icon Right" class="Icon--4">
    <img src="../assets/images/logo.svg" alt="Gomoney Logo" class="logo">
    <h1 class="hero-text__primary">
      Discover your
      spending habits in 1 min.
    </h1>
    <p class="hero-text__secondary">
      Try our expense tracker to see where your money goes every month
    </p>
    <router-link to="/sign-up-page" class="btn">Go</router-link>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main';

.Icon {
    &--1 {
        position: absolute;
        top: 0;
        left: 0;
    }
    &--2 {
        position: absolute;
        top: 0;
        right: 0;
    }
    &--3 {
        position: absolute;
        top: 0;
        left: 0;
    }
    &--4 {
        position: absolute;
        top: 0;
        right: 0;
    }
}

.hero-text {
    &__primary {
        max-width: 72.4rem;
        font-size: 6rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.37;
        letter-spacing: normal;
        text-align: center;
        color: $color-text;
        z-index: 2;

        margin-top: 5.7rem;
    }
    &__secondary {
        max-width: 61rem;
        opacity: 0.6;
        font-size: 2.6rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        text-align: center;
        color: $color-text;
        z-index: 2;

        margin-top: 3.8rem;
    }
}

.btn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-size: 1.7rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.41;
    letter-spacing: normal;
    text-align: center;
    color: $color-white;
    padding: 1.5rem 4.5rem;
    border-radius: 1.2rem;
    z-index: 2;
    background-color: $color-btn-bkg;
    transition: all .4s;

    margin-top: 3.2rem;

    &:hover {
      background-color: darken($color-btn-bkg, 20%);
      box-shadow: 0 1rem 1rem $color-text;
      transform: scale(1.3);
    }
}

</style>
