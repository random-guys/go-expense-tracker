<template>
  <div class="main">
    <div class="result resultPage">
      <canvas id="confetti" class="canvas"></canvas>
      <img
        src="../assets/images/vector-shapes-1.svg"
        alt="Expense tracker Morph Icon For GoMoney Nigeria"
        class="morph-icon-left-desktop morphIconLeftDesktop"
      />
      <img
        src="../assets/images/vector-shapes-2.svg"
        alt="Expense tracker Morph Icon For GoMoney Nigeria"
        class="morph-icon-right-desktop morphIconRightDesktop"
      />
      <img
        src="../assets/images/result-page-leaf.svg"
        alt="Expense tracker Leaf Icon For GoMoney Nigeria"
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
            <circle
              cx="150.4"
              cy="65.6"
              r="16"
              fill="#FFC94F"
              fill-rule="nonzero"
            />
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M157.269 59.669l-16 16a1.6 1.6 0 1 0 2.262 2.262l16-16a1.6 1.6 0 1 0-2.262-2.262z"
            />
            <circle
              cx="16"
              cy="65.6"
              r="16"
              fill="#FFC94F"
              fill-rule="nonzero"
            />
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M10.731 59.669l16 16a1.6 1.6 0 1 1-2.262 2.262l-16-16a1.6 1.6 0 1 1 2.262-2.262z"
            />
            <circle
              cx="83.2"
              cy="67.2"
              r="67.2"
              fill="#FFC94F"
              fill-rule="nonzero"
            />
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M140.962 32.838C129.238 13.173 107.757 0 83.2 0 58.03 0 36.092 13.838 24.58 34.32c10.756-.33 32.096-.51 53.905-.68 1.408-.01 3.306-8.029 4.715-8.04 1.97-.015 3.452 7.976 5.411 7.96 22.203-.174 43.258-.364 52.351-.722z"
            />
            <circle
              cx="54.4"
              cy="62.4"
              r="6.4"
              fill="#000"
              fill-rule="nonzero"
            />
            <circle
              id="rightEye"
              cx="112"
              cy="62.4"
              r="6.4"
              fill="#000"
              fill-rule="nonzero"
            />
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

      <div class="baller">
        <p class="display-none the-money-monk">The Money Monk</p>
        <p class="display-none the-essentialist">The Essentialist</p>
        <p class="display-none the-sensible-sage">The Sensible Sage</p>
        <p class="display-none the-baby-baller">The Baby Baller</p>
        <p class="display-none the-spontanious-spender">
          The Spontaneous Spender
        </p>
        <p class="display-none the-big-spender">The Big Spender</p>
        <p class="display-none the-generous-sage">The Generous Sage</p>
        <p class="display-none the-money-maestro">The Money Maestro</p>
      </div>

      <div class="the-money-monk-comment">
        <p class="display-none the-money-monk-p">
          You'd watch your money like a hawk if you could! It's no surprise to
          you that <b>₦{{ this.highestExpense.toLocaleString() }}</b> of your
          money goes towards <b>{{ this.key }}</b
          >. In your bank, every kobo has it's place and every Naira has it's
          time. Do it easier with GoMoney. With push notifications, concise
          categorised spending overviews, a bill splitting tool and many
          channels to receive (and send) money, you have everything you need for
          watch your money closely.
        </p>
      </div>

      <div class="the-essentialist-comment">
        <p class="display-none the-essentialist-comment-p">
          You probably spend a lot of time on budgets and monitoring your
          spending habits. <b>₦{{ this.highestExpense.toLocaleString() }}</b> of
          your expenses goes towards <b>{{ this.key }}</b
          >; you're careful, not boring. GoMoney is designed to help you
          organise your money and declutter your finances, freeing you up to do
          more of the things you enjoy. So sit back, take a sip out of your
          (reasonably priced) drink and let GoMoney handle the hassle.
        </p>
      </div>

      <div class="the-sensible-sage-comment">
        <p class="display-none the-sensible-sage-comment-p">
          You have a budget, but you probably often go beyond it for
          <b>{{ this.key }}</b> and other expenses because you cannot come and
          die. It's not that you're bad at planning, you just haven't taken your
          needs and personality into account when creating your budget. GoMoney
          can help. Monitor your expenses without spending time mapping out a
          budget. With GoMoney, you get to see exactly how you are spending in
          real-time, and effortlessly adjust to suit your goals.
        </p>
      </div>

      <div class="the-baby-baller-comment">
        <p class="display-none the-baby-baller-comment-p">
          You like to plot your enjoyment; You most allocate funds to
          <b>{{ this.key }}</b> and other things that matter to you. Budgeting
          is hard and you've lived it. GoMoney can help. With GoMoney, you'll
          always be up-to-date with how much you're spending. Schedule future
          payments, Split bills and request and send money; GoMoney allows you
          to plan before, during and after you spend without breaking a sweat!
        </p>
      </div>

      <div class="the-spontanious-spender-comment">
        <p class="display-none the-spontanious-spender-comment-p">
          Money goes through your account like water goes through a sponge—
          quickly, but languid enough that there's some left for later.
          <b class="capitalize">{{ this.key }}</b> claims
          <b>₦{{ this.highestExpense.toLocaleString() }}</b> of your money now,
          but with you, that might change soon. Baller, meet GoMoney;
          flexibility is our MO. Think of GoMoney as your financial assistant,
          designed to tailor itself to your specific needs. Whether you're a
          saver, a big spender or somewhere in-between, we've got the tools to
          for you.
        </p>
      </div>

      <div class="the-big-spender-comment">
        <p class="display-none the-big-spender-comment-p">
          You most likely have savings, but you're also not afraid to spend your
          money on the things you enjoy— like
          <b>₦{{ this.highestExpense.toLocaleString() }}</b> on
          <b>{{ this.key }}</b
          >. You're goals. Let's make that easier. With GoMoney's payments
          features (plural), you can send and receive money from anyone,
          anytime, with as little as a unique payment link and their phone
          number. And with our solid security, you have rest knowing that you're
          protected, even when you're not looking.
        </p>
      </div>

      <div class="the-generous-sage-comment">
        <p class="display-none the-generous-sage-comment-p">
          You're into using your money for your enjoyment. For you, the thrill
          is sometimes in the spending, or in the benefits of
          <b>{{ this.key }}</b
          >. Whatever it is, GoMoney can fire up the fun. GoMoney has
          democratised payments, and in this regime, you choose what payment
          method works for you. Add bill splitting, scheduling payments, push
          notifications and a detailed expense tracker to the mix, you have all
          the tools you need to splurge till you drop.
        </p>
      </div>

      <div class="the-money-maestro-comment">
        <p class="display-none the-money-maestro-comment-p">
          You're "baller" personified. Be it maintaining a specific lifestyle,
          sending surprise gifts to friends or spending
          <b>₦{{ this.highestExpense.toLocaleString() }}</b> on
          <b>{{ this.key }}</b
          >, you're not afraid to spend on the things that matter to you. But
          how do you enjoy your money with all the limitations and security
          concerns flying around? Try GoMoney.Think of GoMoney is your sidekick,
          deigned to tailor itself to your security and transaction needs.
          You're always in control, so if your goals change, no qualms,
          GoMoney's got you.
        </p>
      </div>

      <div class="amount" v-for="(detail, index) in amountSum" :key="index">
        <div class="figure">
          <p>₦{{ detail.value.toLocaleString() }}</p>
        </div>
      </div>
      <div class="duration">
        <select v-model="selected" class="monthly" @change="calcAmount($event)">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <a href="https://gomoney.global/join" class="btn" target="_blank"
        >JOIN THE WAITLIST</a
      >
      <div class="share-icon">
        <!-- <div class="icon1">
          <a href="https://www.instagram.com" class="link" target="_blank">
            <img
              src="../assets/images/instagram.svg"
              alt="Instagram Icon"
              class="icon"
            />
          </a>
        </div> -->
        <div class="icon3">
          <a href="" class="link" target="_blank">
            <img
              @click="shareToTwitter()"
              src="../assets/images/twitter.svg"
              alt="Expense tracker Twitter Icon For GoMoney Nigeria"
              class="icon"
            />
          </a>
        </div>
        <div class="icon2">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://expensetrackerdev.netlify.com&quote=I just used @gomoneyng Expense Tracker! you should try it out."
            target="_blank"
            title="Share on Facebook"
          >
            <img
              src="../assets/images/facebook.svg"
              alt="Expense tracker Facebook Icon For GoMoney Nigeria"
              class="icon"
            />
          </a>
        </div>
        <!-- <div class="icon4"></div> -->
      </div>
      <div class="share">SHARE</div>
    </div>
  </div>
</template>

<script>
import ConfettiGenerator from "confetti-js";

export default {
  name: "app",
  data() {
    return {
      userDetails: [],
      amountSum: [],
      selected: "Monthly",
      weekly: "",
      monthly: "",
      yearly: "",
      key: "",
      highestExpense: "",
      twitterComment: ""
    };
  },
  mounted() {
    this.userDetails = JSON.parse(localStorage.getItem("user_details"));
    this.amountSum = [
      {
        value: 0
      }
    ];
    this.userDetails.map(details => {
      this.monthly = details.amount;
      this.key = details.key;
      this.highestExpense = details.highest_expense;
    });
    this.amountSum.map(amount => {
      amount.value = this.monthly;
    });
    const headerCanvasSettings = {
      target: "confetti",
      max: "60",
      size: "2",
      animate: true,
      props: ["circle", "square", "triangle", "rectangle"],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
        [57, 181, 74],
        [237, 28, 36],
        [252, 238, 33],
        [251, 176, 59],
        [0, 255, 255],
        [237, 30, 121]
      ],
      clock: "80"
      // rotate: true
    };
    const canvas = new ConfettiGenerator(headerCanvasSettings);
    canvas.render();

    const tl = new TimelineMax();

    tl.fromTo(
      ".resultPage",
      1.5,
      { opacity: 0, ease: Power2.easeInOut },
      { opacity: 1, ease: Power2.easeInOut }
    );

    TweenMax.fromTo(
      ".morphIconLeftDesktop",
      120,
      { scale: "1", rotation: "0" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        scale: "1.1",
        rotation: "-720"
      },
      -3
    );
    TweenMax.fromTo(
      ".morphIconRightDesktop",
      120,
      { scale: "1", rotation: "-50" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        scale: "1.1",
        rotation: "70"
      },
      -3
    );
    TweenMax.fromTo(
      ".leafBottomRight",
      5,
      { x: 0, y: 0 },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: 10,
        y: -30
      }
    );
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
      }
    );
    TweenMax.fromTo(
      "#sunShadeHand",
      0.3,
      { y: "0" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5,
        ease: Linear.easeNone,
        y: "-50",
        rotation: "40"
      }
    );
    if (this.monthly <= 20000) {
      this.twitterComment = "a Money Monk";
      TweenMax.fromTo(
        ".the-money-monk",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-money-monk-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-money-monk-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
    if (this.monthly > 20000 && this.monthly <= 30000) {
      this.twitterComment = "an Essentialist";
      TweenMax.fromTo(
        ".the-essentialist",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-essentialist-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-essentialist-comment-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
    if (this.monthly > 30000 && this.monthly <= 50000) {
      this.twitterComment = "a Sensible Sage";
      TweenMax.fromTo(
        ".the-sensible-sage",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-sensible-sage-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-sensible-sage-comment-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
    if (this.monthly > 50000 && this.monthly <= 60000) {
      this.twitterComment = "a Baby Baller";
      TweenMax.fromTo(
        ".the-baby-baller",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-baby-baller-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-baby-baller-comment-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
    if (this.monthly > 60000 && this.monthly <= 70000) {
      this.twitterComment = "a Spontanious Spender";
      TweenMax.fromTo(
        ".the-spontanious-spender",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-spontanious-spender-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-spontanious-spender-comment-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
    if (this.monthly > 70000 && this.monthly <= 85000) {
      this.twitterComment = "a Big Spender";
      TweenMax.fromTo(
        ".the-big-spender",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-big-spender-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-big-spender-comment-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
    if (this.monthly > 85000 && this.monthly <= 100000) {
      this.twitterComment = "a Generous Sage";
      TweenMax.fromTo(
        ".the-generous-sage",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-generous-sage-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-generous-sage-comment-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
    if (this.monthly > 100000) {
      this.twitterComment = "Money Maestro";
      TweenMax.fromTo(
        ".the-money-maestro",
        1,
        { opacity: "0" },
        {
          repeat: -1,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Power1.easeInOut,
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-money-maestro-comment",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "1"
        }
      );
      TweenMax.fromTo(
        ".the-money-maestro-comment-p",
        0.3,
        { opacity: "0" },
        {
          display: "block",
          opacity: "0.6"
        }
      );
    }
  },
  methods: {
    calcAmount() {
      let amount = "";
      this.userDetails.map(detail => {
        amount = detail.amount;
      });
      if (this.selected === "Weekly") {
        this.weekly = amount / 4;
        this.amountSum.map(amount => {
          amount.value = this.weekly;
        });
      }
      if (this.selected === "Monthly") {
        this.monthly = amount;
        this.amountSum.map(amount => {
          amount.value = this.monthly;
        });
      }
      if (this.selected === "Yearly") {
        this.yearly = amount * 12;
        this.amountSum.map(amount => {
          amount.value = this.yearly;
        });
      }
    },
    shareToTwitter() {
      const text = `I just used @gomoneyng Expense Tracker! I am ${
        this.twitterComment
      } i spend ₦${this.highestExpense.toLocaleString()} on ${this.key}.`;
      const url = `https://expensetrackerdev.netlify.com`;
      window.location.href =
        "http://twitter.com/intent/tweet?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(text);
    }
    // shareToFacebook() {
    //   FB.ui(
    //     {
    //       method: "share",
    //       href: "https://developers.facebook.com/docs/"
    //     },
    //     function(response) {}
    //   );
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";
</style>
