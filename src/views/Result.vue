<template>
  <div class="main">
    <img src="../assets/images/vector-shapes-1.svg" alt="Morph Icon Left" class="Icon--small-circle" />
    <img src="../assets/images/vector-shapes-2.svg" alt="Morph Icon Right" class="Icon--big-circle" />
    <img src="../assets/images/result-page-leaf.svg" alt="Morph Icon Right" class="Icon--leaf" />
    <img src="../assets/images/baller-emoji.svg" alt="Morph Icon Right" class="Icon--baller" />
    <div class="baller">
      Baller!
    </div>
    <div class="comment">
      You love to have access to your money, whenever and wherever, we think you’d be a perfect match for our solution, join the waitlist!
    </div>
    <div class="amount" v-for="(detail, index) in userDetails" :key="index">
      <div>₦{{ detail.amount.toLocaleString() }}</div>
    </div>
    <img src="../assets/images/montly.svg" alt="Morph Icon Right" class="Icon--montly" />
    <div class="btn">JOIN THE WAITLIST</div>
    <div class="share-icon">
      <div class="icon1"></div>
      <div class="icon2"></div>
      <div class="icon3"></div>
      <div class="icon4"></div>
    </div>
    <div class="share">SHARE</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetails: []
    };
  },
  mounted() {
    this.userDetails = JSON.parse(localStorage.getItem("user_details"));
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";

.Icon {
  &--baller {
    position: absolute;
    top: 7rem;
    left: auto;
    width: 19.7rem;
    // height: 17.5rem;
    object-fit: contain;
  }
  &--leaf {
    position: fixed;
    top: 40rem;
    right: 0;
    width: 46rem;
    height: 55.4rem;
    object-fit: contain
  }
  &--small-circle {
    position: absolute;
    top: 25rem;
    left: 0;
    transform: rotate(290deg);
    object-fit: contain
  }
  &--big-circle {
    position: absolute;
    top: -20rem;
    right: 0;
    transform: rotate(290deg);
    object-fit: contain
  }
  &--montly {
    position: absolute;
    top: 50rem;
    left: auto;
    width: 19.7rem;
    height: 17.5rem;
    object-fit: contain;
  }
}

.baller {
  width: 72.4rem;
  height: 8.2rem;
  margin-top: 24rem;
  font-family: Graphik;
  font-size: 6rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: center;
  color: #3f3f3f;
}

.comment {
  width: 82.4rem;
  height: 7.7rem;
  margin-top: 1.2rem;
  opacity: 0.6;
  font-family: Graphik;
  font-size: 2.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: center;
  color: #3f3f3f;
}

.amount {
  width: 37.4rem;
  height: 8.8rem;
  margin-top: 3rem;
  font-family: Graphik;
  font-size: 8.8rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #3f3f3f;
}

.btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25.8rem;
  height: 5.8rem;
  margin-top: 10rem;
  font-family: Graphik;
  font-size: 1.7rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: #f47079;
  border-radius: 16px;
  z-index: 3;
  cursor: pointer;
}

.share-icon {
  display: flex;

  .icon1, .icon2, .icon3, .icon4 {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    margin-top: 6.7rem;
    background-color: #d8d8d8;
  }

  .icon1, .icon2, .icon3 {
    margin-right: 2rem;
  }
}

.share {
  width: 57px;
  height: 24px;
  margin-top: 1.5rem;
  font-family: Graphik;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}
</style>