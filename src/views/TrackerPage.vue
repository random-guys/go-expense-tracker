<template>
  <div id="app" class="main">
    <img src="../assets/images/group-copy-12.svg" alt="Leaf Icon Left" class="Icon--1" />
    <img src="../assets/images/group-copy-11.svg" alt="Leaf Icon Left" class="Icon--2" />
    <img src="../assets/images/group-copy-10.svg" alt="Leaf Icon Left" class="Icon--3" />
    <img src="../assets/images/vector-shapes-1.svg" alt="Morph Icon Left" class="Icon--4" />
    <img src="../assets/images/vector-shapes-2.svg" alt="Morph Icon Right" class="Icon--5" />
    <img src="../assets/images/logo.svg" alt="Gomoney Logo" class="logo" />
    <img src="../assets/images/big-leaf.svg" alt="Leaf Icon Bottom" class="Icon--6" />
    <div v-for="(detail, index) in userDetails" :key="index">
      <h2 class="hero-text__primary">
        Hi
        <b class="capitalize">{{ detail.first_name }}</b>, time to find out where all of that money goes to every month.
      </h2>
    </div>
    <div class="card-container">
      <div class="card-container__card-row">
        <div class="card1 transport">
          <img src="../assets/images/transportation-icon.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text transportText">Transport</p>
          <input
            type="text"
            placeholder="N.00"
            class="input transportInput"
            v-model="transport"
            @change="inputTransportationAmount()"
          />
          <p class="error errorMsgTransport">!!!</p>
        </div>
        <div class="card2 transfer">
          <img src="../assets/images/transfer.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text transferText">Transfer</p>
          <input
            type="text"
            placeholder="N.00"
            class="input transferInput"
            v-model="transfer"
            @change="inputTransferAmount()"
          />
          <p class="error errorMsgTransfer">!!!</p>
        </div>
        <div class="card3 eating">
          <img src="../assets/images/eating.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text eatingText">Eating Out</p>
          <input
            type="text"
            placeholder="N.00"
            class="input eatingInput"
            v-model="eating"
            @change="inputEatingAmount()"
          />
          <p class="error errorMsgEating">!!!</p>
        </div>
        <div class="card4 bills">
          <img src="../assets/images/bills.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text billsText">Bills</p>
          <input
            type="text"
            placeholder="N.00"
            class="input billsInput"
            v-model="bills"
            @change="inputBillsAmount()"
          />
          <p class="error errorMsgBills">!!!</p>
        </div>
      </div>
      <div class="card-container__card-row">
        <div class="card1 family">
          <img src="../assets/images/family.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text familyText">Family</p>
          <input
            type="text"
            placeholder="N.00"
            class="input familyInput"
            v-model="family"
            @change="inputFamilyAmount()"
          />
          <p class="error errorMsgFamily">!!!</p>
        </div>
        <div class="card2 groceries">
          <img src="../assets/images/Groceries.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text groceriesText">Groceries</p>
          <input
            type="text"
            placeholder="N.00"
            class="input groceriesInput"
            v-model="groceries"
            @change="inputGroceriesAmount()"
          />
          <p class="error errorMsgGroceries">!!!</p>
        </div>
        <div class="card3 shopping">
          <img src="../assets/images/shopping.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text shoppingText">Shopping</p>
          <input
            type="text"
            placeholder="N.00"
            class="input shoppingInput"
            v-model="shopping"
            @change="inputShoppingAmount()"
          />
          <p class="error errorMsgShopping">!!!</p>
        </div>
        <div class="card4 care">
          <img src="../assets/images/personal-care.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text careText">Personal Care</p>
          <input
            type="text"
            placeholder="N.00"
            class="input careInput"
            v-model="care"
            @change="inputCareAmount()"
          />
          <p class="error errorMsgCare">!!!</p>
        </div>
      </div>
      <div class="card-container__card-row">
        <div class="card1 vacation">
          <img src="../assets/images/vercation.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text vacationText">vacation</p>
          <input
            type="text"
            placeholder="N.00"
            class="input vacationInput"
            v-model="vacation"
            @change="inputVacationAmount()"
          />
          <p class="error errorMsgVacation">!!!</p>
        </div>
        <div class="card2 payroll">
          <img src="../assets/images/payroll.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text payrollText">Payroll</p>
          <input
            type="text"
            placeholder="N.00"
            class="input payrollInput"
            v-model="payroll"
            @change="inputPayrollAmount()"
          />
          <p class="error errorMsgPayroll">!!!</p>
        </div>
        <div class="card3 entertainment">
          <img src="../assets/images/entertainment.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text entertainmentText">Entertainment</p>
          <input
            type="text"
            placeholder="N.00"
            class="input entertainmentInput"
            v-model="entertainment"
            @change="inputEntertainmentAmount()"
          />
          <p class="error errorMsgEntertainment">!!!</p>
        </div>
        <div class="card4 investment">
          <img src="../assets/images/investment.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text investmentText">Investment</p>
          <input
            type="text"
            placeholder="N.00"
            class="input investmentInput"
            v-model="investment"
            @change="inputInvestmentAmount()"
          />
          <p class="error errorMsgInvestment">!!!</p>
        </div>
      </div>
    </div>
    <div class="button" @click="checkHabit()">Check Your Habit!</div>
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
  },
  methods: {
    checkHabit() {
      if (isNaN(this.amount) === true) {
        alert("Please check input for error");
        return;
      } else if (this.amount === 0) {
        alert("Please input figures");
      } else {
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
          this.inputAmount()
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
          )
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
        this.inputAmount()
      } else if(this.transport.length === 0) {
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
          this.inputAmount()
      }
    },
    inputTransferAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.transfer.length > 0 && regEx.test(this.transfer) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".transfer",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".transferText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".transferInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgTransfer", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
      } else if(this.transfer.length === 0) {
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
          this.inputAmount()
      }
    },
    inputEatingAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.eating.length > 0 && regEx.test(this.eating) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".eating",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".eatingText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".eatingInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgEating", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
      }
    },
    inputBillsAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.bills.length > 0 && regEx.test(this.bills) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".bills",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".billsText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".billsInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgBills", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
      }
    },
    inputFamilyAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.family.length > 0 && regEx.test(this.family) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".family",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".familyText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".familyInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgFamily", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
      }
    },
    inputGroceriesAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.groceries.length > 0 && regEx.test(this.groceries) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".groceries",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".groceriesText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".groceriesInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgGroceries", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
      }
    },
    inputShoppingAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.shopping.length > 0 && regEx.test(this.shopping) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".shopping",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".shoppingText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".shoppingInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgShopping", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
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
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
      }
    },
    inputVacationAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.vacation.length > 0 && regEx.test(this.vacation) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".vacation",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".vacationText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".vacationInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgVacation", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
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
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
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
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".entertainmentText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".entertainmentInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgEntertainment", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
      }
    },
    inputInvestmentAmount() {
      let regEx = /^[0-9]*$/gm;

      if (this.investment.length > 0 && regEx.test(this.investment) === true) {
        const tl = new TimelineMax();

        tl.to(
          ".investment",
          0.5,
          { backgroundColor: "#1b5ece", color: "#ffffff" },
          0.1
        )
          .to(".investmentText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".investmentInput",
            0.5,
            { backgroundColor: "#1b5ece", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgInvestment", 0.5, { display: "none" }, 0.1);
          this.inputAmount()
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
          )
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
        this.inputAmount()
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
          this.inputAmount()
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
    position: absolute;
    top: 25rem;
    left: 0;
  }
  &--5 {
    position: absolute;
    top: 0;
    right: 0;
  }

  &--6 {
    position: absolute;
    top: 18rem;
    left: auto;
    width: 127.4rem;
    height: 80.9rem;
    object-fit: contain;
    // transform: rotate(-40deg);
    // opacity: 0.05;
  }
}

.hero-text {
  &__primary {
    width: 100%;
    height: 75px;
    font-family: Graphik;
    font-size: 29px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: center;
    color: $color-text;
    padding: 0 50rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
}

.button {
  width: 20.5rem;
  height: 5.3rem;
  opacity: 0.5;
  border-radius: 5px;
  background-color: #f47079;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
  font-family: Graphik;
  font-size: 17.1px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  padding: 2rem 0;
  cursor: pointer;
}

.card-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50rem;
  margin-bottom: 5.2rem;

  &__card-row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    .card1,
    .card2,
    .card3,
    .card4 {
      width: 100%;
      height: 50%;
      padding: 1rem 1rem;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background-color: #ffffff;

      ::placeholder {
        opacity: 0.48;
        font-family: Graphik;
        font-size: 24px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.58px;
        text-align: center;
        color: #252525;
      }

      :focus {
        outline: none;
      }

      .card-img {
        width: 50%;
        margin-top: 1rem;
      }

      .error {
        display: none;
        color: red;
        // font-size: 1rem;
      }

      .card-text {
        width: 100%;
        margin-top: 0.5rem;
        font-family: SFProDisplay;
        font-size: 1.2rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.41px;
        text-align: center;
        color: #3a3737;
      }

      .input {
        width: 10rem;
        height: 3rem;
        font-size: 2rem;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 0.8rem;
        border: none;
        border-radius: 3px;
        background-color: #f1f1f1;
      }
    }

    .card1,
    .card2,
    .card3 {
      margin-right: 4rem;
    }
  }
}
</style>
