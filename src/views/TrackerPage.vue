<template>
  <div id="app" class="main">
    <div class="tracker-page trackerPage">
      <img src="../assets/images/group-copy-12.svg" alt="Leaf Icon Left" class="leaf-left leafLeft" />
      <img
        src="../assets/images/group-copy-11.svg"
        alt="Leaf Icon Left"
        class="leaf-center leafCenter"
      />
      <img
        src="../assets/images/group-copy-10.svg"
        alt="Leaf Icon Left"
        class="leaf-right leafRight"
      />
      <img src="../assets/images/logo.svg" alt="Gomoney Logo" class="logo" />
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
        src="../assets/images/big-leaf.svg"
        alt="Leaf Icon Bottom"
        class="leaf-bottom leafBottom"
      />
      <div v-for="(detail, index) in userDetails" :key="index">
        <h2 class="hero-text__primary">
          Hi
          <b class="capitalize">{{ detail.first_name }}</b>, time to find out where all of that
          <br />money goes to every month.
        </h2>
        <h2 class="hero-text__primary-mobile">
          Hi
          <b class="capitalize">{{ detail.first_name }}</b>, time to find out where all of <br> that
          money goes to every month.
        </h2>
      </div>
      <div class="card-container">
        <!-- <div class="card-container__card-row"> -->
          <div class="card-transport transport">
            <img
              src="../assets/images/transportation-icon.svg"
              alt="Leaf Icon Left"
              class="card-img"
            />
            <p class="card-text transportText">Transport</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input transportInput"
              v-model="transport"
              @change="inputTransportationAmount()"
            />
            <p class="error errorMsgTransport">!!!</p>
          </div>
          <div class="card-transfer transfer">
            <img src="../assets/images/transfer.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text transferText">Transfer</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input transferInput"
              v-model="transfer"
              @change="inputTransferAmount()"
            />
            <p class="error errorMsgTransfer">!!!</p>
          </div>
          <div class="card-eating eating">
            <img src="../assets/images/eating.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text eatingText">Eating Out</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input eatingInput"
              v-model="eating"
              @change="inputEatingAmount()"
            />
            <p class="error errorMsgEating">!!!</p>
          </div>
          <div class="card-bills bills">
            <img src="../assets/images/bills.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text billsText">Bills</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input billsInput"
              v-model="bills"
              @change="inputBillsAmount()"
            />
            <p class="error errorMsgBills">!!!</p>
          </div>
        <!-- </div> -->
        <!-- <div class="card-container__card-row"> -->
          <div class="card-family family">
            <img src="../assets/images/family.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text familyText">Family</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input familyInput"
              v-model="family"
              @change="inputFamilyAmount()"
            />
            <p class="error errorMsgFamily">!!!</p>
          </div>
          <div class="card-groceries groceries">
            <img src="../assets/images/Groceries.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text groceriesText">Groceries</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input groceriesInput"
              v-model="groceries"
              @change="inputGroceriesAmount()"
            />
            <p class="error errorMsgGroceries">!!!</p>
          </div>
          <div class="card-shopping shopping">
            <img src="../assets/images/shopping.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text shoppingText">Shopping</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input shoppingInput"
              v-model="shopping"
              @change="inputShoppingAmount()"
            />
            <p class="error errorMsgShopping">!!!</p>
          </div>
          <div class="card-care care">
            <img src="../assets/images/personal-care.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text careText">Personal Care</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input careInput"
              v-model="care"
              @change="inputCareAmount()"
            />
            <p class="error errorMsgCare">!!!</p>
          </div>
        <!-- </div> -->
        <!-- <div class="card-container__card-row"> -->
          <div class="card-vacation vacation">
            <img src="../assets/images/vercation.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text vacationText">vacation</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input vacationInput"
              v-model="vacation"
              @change="inputVacationAmount()"
            />
            <p class="error errorMsgVacation">!!!</p>
          </div>
          <div class="card-payroll payroll">
            <img src="../assets/images/payroll.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text payrollText">Payroll</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input payrollInput"
              v-model="payroll"
              @change="inputPayrollAmount()"
            />
            <p class="error errorMsgPayroll">!!!</p>
          </div>
          <div class="card-entertainment entertainment">
            <img src="../assets/images/entertainment.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text entertainmentText">Entertainment</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input entertainmentInput"
              v-model="entertainment"
              @change="inputEntertainmentAmount()"
            />
            <p class="error errorMsgEntertainment">!!!</p>
          </div>
          <div class="card-investment investment">
            <img src="../assets/images/investment.svg" alt="Leaf Icon Left" class="card-img" />
            <p class="card-text investmentText">Investment</p>
            <input
              type="text"
              placeholder="₦.00"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='₦.00'"
              class="input investmentInput"
              v-model="investment"
              @change="inputInvestmentAmount()"
            />
            <p class="error errorMsgInvestment">!!!</p>
          </div>
        <!-- </div> -->
      </div>
      <div class="button" @click="checkHabit()">Check Your Habit!</div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  data() {
    return {
      amount: 0,
      userDetails: [],
      transport: "",
      transfer: "",
      eating: "",
      bills: "",
      family: "",
      groceries: "",
      shopping: "",
      care: "",
      vacation: "",
      payroll: "",
      entertainment: "",
      investment: ""
    };
  },
  mounted() {
    this.userDetails = JSON.parse(localStorage.getItem("user_details"));
    const tl = new TimelineMax();

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
        rotation: "-180",
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
        ease:Linear.easeNone,
        scale: "1.5", rotation: "360",
      },
      -3
    );
    TweenMax.fromTo(
      ".leafRight",
      5,
      { x: 0, y: 0, rotation: "0" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: 10,
        y: -30, rotation: "5"
      },
      -3
    );
    TweenMax.fromTo(
      ".leafLeft",
      7,
      { x: 0, y: 0 },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: -10,
        y: -30
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
    TweenMax.fromTo(
      ".leafBottom",
      20,
      { scale: "0.5" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Power2.easeInOut,
        scale: "1.2"
      },
      -3
    );

    tl.fromTo(".trackerPage", 1.5, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut})
      .fromTo(".family", 0.1, {scale: 0, ease: Power2.easeInOut}, {scale: 1, ease: Power2.easeInOut}, 0.5)
      .fromTo(".eating", 0.1, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut}, 0.6)
      .fromTo(".vacation", 0.1, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut}, 0.7)
      .fromTo(".care", 0.1, {scale: 0, ease: Power2.easeInOut}, {scale: 1, ease: Power2.easeInOut}, 0.8)
      .fromTo(".transport", 0.1, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut}, 0.9)
      .fromTo(".groceries", 0.1, {scale: 0, ease: Power2.easeInOut}, {scale: 1, ease: Power2.easeInOut}, 1)
      .fromTo(".investment", 0.1, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut}, 1.1)
      .fromTo(".bills", 0.1, {scale: 0, ease: Power2.easeInOut}, {scale: 1, ease: Power2.easeInOut}, 1.2)
      .fromTo(".transfer", 0.1, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut}, 1.3)
      .fromTo(".payroll", 0.1, {scale: 0, ease: Power2.easeInOut}, {scale: 1, ease: Power2.easeInOut}, 1.4)
      .fromTo(".entertainment", 0.1, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut}, 1.5)
      .fromTo(".shopping", 0.1, {opacity: 0, ease: Power2.easeInOut}, {opacity: 1, ease: Power2.easeInOut}, 1.6)

  },
  methods: {
    checkHabit() {
      if (isNaN(this.amount) === true) {
        alert("Please check input for error");
        return;
      } else if (this.amount === 0) {
        alert("Please input figures");
      } else {
        this.userDetails.map(details => {
          details.amount = this.amount;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        console.log(this.userDetails);
        this.$router.push("/result");
      }
    },
    inputTransportationAmount() {
      let regEx = /^[0-9]*$/gm;
      if (this.transport.length > 0 && regEx.test(this.transport) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".transport",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".transportText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".transportInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgTransport", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.transport.length > 0 &&
        regEx.test(this.transport) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".transport",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".transportText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".transportInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgTransport",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else if (this.transport.length === 0) {
        const tl = new TimelineMax();

        tl.to(
          ".transport",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".transportText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".transportInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgTransport", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputTransferAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.transfer.length > 0 && regEx.test(this.transfer) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".transfer",
          0.5,
          { backgroundColor: "#D0001B", color: "#ffffff" },
          0.1
        )
          .to(".transferText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".transferInput",
            0.5,
            { backgroundColor: "#D0001B", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgTransfer", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.transfer.length > 0 &&
        regEx.test(this.transfer) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".transfer",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".transferText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".transferInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgTransfer",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else if (this.transfer.length === 0) {
        const tl = new TimelineMax();

        tl.to(
          ".transfer",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".transferText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".transferInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgTransfer", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputEatingAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.eating.length > 0 && regEx.test(this.eating) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".eating",
          0.5,
          { backgroundColor: "#14777C", color: "#ffffff" },
          0.1
        )
          .to(".eatingText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".eatingInput",
            0.5,
            { backgroundColor: "#14777C", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgEating", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (this.eating.length > 0 && regEx.test(this.eating) === false) {
        const tl = new TimelineMax();

        tl.to(
          ".eating",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".eatingText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".eatingInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgEating",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".eating",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".eatingText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".eatingInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgEating", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputBillsAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.bills.length > 0 && regEx.test(this.bills) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".bills",
          0.5,
          { backgroundColor: "#D0001B", color: "#ffffff" },
          0.1
        )
          .to(".billsText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".billsInput",
            0.5,
            { backgroundColor: "#D0001B", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgBills", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (this.bills.length > 0 && regEx.test(this.bills) === false) {
        const tl = new TimelineMax();

        tl.to(
          ".bills",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".billsText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".billsInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgBills",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".bills",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".billsText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".billsInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgBills", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputFamilyAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.family.length > 0 && regEx.test(this.family) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".family",
          0.5,
          { backgroundColor: "#5D29DE", color: "#ffffff" },
          0.1
        )
          .to(".familyText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".familyInput",
            0.5,
            { backgroundColor: "#5D29DE", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgFamily", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (this.family.length > 0 && regEx.test(this.family) === false) {
        const tl = new TimelineMax();

        tl.to(
          ".family",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".familyText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".familyInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgFamily",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".family",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".familyText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".familyInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgFamily", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputGroceriesAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.groceries.length > 0 && regEx.test(this.groceries) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".groceries",
          0.5,
          { backgroundColor: "#14777C", color: "#ffffff" },
          0.1
        )
          .to(".groceriesText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".groceriesInput",
            0.5,
            { backgroundColor: "#14777C", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgGroceries", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.groceries.length > 0 &&
        regEx.test(this.groceries) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".groceries",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".groceriesText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".groceriesInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgGroceries",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".groceries",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".groceriesText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".groceriesInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgGroceries", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputShoppingAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.shopping.length > 0 && regEx.test(this.shopping) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".shopping",
          0.5,
          { backgroundColor: "#F1663D", color: "#ffffff" },
          0.1
        )
          .to(".shoppingText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".shoppingInput",
            0.5,
            { backgroundColor: "#F1663D", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgShopping", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.shopping.length > 0 &&
        regEx.test(this.shopping) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".shopping",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".shoppingText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".shoppingInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgShopping",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".shopping",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".shoppingText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".shoppingInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgShopping", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputCareAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.care.length > 0 && regEx.test(this.care) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".care",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".careText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".careInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgCare", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (this.care.length > 0 && regEx.test(this.care) === false) {
        const tl = new TimelineMax();

        tl.to(
          ".care",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".careText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".careInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgCare",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".care",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".careText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".careInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgCare", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputVacationAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.vacation.length > 0 && regEx.test(this.vacation) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".vacation",
          0.5,
          { backgroundColor: "#F1663D", color: "#ffffff" },
          0.1
        )
          .to(".vacationText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".vacationInput",
            0.5,
            { backgroundColor: "#F1663D", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgVacation", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.vacation.length > 0 &&
        regEx.test(this.vacation) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".vacation",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".vacationText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".vacationInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgVacation",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".vacation",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".vacationText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".vacationInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgVacation", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputPayrollAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.payroll.length > 0 && regEx.test(this.payroll) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".payroll",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".payrollText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".payrollInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgPayroll", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.payroll.length > 0 &&
        regEx.test(this.payroll) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".payroll",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".payrollText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".payrollInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgPayroll",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".payroll",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".payrollText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".payrollInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgPayroll", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputEntertainmentAmount() {
      let regEx = /^[0-9]*$/gm;

      if (
        this.entertainment.length > 0 &&
        regEx.test(this.entertainment) === true
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".entertainment",
          0.5,
          { backgroundColor: "#5D29DE", color: "#ffffff" },
          0.1
        )
          .to(".entertainmentText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".entertainmentInput",
            0.5,
            { backgroundColor: "#5D29DE", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgEntertainment", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.entertainment.length > 0 &&
        regEx.test(this.entertainment) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".entertainment",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".entertainmentText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".entertainmentInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgEntertainment",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".entertainment",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".entertainmentText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".entertainmentInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgEntertainment", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputInvestmentAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.investment.length > 0 && regEx.test(this.investment) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".investment",
          0.5,
          { backgroundColor: "#14777C", color: "#ffffff" },
          0.1
        )
          .to(".investmentText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".investmentInput",
            0.5,
            { backgroundColor: "#14777C", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgInvestment", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      } else if (
        this.investment.length > 0 &&
        regEx.test(this.investment) === false
      ) {
        const tl = new TimelineMax();

        tl.to(
          ".investment",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".investmentText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".investmentInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgInvestment",
          0.5,
          { color: "red" },
          {
            color: "white",
            repeat: -1,
            yoyo: false,
            repeatDelay: 0.4,
            display: "flex"
          }
        );
        this.inputAmount();
      } else {
        const tl = new TimelineMax();

        tl.to(
          ".investment",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".investmentText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".investmentInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(".errorMsgInvestment", 0.5, { display: "none" }, 0.1);
        this.inputAmount();
      }
    },
    inputAmount() {
      this.amount =
        Number(this.transport) +
        Number(this.transfer) +
        Number(this.eating) +
        Number(this.bills) +
        Number(this.family) +
        Number(this.groceries) +
        Number(this.shopping) +
        Number(this.care) +
        Number(this.vacation) +
        Number(this.payroll) +
        Number(this.entertainment) +
        Number(this.investment);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";
</style>
