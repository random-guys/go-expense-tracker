<template>
  <div id="app" class="main">
    <img src="../assets/images/group-copy-12.svg" alt="Leaf Icon Left" class="Icon--1" />
    <img src="../assets/images/group-copy-11.svg" alt="Leaf Icon Left" class="Icon--2" />
    <img src="../assets/images/group-copy-10.svg" alt="Leaf Icon Left" class="Icon--3" />
    <img src="../assets/images/vector-shapes-1.svg" alt="Morph Icon Left" class="Icon--4" />
    <img src="../assets/images/vector-shapes-2.svg" alt="Morph Icon Right" class="Icon--5" />
    <img src="../assets/images/logo.svg" alt="Gomoney Logo" class="logo" />
    <h2 class="hero-text__primary header1">Hi there! Let’s make this personal</h2>
    <h2 class="header2-text margin-top header2">One more thing</h2>
    <div class="header2-text margin-bottom" v-for="(detail, index) in userDetails" :key="index">
      <h2
        class="header2-text margin-bottom display-none capitalize header2"
      >{{ detail.first_name }}</h2>
    </div>
    <div class="slider">
      <div class="btn1 button1" @click="toggleBack()">
        <div class="oval">
          <p class="arrow foward"></p>
        </div>
      </div>
      <div class="slider__slide">
        <div class="card1 cardOne">
          <p class="header">So, what's your...?</p>
          <p class="required">(Required)</p>
          <form class="input" v-on:submit.prevent="firstNameInput()">
            <input
              tabindex="-1"
              type="text"
              name="first_name"
              placeholder="First Name"
              class="input_tag"
              v-model="first_name"
            />
          </form>
        </div>
        <div class="card2 cardTwo">
          <p class="header">And, what's your...?</p>
          <p class="required">(Required)</p>
          <form class="input" v-on:submit.prevent="lastNameInput()">
            <input
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
          <p class="header">What's your email address?</p>
          <p class="required">(Required)</p>
          <form class="input" v-on:submit.prevent="emailInput()">
            <input
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
            <p class="arrow"></p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="hero-text__secondary">Press the Enter key when done.</p>
      <div><img src="../assets/images/pie-chart.svg" alt="Gomoney Logo" class="pie-chart" /></div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";

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
      toggleBackward: false
    };
  },
  mounted() {
    const tl = new TimelineMax();

    tl.to(".button1", 0, { display: "none" })
      .to(".cardTwo", 0, { opacity: "0.3", pointerEvents: "none" })
      .to(".cardThree", 0, { opacity: "0.3", pointerEvents: "none" })
      .to(".header2", 0, { display: "none" });
    this.initialUserDetails();
  },
  methods: {
    initialUserDetails() {
      if (!localStorage.getItem("user_details")) {
        this.userDetails = [];
        let userObject = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          amount: ""
        };
        this.userDetails.push(userObject);
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
      }
    },
    firstNameInput() {
      this.userDetails = JSON.parse(localStorage.getItem("user_details"));
      if (this.first_name.length > 0) {
        this.userDetails.map(details => {
          details.first_name = this.first_name;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
      }
      else{
        alert("Please enter first name")
        return
      }
      if (this.slide1 === false) {
        const tl = new TimelineMax();

        tl.to(
          ".button1",
          0.3,
          { display: "flex", pointerEvents: "visible" },
          0.1
        )
          .to(".cardOne", 0.3, { left: "-5rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.3, { left: "-5rem", pointerEvents: "visible" }, 0.1)
          .to(".cardThree", 0.3, { left: "-5rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.5, { opacity: "1" }, 0.1)
          .to(".cardOne", 0.5, { opacity: "0.3" }, 0.1);
        // .to(".header2", 0, { display: "none" }, 0.1)
        this.slide1 = true;
        this.toggleBackward = false;
      }
    },
    lastNameInput() {
      this.userDetails = JSON.parse(localStorage.getItem("user_details"));
      if (this.last_name.length > 0) {
        this.userDetails.map(details => {
          details.last_name = this.last_name;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
      }
      else{
        alert("Please enter last name")
        return
      }
      if (this.slide2 === false) {
        const tl = new TimelineMax();

        tl.to(".button2", 0, { display: "none" }, 0.1)
          .to(".cardOne", 0.3, { left: "-75rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.3, { left: "-75rem", pointerEvents: "none" }, 0.1)
          .to(
            ".cardThree",
            0.3,
            { left: "-75rem", pointerEvents: "visible" },
            0.1
          )
          .to(".cardThree", 0.5, { opacity: "1" }, 0.1)
          .to(".cardTwo", 0.5, { opacity: "0.3" }, 0.1)
          .to(".header2", 0, { display: "flex" }, 0.1)
          .to(".header1", 0, { display: "none" }, 0.1);

        this.toggleBackward = true;
        this.slide2 = true;
      }
    },
    emailInput() {
      let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[cn]([o]{0,61}[mgo]))*$/gim;
      let test = emailRegex.test(this.email);
      if (
        this.first_name.length === 0 ||
        this.last_name.length === 0 ||
        test === false
      ) {
        alert("Incorrect email");
        return;
      } else {
        this.userDetails.map(details => {
          details.email = this.email;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        this.$router.push("/tracker-page");
      }
    },
    toggleBack() {
      if (this.toggleBackward === false) {
        const tl = new TimelineMax();

        tl.to(".button1", 0.3, { display: "none", pointerEvents: "none" }, 0.1)
          .to(".cardOne", 0.3, { left: "55rem", pointerEvents: "visible" }, 0.1)
          .to(".cardTwo", 0.3, { left: "55rem", pointerEvents: "none" }, 0.1)
          .to(".cardThree", 0.3, { left: "55rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.5, { opacity: "0.3" }, 0.1)
          .to(".cardOne", 0.5, { opacity: "1" }, 0.1)
          .to(".header2", 0, { display: "none" }, 0.1)
          .to(".header1", 0, { display: "flex" }, 0.1);

        this.slide1 = false;
        this.toggleFoward = false;
        this.toggleBackward = true;
      } else if (this.toggleBackward === true) {
        const tl = new TimelineMax();

        tl.to(".button2", 0, { display: "flex", pointerEvents: "visible" }, 0.1)
          .to(".cardOne", 0.3, { left: "-5rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.3, { left: "-5rem", pointerEvents: "visible" }, 0.1)
          .to(".cardThree", 0.3, { left: "-5rem", pointerEvents: "none" }, 0.1)
          .to(".cardThree", 0.5, { opacity: "0.3" }, 0.1)
          .to(".cardTwo", 0.5, { opacity: "1" }, 0.1)
          .to(".header2", 0, { display: "none" }, 0.1)
          .to(".header1", 0, { display: "flex" }, 0.1);

        this.slide2 = false;
        this.toggleBackward = false;
      }
    },
    toggleFront() {
      this.userDetails = JSON.parse(localStorage.getItem("user_details"));
      if (this.first_name.length > 0) {
        this.userDetails.map(details => {
          details.first_name = this.first_name;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
      }
      else{
        alert("Please enter first name")
        return
      }
      if (this.toggleFoward === false) {
        const tl = new TimelineMax();

        tl.to(
          ".button1",
          0.3,
          { display: "flex", pointerEvents: "visible" },
          0.1
        )
          .to(".cardOne", 0.3, { left: "-5rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.3, { left: "-5rem", pointerEvents: "visible" }, 0.1)
          .to(".cardThree", 0.3, { left: "-5rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.5, { opacity: "1" }, 0.1)
          .to(".cardOne", 0.5, { opacity: "0.3" }, 0.1);

        this.toggleFoward = true;
      } else if (this.toggleFoward === true) {
        if (this.last_name.length > 0) {
          this.userDetails.map(details => {
            details.last_name = this.last_name;
          });
          localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        }
        else{
          alert("Please enter last name")
          return
        }
        const tl = new TimelineMax();

        tl.to(".button2", 0.3, { display: "none", pointerEvents: "none" }, 0.1)
          .to(".cardOne", 0.3, { left: "-75rem", pointerEvents: "none" }, 0.1)
          .to(".cardTwo", 0.3, { left: "-75rem", pointerEvents: "none" }, 0.1)
          .to(
            ".cardThree",
            0.3,
            { left: "-75rem", pointerEvents: "visible" },
            0.1
          )
          .to(".cardThree", 0.5, { opacity: "1" }, 0.1)
          .to(".cardTwo", 0.5, { opacity: "0.3" }, 0.1)
          .to(".header2", 0, { display: "flex" }, 0.1)
          .to(".header1", 0, { display: "none" }, 0.1);

        this.toggleFoward = false;
        this.toggleBackward = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.Icon {
  &--1 {
    position: absolute;
    top: 0;
    left: 0;
  }
  &--2 {
    position: absolute;
    top: 0;
  }
  &--3 {
    position: absolute;
    top: 0;
    right: 0;
  }
  &--4 {
    position: fixed;
    bottom: 0rem;
    left: 0;
    width: 40%;
    transform: rotate(-60deg);
  }
  &--5 {
    position: fixed;
    bottom: 9rem;
    right: 5rem;
    width: 57%;
    transform: rotate(300deg);
  }
}

.pie-chart {
  position: relative;
  top: 13rem;
  left: 26rem;
}

.hero-text {
  &__primary {
    max-width: 42rem;
    font-size: 4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: $color-text;
    margin-top: 7.7rem;
    margin-bottom: 3.2rem;
  }
  &__secondary {
    width: 31.2rem;
    opacity: 0.5;
    font-size: 2.1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: normal;
    color: $color-text;

    margin-top: 3.2rem;
  }
}

.header2-text {
  max-width: 42rem;
  font-size: 4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: $color-text;

  .display-none {
    display: none;
  }

  .margin-bottom {
    margin-bottom: 3.2rem;
  }
}

.margin-top {
  margin-top: 7.7rem;
}

.slider {
  // position: absolute;
  width: 100%;
  display: flex;
  overflow-x: hidden;

  .btn1,
  .btn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 39rem;
    width: 97px;
    height: 180px;
    z-index: 2;
    background-color: #15777c;
    cursor: pointer;
  }

  .btn1 {
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }

  .btn2 {
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
    right: 0;
  }

  .oval {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0.24;
    background-color: #000000;

    .arrow {
      color: #ffffff;
      font-size: 2rem;
      margin-left: 2rem;
      margin-top: 1rem;
      font-weight: 900;
      cursor: pointer;
    }
  }

  &__slide {
    display: flex;
    width: 100%;
    .card1,
    .card2,
    .card3 {
      position: relative;
      // width: 100%;
      left: 35%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      // width: 75.2rem;
      border-radius: 8px;
      box-shadow: 0 40px 56px 0 rgba(11, 16, 51, 0.06);
      padding: 4rem 0;
      padding-left: 3rem;
      background-color: #ffffff;

      .header {
        font-family: Graphik;
        font-size: 2.8rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: normal;
        color: #000000;
      }

      .required {
        font-family: Graphik;
        font-size: 2rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.81;
        letter-spacing: normal;
        color: #f47079;
        margin-top: 1rem;
      }

      .input {
        ::placeholder {
          opacity: 0.1;
        }

        :focus {
          outline: none;
        }

        .input_tag {
          border: none;
          width: 70rem;
          font-family: Graphik;
          font-size: 5.2rem;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 0.71;
          letter-spacing: normal;
          color: #4e4e4e;
          margin-top: 1rem;
          // pointer-events: visible;
        }
      }
    }

    .card1,
    .card2 {
      width: 51.2rem;
      margin-right: 8rem;
      .input {
        .input_tag {
          width: 48rem;
        }
      }
    }
  }
}
</style>
