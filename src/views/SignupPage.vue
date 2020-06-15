<template>
  <div id="app" class="main">
    <div class="signup-page signupPage">
      <img
        src="../assets/images/group-copy-12.svg"
        alt="Expense tracker Leaf Icon For GoMoney Nigeria"
        class="leaf-left leafLeft"
      />
      <img
        src="../assets/images/group-copy-11.svg"
        alt="Expense tracker Leaf Icon For GoMoney Nigeria"
        class="leaf-center leafCenter"
      />
      <img
        src="../assets/images/group-copy-10.svg"
        alt="Expense tracker Leaf Icon For GoMoney Nigeria"
        class="leaf-right leafRight"
      />

      <img
        src="../assets/images/vector-shapes-1.svg"
        alt="Expense tracker Morhp Icon For GoMoney Nigeria"
        class="morph-icon-left morphIconLeft"
      />
      <img
        src="../assets/images/vector-shapes-2.svg"
        alt="Expense tracker Morph Icon For GoMoney Nigeria"
        class="morph-icon-right morphIconRight"
      />

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
        src="../assets/images/logo.svg"
        alt="Expense Tracker Gomoney Logo"
        class="logo"
      />

      <div
        class="header2-div"
        v-for="(detail, index) in userDetails"
        :key="index"
      >
        <h2 class="header2-text margin-bottom display-none header2">
          <b>
            One more thing
            <br />
            <span class="name-color capitalize"
              >{{ detail.first_name }} {{ detail.last_name }}</span
            >
          </b>
        </h2>
      </div>

      <h2 class="hero-text__primary header1">
        <b>
          Hi there!
          <br />Let's get a bit personal
        </b>
      </h2>

      <!-- Desktop Slider -->
      <div class="slider">
        <div class="slider__slide">
          <div class="btn1 button1" @click="toggleBack()">
            <div class="oval">
              <p class="arrow foward">&#60;</p>
            </div>
          </div>
          <div class="card1 cardOne">
            <p class="header">What's your first name?</p>
            <p class="required">(Required)</p>
            <form class="input" v-on:submit.prevent="firstNameInput()">
              <input
                ref="firstName"
                tabindex="-1"
                type="text"
                name="first_name"
                placeholder="First Name"
                class="input_tag"
                v-model="first_name"
                autofocus
              />
            </form>
          </div>
          <div class="card2 cardTwo">
            <p class="header">And your last name?</p>
            <p class="required">(Required)</p>
            <form class="input" v-on:submit.prevent="lastNameInput()">
              <input
                ref="lastName"
                tabindex="-1"
                type="text"
                name="last_name"
                placeholder="Last Name"
                class="input_tag"
                v-model="last_name"
              />
            </form>
          </div>
          <div class="card3 cardThree">
            <p class="header">
              WWhat's your email address? (No spam. We promise)
            </p>
            <p class="required">(Required)</p>
            <form class="input" v-on:submit.prevent="emailInput()">
              <input
                ref="emailAddress"
                tabindex="-1"
                type="email"
                name="email"
                placeholder="emailaddress@gmail.com"
                class="input_tag"
                v-model="email"
              />
            </form>
          </div>
          <div class="btn2 button2" @click="toggleFront()">
            <div class="oval">
              <p class="arrow">&#62;</p>
            </div>
          </div>
        </div>
      </div>
      <!-- End of desktop slider -->

      <!-- Mobile Slider -->
      <div class="slider-mobile">
        <div class="slider-mobile__slide-mobile">
          <div class="btn1-mobile button1Mobile" @click="toggleBack()">
            <div class="oval1-mobile">
              <p class="arrow-mobile fowardMobile">&#8249;</p>
            </div>
          </div>
          <div class="card1-mobile cardOneMobile">
            <div class="card1-mobile-inner">
              <p class="header-mobile">So, what's your First Name?</p>
              <p class="required-mobile">(Required)</p>
              <form class="input-mobile" v-on:submit.prevent="firstNameInput()">
                <input
                  tabindex="-1"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  class="input_tag-mobile"
                  v-model="first_name"
                />
              </form>
            </div>
          </div>
          <div class="card2-mobile cardTwoMobile">
            <div class="card2-mobile-inner">
              <p class="header-mobile">And, what's your Last Name?</p>
              <p class="required-mobile">(Required)</p>
              <form class="input-mobile" v-on:submit.prevent="lastNameInput()">
                <input
                  tabindex="-1"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  class="input_tag-mobile"
                  v-model="last_name"
                />
              </form>
            </div>
          </div>
          <div class="card3-mobile cardThreeMobile">
            <div class="card3-mobile-inner">
              <p class="header-mobile">What's your Email Address?</p>
              <p class="required-mobile">(Required)</p>
              <form class="input-mobile" v-on:submit.prevent="emailInput()">
                <input
                  tabindex="-1"
                  type="email"
                  name="email"
                  placeholder="email@gmail.com"
                  class="input_tag-mobile"
                  v-model="email"
                />
              </form>
            </div>
          </div>
          <div class="btn2-mobile button2Mobile" @click="toggleFront()">
            <div class="oval2-mobile">
              <p class="arrow-mobile">&#8250;</p>
            </div>
          </div>
        </div>
      </div>
      <!-- end of mobile slider -->

      <div class="hero-text__secondary">
        <p class="hero-text__secondary">Press the Enter key when done.</p>
      </div>
      <div class="button">
        <div class="btn btnGo" @click="proceed()">Proceed</div>
      </div>
      <div>
        <img
          src="../assets/images/pie-chart.svg"
          alt="Expense tracker Pie Chart Icon For GoMoney Nigeria"
          class="pie-chart pieChart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      userDetails: [],
      slide1: false,
      slide2: false,
      slide3: false,
      toggleFoward: false,
      toggleBackward: false,
    };
  },
  mounted() {
    const tl = new TimelineMax();
    this.initialUserDetails();

    tl.to(".button1", 0, { display: "none" })
      .to(".cardTwo", 0, { opacity: "0.3", pointerEvents: "none" })
      .to(".cardThree", 0, { opacity: "0.3", pointerEvents: "none" })
      .to(".header2", 0, { display: "none" });

    tl.to(".button1Mobile", 0, { display: "none" })
      .to(".cardTwoMobile", 0, { opacity: "0.3", pointerEvents: "none" })
      .to(".cardThreeMobile", 0, { opacity: "0.3", pointerEvents: "none" })
      .to(".header2", 0, { display: "none" });

    tl.fromTo(
      ".signupPage",
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
        rotation: "-720",
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
        rotation: "70",
      },
      -3
    );

    TweenMax.fromTo(
      ".morphIconLeft",
      20,
      { scale: "1", rotation: "0" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        scale: "1.1",
        rotation: "-60",
      },
      -3
    );
    TweenMax.fromTo(
      ".morphIconRight",
      20,
      { scale: "1", rotation: "-10" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        scale: "1.2",
        rotation: "30",
      },
      -3
    );
    TweenMax.fromTo(
      ".leafRight",
      5,
      { x: 0, y: 0 },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: 10,
        y: -30,
      },
      -3
    );
    TweenMax.fromTo(
      ".leafLeft",
      2,
      { x: 0, y: 0 },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: -10,
        y: -10,
      },
      -3
    );
    TweenMax.fromTo(
      ".leafCenter",
      2,
      { x: 0, y: 0 },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: -3,
        y: -10,
        rotation: "5",
      },
      -3
    );
    TweenMax.to(".pieChart", 50, {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1,
    });
  },
  beforeDestroy() {
    const baseUrl = process.env.VUE_APP_SEND_USER;
    const user = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
    };
    axios.post(`${baseUrl}/user`, user);
  },
  methods: {
    initialUserDetails() {
      if (!localStorage.getItem("user_details")) {
        this.userDetails = [];
        let userObject = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          amount: "",
          key: "",
          highest_expense: "",
        };
        this.userDetails.push(userObject);
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
      }
    },
    proceed() {
      if (this.slide1 === false) {
        this.firstNameInput();
      } else if (this.slide2 === false) {
        this.lastNameInput();
      } else {
        this.emailInput();
      }
    },
    firstNameInput() {
      this.userDetails = JSON.parse(localStorage.getItem("user_details"));
      if (this.first_name.length > 0) {
        this.userDetails.map((details) => {
          details.first_name = this.first_name;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        this.$refs.lastName.focus();
      } else {
        this.$swal.fire({
          position: "top-end",
          padding: "1.5rem",
          background: "#fef2f1",
          width: 250,
          title: "Please enter first name",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
        });
        return;
      }
      if (this.slide1 === false) {
        const tl = new TimelineMax();

        tl.fromTo(
          ".button1",
          0.5,
          { opacity: "0" },
          {
            display: "flex",
            opacity: "1",
            ease: Power3.easeInOut,
            pointerEvents: "visible",
          },
          0.1
        )
          .to(
            ".cardOne",
            0.5,
            { left: "-4vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwo",
            0.5,
            { left: "-4vw", ease: Power3.easeInOut, pointerEvents: "visible" },
            0.1
          )
          .to(
            ".cardThree",
            0.5,
            { left: "-4vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(".cardTwo", 0.5, { opacity: "1", ease: Power3.easeInOut }, 0.1)
          .to(".cardOne", 0.5, { opacity: "0.3", ease: Power3.easeInOut }, 0.1);
        // .to(".header2", 0, { display: "none" }, 0.1)

        tl.fromTo(
          ".button1Mobile",
          0.5,
          { opacity: "0" },
          {
            display: "flex",
            opacity: "1",
            ease: Power3.easeInOut,
            pointerEvents: "visible",
          },
          0.1
        )
          .to(
            ".cardOneMobile",
            1.1,
            { left: "-100vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.1,
            {
              left: "-100vw",
              ease: Power3.easeInOut,
              pointerEvents: "visible",
            },
            0.1
          )
          .to(
            ".cardThreeMobile",
            1.1,
            { left: "-100vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.1,
            { opacity: "1", ease: Power3.easeInOut },
            0.1
          )
          .to(
            ".cardOneMobile",
            1.1,
            { opacity: "0.3", ease: Power3.easeInOut },
            0.1
          );
        // .to(".header2", 0, { display: "none" }, 0.1)
        this.slide1 = true;
        this.toggleFoward = true;
        // this.toggleBackward = false;
      }
    },
    lastNameInput() {
      this.userDetails = JSON.parse(localStorage.getItem("user_details"));
      if (this.last_name.length > 0) {
        this.userDetails.map((details) => {
          details.last_name = this.last_name;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        this.$refs.emailAddress.focus();
      } else {
        this.$swal.fire({
          position: "top-end",
          padding: "1.5rem",
          background: "#fef2f1",
          width: 250,
          title: "Please enter last name",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
        });
        return;
      }
      if (this.slide2 === false) {
        const tl = new TimelineMax();

        tl.fromTo(
          ".button2",
          0.5,
          { opacity: "1" },
          { opacity: "0", ease: Power3.easeInOut, display: "none" },
          0.1
        )
          .to(
            ".cardOne",
            0.5,
            { left: "-48vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwo",
            0.5,
            { left: "-48vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardThree",
            0.5,
            {
              left: "-48vw",
              ease: Power3.easeInOut,
              pointerEvents: "visible",
            },
            0.1
          )
          .to(".cardThree", 0.5, { opacity: "1", ease: Power3.easeInOut }, 0.1)
          .to(".cardTwo", 0.5, { opacity: "0.3", ease: Power3.easeInOut }, 0.1)
          .to(".header2", 0, { display: "flex" }, 0.1)
          .to(".header1", 0, { display: "none" }, 0.1);

        tl.fromTo(
          ".button2Mobile",
          0.5,
          { opacity: "1" },
          { opacity: "0", ease: Power3.easeInOut, display: "none" },
          0.1
        )
          .to(
            ".cardOneMobile",
            1.5,
            { left: "-200vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.5,
            { left: "-200vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardThreeMobile",
            1.5,
            {
              left: "-200vw",
              ease: Power3.easeInOut,
              pointerEvents: "visible",
            },
            0.1
          )
          .to(
            ".cardThreeMobile",
            1.5,
            { opacity: "1", ease: Power3.easeInOut },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.5,
            { opacity: "0.3", ease: Power3.easeInOut },
            0.1
          )
          .to(".header2", 0, { display: "flex" }, 0.1)
          .to(".header1", 0, { display: "none" }, 0.1);

        this.slide2 = true;
      }
    },
    emailInput() {
      let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[cn]([o]{0,61}[mgo]))*$/gim;
      let test = emailRegex.test(this.email);
      if (this.email.length === 0) {
        this.$swal.fire({
          position: "top-end",
          padding: "1.5rem",
          background: "#fef2f1",
          width: 220,
          title: "Please enter email",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
        });
      } else if (test === false) {
        this.$swal.fire({
          position: "top-end",
          padding: "1.5rem",
          background: "#fef2f1",
          width: 220,
          title: "Incorrect email",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
        });
      } else {
        this.userDetails.map((details) => {
          details.email = this.email;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        this.$router.push("/tracker-page");
      }
    },
    toggleBack() {
      if (this.slide2 === false) {
        const tl = new TimelineMax();

        tl.fromTo(
          ".button1",
          0.5,
          { opacity: "1" },
          {
            opacity: "0",
            ease: Power3.easeInOut,
            display: "none",
            pointerEvents: "none",
          },
          0.1
        )
          .to(
            ".cardOne",
            0.5,
            { left: "33vw", ease: Power3.easeInOut, pointerEvents: "visible" },
            0.1
          )
          .to(
            ".cardTwo",
            0.5,
            { left: "33vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardThree",
            0.5,
            { left: "33vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(".cardTwo", 0.5, { opacity: "0.3", ease: Power3.easeInOut }, 0.1)
          .to(".cardOne", 0.5, { opacity: "1", ease: Power3.easeInOut }, 0.1)
          .to(".header2", 0, { display: "none" }, 0.1)
          .to(".header1", 0, { display: "flex" }, 0.1);

        tl.fromTo(
          ".button1Mobile",
          0.5,
          { opacity: "1" },
          {
            opacity: "0",
            ease: Power3.easeInOut,
            display: "none",
            pointerEvents: "none",
          },
          0.1
        )
          .to(
            ".cardOneMobile",
            1.5,
            { left: "0", ease: Power3.easeInOut, pointerEvents: "visible" },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.5,
            { left: "0", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardThreeMobile",
            1.5,
            { left: "0", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.5,
            { opacity: "0.3", ease: Power3.easeInOut },
            0.1
          )
          .to(
            ".cardOneMobile",
            1.5,
            { opacity: "1", ease: Power3.easeInOut },
            0.1
          )
          .to(".header2", 0, { display: "none" }, 0.1)
          .to(".header1", 0, { display: "flex" }, 0.1);

        this.slide1 = false;
        this.slide2 = false;
      } else if (this.slide2 === true) {
        const tl = new TimelineMax();

        tl.fromTo(
          ".button2",
          0.5,
          { opacity: "0" },
          {
            opacity: "1",
            ease: Power3.easeInOut,
            display: "flex",
            pointerEvents: "visible",
          },
          0.1
        )
          .to(
            ".cardOne",
            0.5,
            { left: "-5vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwo",
            0.5,
            { left: "-5vw", ease: Power3.easeInOut, pointerEvents: "visible" },
            0.1
          )
          .to(
            ".cardThree",
            0.5,
            { left: "-5vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardThree",
            0.5,
            { opacity: "0.3", ease: Power3.easeInOut },
            0.1
          )
          .to(".cardTwo", 0.5, { opacity: "1", ease: Power3.easeInOut }, 0.1)
          .to(".header2", 0, { display: "none" }, 0.1)
          .to(".header1", 0, { display: "flex" }, 0.1);

        tl.fromTo(
          ".button2Mobile",
          0.5,
          { opacity: "0" },
          {
            opacity: "1",
            ease: Power3.easeInOut,
            display: "flex",
            pointerEvents: "visible",
          },
          0.1
        )
          .to(
            ".cardOneMobile",
            1.5,
            { left: "-100vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.5,
            {
              left: "-100vw",
              ease: Power3.easeInOut,
              pointerEvents: "visible",
            },
            0.1
          )
          .to(
            ".cardThreeMobile",
            1.5,
            { left: "-100vw", ease: Power3.easeInOut, pointerEvents: "none" },
            0.1
          )
          .to(
            ".cardThreeMobile",
            1.5,
            { opacity: "0.3", ease: Power3.easeInOut },
            0.1
          )
          .to(
            ".cardTwoMobile",
            1.5,
            { opacity: "1", ease: Power3.easeInOut },
            0.1
          )
          .to(".header2", 0, { display: "none" }, 0.1)
          .to(".header1", 0, { display: "flex" }, 0.1);

        this.slide2 = false;
      }
    },
    toggleFront() {
      if (this.slide1 === false) {
        this.firstNameInput();
      } else {
        this.lastNameInput();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";
@import "@/assets/styles/signupPage";
</style>
