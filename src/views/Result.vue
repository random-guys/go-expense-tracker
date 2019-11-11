<template>
  <div class="main">
    <div class="result resultPage">
      <img
        src="../assets/images/vector-shapes-1.svg"
        alt="Morph Icon Left"
        class="morph-icon-left morphIconLeft"
      />
      <img
        src="../assets/images/vector-shapes-2.svg"
        alt="Morph Icon Right"
        class="morph-icon-right morphIconRight"
      />
      <img
        src="../assets/images/result-page-leaf.svg"
        alt="Morph Icon Right"
        class="leaf-bottom-right leafBottomRight"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="182"
        height="135"
        viewBox="0 0 182 135"
        class="baller-emoji"
        id="ballerEmoji"
      >
        <defs>
          <path
            id="a"
            d="M28.8 28.8c15.906 0 28.8-12.894 28.8-28.8H0c0 15.906 12.894 28.8 28.8 28.8z"
          />
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="rotate(-15 91 14.83)">
            <circle cx="150.4" cy="65.6" r="16" fill="#FFC94F" fill-rule="nonzero" />
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M157.269 59.669l-16 16a1.6 1.6 0 1 0 2.262 2.262l16-16a1.6 1.6 0 1 0-2.262-2.262z"
            />
            <circle cx="16" cy="65.6" r="16" fill="#FFC94F" fill-rule="nonzero" />
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M10.731 59.669l16 16a1.6 1.6 0 1 1-2.262 2.262l-16-16a1.6 1.6 0 1 1 2.262-2.262z"
            />
            <circle cx="83.2" cy="67.2" r="67.2" fill="#FFC94F" fill-rule="nonzero" />
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M140.962 32.838C129.238 13.173 107.757 0 83.2 0 58.03 0 36.092 13.838 24.58 34.32c10.756-.33 32.096-.51 53.905-.68 1.408-.01 3.306-8.029 4.715-8.04 1.97-.015 3.452 7.976 5.411 7.96 22.203-.174 43.258-.364 52.351-.722z"
            />
            <circle cx="54.4" cy="62.4" r="6.4" fill="#000" fill-rule="nonzero" />
            <circle id="rightEye" cx="112" cy="62.4" r="6.4" fill="#000" fill-rule="nonzero" />
            <g transform="translate(54.4 86.4)">
              <mask id="b" fill="#fff">
                <use xlink:href="#a" />
              </mask>
              <use fill="#674B0A" fill-rule="nonzero" xlink:href="#a" />
              <path
                fill="#F47079"
                fill-rule="nonzero"
                d="M44.8 38.4c15.906 0 28.8-12.894 28.8-28.8H16c0 15.906 12.894 28.8 28.8 28.8z"
                mask="url(#b)"
                transform="matrix(1 0 0 -1 0 48)"
              />
            </g>
          </g>
          <path
            id="sunShade"
            fill="#000"
            d="M156 36l-34.935 59.87-38.357-21.912L60.51 112 0 77.434l60.646-16.078-.091-.052L156 36z"
          />
          <path
            id="sunShadeHand"
            fill="#000"
            fill-rule="nonzero"
            d="M114.58 51.914l66-20a2 2 0 0 0-1.16-3.828l-66 20a2 2 0 0 0 1.16 3.828z"
          />
        </g>
      </svg>

      <div class="baller"><p>Baller!</p></div>
      <div
        class="comment"
      ><p>You love to have access to your money, whenever and wherever, we think you’d be a perfect match for our solution, join the waitlist!</p></div>
      <div class="amount" v-for="(detail, index) in userDetails" :key="index">
        <div class="figure"><p>₦{{ detail.amount.toLocaleString() }}</p></div>
      </div>
      <img src="../assets/images/montly.svg" alt="Morph Icon Right" class="montly" />
      <div class="btn"><p>JOIN THE WAITLIST</p></div>
      <div class="share-icon">
        <div class="icon1"></div>
        <div class="icon2"></div>
        <div class="icon3"></div>
        <div class="icon4"></div>
      </div>
      <div class="share">SHARE</div>
    </div>
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

    const tl = new TimelineMax();

    tl.fromTo(".resultPage", 1.5, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut})

    TweenMax.fromTo(
      ".morphIconRight",
      60,
      { scale: "0.8" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        scale: "1",
        rotation: "-180"
      },
      -3
    );
    TweenMax.fromTo(
      ".morphIconLeft",
      120,
      { scale: "1" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        scale: "1.5",
        rotation: "360"
      },
      -3
    );
    TweenMax.fromTo(
      ".leafBottomRight",
      5,
      { x: 0, y: 0, scale: "1" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: 10,
        y: -30,
        scale: "1.1"
      },
    )
    TweenMax.fromTo(
      "#sunShade",
      0.3,
      { y: "0" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5,
        ease: Linear.easeNone,
        y: "-60"
      },
    )
    TweenMax.fromTo(
      "#sunShadeHand",
      0.3,
      { y: "0" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5,
        ease: Linear.easeNone,
        y: "-50", rotation: "40"
      },
    );
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";
</style>