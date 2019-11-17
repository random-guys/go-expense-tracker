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
          Hi <b class="capitalize">{{ detail.first_name }}</b>, time to find out where all of that money goes to every month.
        </h2>
      </div>
      <!-- <div class="break"></div> -->
      <div class="card-container">
        <!-- <div class="card-container__card-row"> -->
        <div class="card-transport transport">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/transportation-icon.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text transportText">Transport</p>
          <input
            ref="refTransport"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input transportInput"
            v-model="transport"
            @change="inputTransportationAmount()"
          />
          <p class="error errorMsgTransport">!!!</p>
        </div>
        <div class="card-transfer transfer">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/transfer.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text transferText">Transfer</p>
          <input
            ref="refTransfer"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input transferInput"
            v-model="transfer"
            @change="inputTransferAmount()"
          />
          <p class="error errorMsgTransfer">!!!</p>
        </div>
        <div class="card-eating eating">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/eating.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text eatingText">Eating Out</p>
          <input
            ref="refEating"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input eatingInput"
            v-model="eating"
            @change="inputEatingAmount()"
          />
          <p class="error errorMsgEating">!!!</p>
        </div>
        <div class="card-bills bills">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/bills.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text billsText">Bills</p>
          <input
          ref="refBills"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input billsInput"
            v-model="bills"
            @change="inputBillsAmount()"
          />
          <p class="error errorMsgBills">!!!</p>
        </div>
        <!-- </div> -->
        <!-- <div class="card-container__card-row"> -->
        <div class="card-family family">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/family.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text familyText">Family</p>
          <input
            ref="refFamily"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input familyInput"
            v-model="family"
            @change="inputFamilyAmount()"
          />
          <p class="error errorMsgFamily">!!!</p>
        </div>
        <div class="card-groceries groceries">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/Groceries.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text groceriesText">Groceries</p>
          <input
            ref="refGroceries"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input groceriesInput"
            v-model="groceries"
            @change="inputGroceriesAmount()"
          />
          <p class="error errorMsgGroceries">!!!</p>
        </div>
        <div class="card-shopping shopping">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/shopping.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text shoppingText">Shopping</p>
          <input
            ref="refShopping"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input shoppingInput"
            v-model="shopping"
            @change="inputShoppingAmount()"
          />
          <p class="error errorMsgShopping">!!!</p>
        </div>
        <div class="card-care care">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/personal-care.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text careText">Personal Care</p>
          <input
            ref="refCare"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input careInput"
            v-model="care"
            @change="inputCareAmount()"
          />
          <p class="error errorMsgCare">!!!</p>
        </div>
        <!-- </div> -->
        <!-- <div class="card-container__card-row"> -->
        <div class="card-vacation vacation">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/vercation.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text vacationText">vacation</p>
          <input
            ref="refVacation"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input vacationInput"
            v-model="vacation"
            @change="inputVacationAmount()"
          />
          <p class="error errorMsgVacation">!!!</p>
        </div>
        <div class="card-payroll payroll">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/payroll.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text payrollText">Payroll</p>
          <input
          ref="refPayroll"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input payrollInput"
            v-model="payroll"
            @change="inputPayrollAmount()"
          />
          <p class="error errorMsgPayroll">!!!</p>
        </div>
        <div class="card-entertainment entertainment">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/entertainment.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text entertainmentText">Entertainment</p>
          <input
          ref="refEntertainment"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input entertainmentInput"
            v-model="entertainment"
            @change="inputEntertainmentAmount()"
          />
          <p class="error errorMsgEntertainment">!!!</p>
        </div>
        <div class="card-investment investment">
          <input type="radio" name="" value="" class="radio">
          <img src="../assets/images/investment.svg" alt="Leaf Icon Left" class="card-img" />
          <p class="card-text investmentText">Investment</p>
          <input
            ref="refInvestment"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input investmentInput"
            v-model="investment"
            @change="inputInvestmentAmount()"
          />
          <p class="error errorMsgInvestment">!!!</p>
        </div>
        <!-- </div> -->
      </div>
      <div ref="refButton" class="button btn" @click="checkHabit()">Check Your Habit!</div>
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
      amountTracker: [],
      maxExpense: [],
      max: 0,
      transport: "",
      inputTransport: "",
      transfer: "",
      inputTransfer: "",
      eating: "",
      inputEating: "",
      bills: "",
      inputBills: "",
      family: "",
      inputFamily: "",
      groceries: "",
      inputGroceries: "",
      shopping: "",
      inputShopping: "",
      care: "",
      inputCare: "",
      vacation: "",
      inputVacation: "",
      payroll: "",
      inputPayroll: "",
      entertainment: "",
      inputEntertainment: "",
      investment: "",
      inputInvestment: ""
    };
  },
  mounted() {
    this.initialTrackerDetails()
    window.scrollTo(0,0);
    // this.handleScroll()

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
      ".leafRight",
      5,
      { x: 0, y: 0, rotation: "0" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: 10,
        y: -30,
        rotation: "5"
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
        rotation: "5"
      },
      -3
    );
    TweenMax.fromTo(
      ".leafBottom",
      5,
      {  scale: "0.8" },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Elastic.easeInOut.config(2, 2),
        rotation: "5",
        scale: "1"
      },
      -3
    );

    tl.fromTo(
      ".trackerPage",
      1.5,
      { opacity: 0, ease: Power2.easeInOut },
      { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut }
    )
      .fromTo(
        ".family",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        0.5
      )
      .fromTo(
        ".eating",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        0.6
      )
      .fromTo(
        ".vacation",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        0.7
      )
      .fromTo(
        ".care",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        0.8
      )
      .fromTo(
        ".transport",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        0.9
      )
      .fromTo(
        ".groceries",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        1
      )
      .fromTo(
        ".investment",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        1.1
      )
      .fromTo(
        ".bills",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        1.2
      )
      .fromTo(
        ".transfer",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        1.3
      )
      .fromTo(
        ".payroll",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        1.4
      )
      .fromTo(
        ".entertainment",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        1.5
      )
      .fromTo(
        ".shopping",
        0.1,
        { opacity: 0, ease: Power2.easeInOut },
        { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut },
        1.6
      );
    // this.btnDisable()
  },
  methods: {
    handleScroll() {
      window.scrollTo(0,0);

      const crlt = new ScrollMagic.Controller()
      let tml = new TimelineMax()
      tml.to(".card-transport", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)
         .to(".card-transfer", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)
         .to(".card-eating", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)
         .to(".card-bills", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)

      const scene = new ScrollMagic.Scene({
        triggerElement: ".hero-text__primary",
        // triggerHook: "onEnter",//onEnter
        // offSet: "5px",
        duration: "10%"
      })
        // .setPin(".hero-text__primary")
        .setTween(tml)
          .addTo(crlt)

          
      const crlt2 = new ScrollMagic.Controller()
      let tml2 = new TimelineMax()
      tml2.to(".card-family", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)
         .to(".card-groceries", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)
         .to(".card-shopping", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)
         .to(".card-care", 0.1, {opacity: 1, pointerEvents: "visible"}, 0.1)

      const scene2 = new ScrollMagic.Scene({
        triggerElement: ".hero-text__primary",
        // triggerHook: "onEnter",//onEnter
        // offSet: "500px",
        duration: "45%"
      })
        // .setPin(".hero-text__primary")
        .setTween(tml2)
          .addTo(crlt2)

    },
    initialTrackerDetails() {
        this.amountTracker = [];
        let trackerObject = {
          transport: this.inputTransport,
          transfer: this.inputTransfer,
          eating: this.inputEating,
          bills: this.inputBills,
          family: this.inputFamily,
          groceries: this.inputGroceries,
          shopping: this.inputShopping,
          care: this.inputCare,
          vacation: this.inputVacation,
          payroll: this.inputPayroll,
          entertainment: this.inputEntertainment,
          investment: this.inputInvestment
        };
        this.amountTracker.push(trackerObject);
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));

    },
    checkHabit() {
      if (isNaN(this.amount) === true) {
        this.$swal.fire({
          type: "info",
          html: `Input error(Numbers only)`
        });
        return;
      } else if (this.amount === 0) {
        this.$swal.fire({
          type: "info",
          html: `Please enter amount(Numbers only)`
        });
      } else {
        this.max = Math.max.apply(Math, this.maxExpense.map(function(o) { return o.amount; }))
        
            if(this.inputTransport == this.max){
              this.userDetails.map(details => {
                details.key = "transport",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputTransfer == this.max){
              this.userDetails.map(details => {
                details.key = "transfer",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputEating == this.max){
              this.userDetails.map(details => {
                details.key = "eating",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputBills == this.max){
              this.userDetails.map(details => {
                details.key = "bills",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputFamily == this.max){
              this.userDetails.map(details => {
                details.key = "family",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputGroceries == this.max){
              this.userDetails.map(details => {
                details.key = "groceries",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputShopping == this.max){
              this.userDetails.map(details => {
                details.key = "shopping",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputCare == this.max){
              this.userDetails.map(details => {
                details.key = "care",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputVacation == this.max){
              this.userDetails.map(details => {
                details.key = "vacation",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputPayroll == this.max){
              this.userDetails.map(details => {
                details.key = "payroll",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputEntertainment == this.max){
              this.userDetails.map(details => {
                details.key = "entertainment",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
            if(this.inputInvestment == this.max){
              this.userDetails.map(details => {
                details.key = "investment",
                details.highest_expense = this.max
              })
              localStorage.setItem("user_details", JSON.stringify(this.userDetails));
            }
        this.userDetails.map(details => {
          details.amount = this.amount;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        this.$router.push("/result");
      }
    },
    inputTransportationAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
      // this.amountTracker = JSON.parse(localStorage.getItem("amount_tracker"));
        if(this.transport.charAt(0) === "N"){
          this.transport = this.transport.substr(1)
        }

      if (this.transport.length > 0 && regEx.test(this.transport) === true) {
        this.inputTransport = event.target.value
        if(this.inputTransport.charAt(0) === "N"){
          this.inputTransport = this.inputTransport.substr(1)
        }

        this.transport =  `N${this.inputTransport}`
        this.amountTracker.map(amount => {
          amount.transport = this.inputTransport
        })

          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "transport",
              amount: this.inputTransport
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "transport"){
                obj.amount = this.inputTransport
              }else{
                let eachExpense = {
                  key: "transport",
                  amount: this.inputTransport
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refTransfer.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.transport.length > 0 &&
        regEx.test(this.transport) === false
      ) {
        this.inputTransport = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else if (this.transport.length === 0) {
        this.amountTracker.map(amount => {
          amount.transport = 0
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "transport",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "transport"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refTransfer.focus()

        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));

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
        // this.btnDisable() 
        this.inputAmount();
      }
    },
    inputTransferAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.transfer.charAt(0) === "N"){
          this.transfer = this.transfer.substr(1)
        }
      if (this.transfer.length > 0 && regEx.test(this.transfer) === true) {
        this.inputTransfer = event.target.value
        if(this.inputTransfer.charAt(0) === "N"){
          this.inputTransfer = this.inputTransfer.substr(1)
        }
        this.transfer =  `N${this.inputTransfer}`
        this.amountTracker.map(amount => {
          amount.transfer = this.inputTransfer
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "transfer",
              amount: this.inputTransfer
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "transfer"){
                obj.amount = this.inputTransfer
              }
              else{
                let eachExpense = {
                  key: "transfer",
                  amount: this.inputTransfer
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refEating.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.transfer.length > 0 &&
        regEx.test(this.transfer) === false
      ) {
        this.inputTransfer = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else if (this.transfer.length === 0) {
        this.amountTracker.map(amount => {
          amount.transfer = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "transfer",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "transfer"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refTransfer.focus()

        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputEatingAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.eating.charAt(0) === "N"){
          this.eating = this.eating.substr(1)
        }
      if (this.eating.length > 0 && regEx.test(this.eating) === true) {
        this.inputEating = event.target.value
        if(this.inputEating.charAt(0) === "N"){
          this.inputEating = this.inputEating.substr(1)
        }
        this.eating =  `N${this.inputEating}`
        this.amountTracker.map(amount => {
          amount.eating = this.inputEating
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "eating",
              amount: this.inputEating
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "eating"){
                obj.amount = this.inputEating
              }
              else{
                let eachExpense = {
                  key: "eating",
                  amount: this.inputEating
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refBills.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.eating.length > 0 && regEx.test(this.eating) === false) {
        this.inputEating = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.eating = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "eating",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "eating"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refBills.focus()

        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputBillsAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.bills.charAt(0) === "N"){
          this.bills = this.bills.substr(1)
        }
      if (this.bills.length > 0 && regEx.test(this.bills) === true) {
        this.inputBills = event.target.value
        if(this.inputBills.charAt(0) === "N"){
          this.inputBills = this.inputBills.substr(1)
        }
        this.bills =  `N${this.inputBills}`
        this.amountTracker.map(amount => {
          amount.bills = this.inputBills
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "bills",
              amount: this.inputBills
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "bills"){
                obj.amount = this.inputBills
              }
              else{
                let eachExpense = {
                  key: "bills",
                  amount: this.inputBills
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refFamily.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.bills.length > 0 && regEx.test(this.bills) === false) {
        this.inputBills = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.bills = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "bills",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "bills"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refFamily.focus()
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputFamilyAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.family.charAt(0) === "N"){
          this.family = this.family.substr(1)
        }
      if (this.family.length > 0 && regEx.test(this.family) === true) {
        this.inputFamily = event.target.value
                if(this.inputFamily.charAt(0) === "N"){
          this.inputFamily = this.inputFamily.substr(1)
        }
        this.family =  `N${this.inputFamily}`
        this.amountTracker.map(amount => {
          amount.family = this.inputFamily
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "family",
              amount: this.inputFamily
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "family"){
                obj.amount = this.inputFamily
              }else{
                let eachExpense = {
                  key: "family",
                  amount: this.inputFamily
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refGroceries.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.family.length > 0 && regEx.test(this.family) === false) {
        this.inputFamily = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.family = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "family",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "family"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refGroceries.focus()

        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputGroceriesAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.groceries.charAt(0) === "N"){
          this.groceries = this.groceries.substr(1)
        }
      if (this.groceries.length > 0 && regEx.test(this.groceries) === true) {
        this.inputGroceries = event.target.value
                if(this.inputGroceries.charAt(0) === "N"){
          this.inputGroceries = this.inputGroceries.substr(1)
        }
        this.groceries =  `N${this.inputGroceries}`
        this.amountTracker.map(amount => {
          amount.groceries = this.inputGroceries
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "groceries",
              amount: this.inputGroceries
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "groceries"){
                obj.amount = this.inputGroceries
              }else{
                let eachExpense = {
                  key: "groceries",
                  amount: this.inputGroceries
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refShopping.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.groceries.length > 0 &&
        regEx.test(this.groceries) === false
      ) {
        this.inputGroceries = event.target.value

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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.groceries = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "groceries",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "groceries"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refShopping.focus()
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputShoppingAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.shopping.charAt(0) === "N"){
          this.shopping = this.shopping.substr(1)
        }
      if (this.shopping.length > 0 && regEx.test(this.shopping) === true) {
        this.inputShopping = event.target.value
                if(this.inputShopping.charAt(0) === "N"){
          this.inputShopping = this.inputShopping.substr(1)
        }
        this.shopping =  `N${this.inputShopping}`
        this.amountTracker.map(amount => {
          amount.shopping = this.inputShopping
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "shopping",
              amount: this.inputShopping
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "shopping"){
                obj.amount = this.inputShopping
              }else{
                let eachExpense = {
                  key: "shopping",
                  amount: this.inputShopping
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refCare.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.shopping.length > 0 &&
        regEx.test(this.shopping) === false
      ) {
        this.inputShopping = event.target.value

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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.shopping = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "shopping",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "shopping"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refCare.focus()

        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputCareAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.care.charAt(0) === "N"){
          this.care = this.care.substr(1)
        }
      if (this.care.length > 0 && regEx.test(this.care) === true) {
        this.inputCare = event.target.value
                if(this.inputCare.charAt(0) === "N"){
          this.inputCare = this.inputCare.substr(1)
        }
        this.care =  `N${this.inputCare}`
        this.amountTracker.map(amount => {
          amount.care = this.inputCare
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "care",
              amount: this.inputCare
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "care"){
                obj.amount = this.inputCare
              }else{
                let eachExpense = {
                  key: "care",
                  amount: this.inputCare
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refVacation.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.care.length > 0 && regEx.test(this.care) === false) {
        this.inputCare = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.care = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "care",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "care"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refVacation.focus()
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputVacationAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.vacation.charAt(0) === "N"){
          this.vacation = this.vacation.substr(1)
        }
      if (this.vacation.length > 0 && regEx.test(this.vacation) === true) {
        this.inputVacation = event.target.value
                if(this.inputVacation.charAt(0) === "N"){
          this.inputVacation = this.inputVacation.substr(1)
        }
        this.vacation =  `N${this.inputVacation}`
        this.amountTracker.map(amount => {
          amount.vacation = this.inputVacation
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "vacation",
              amount: this.inputVacation
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "vacation"){
                obj.amount = this.inputVacation
              }else{
                let eachExpense = {
                  key: "vacation",
                  amount: this.inputVacation
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refPayroll.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.vacation.length > 0 &&
        regEx.test(this.vacation) === false
      ) {
        this.inputVacation = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.vacation = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "vacation",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "vacation"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refPayroll.focus()
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputPayrollAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.payroll.charAt(0) === "N"){
          this.payroll = this.payroll.substr(1)
        }
      if (this.payroll.length > 0 && regEx.test(this.payroll) === true) {
        this.inputPayroll = event.target.value
                if(this.inputPayroll.charAt(0) === "N"){
          this.inputPayroll = this.inputPayroll.substr(1)
        }
        this.payroll =  `N${this.inputPayroll}`
        this.amountTracker.map(amount => {
          amount.payroll = this.inputPayroll
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "payroll",
              amount: this.inputPayroll
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "payroll"){
                obj.amount = this.inputPayroll
              }else{
                let eachExpense = {
                  key: "payroll",
                  amount: this.inputPayroll
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refEntertainment.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.payroll.length > 0 &&
        regEx.test(this.payroll) === false
      ) {
        this.inputPayroll = event.target.value

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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.payroll = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "payroll",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "payroll"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        this.$refs.refEntertainment.focus()
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputEntertainmentAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.entertainment.charAt(0) === "N"){
          this.entertainment = this.entertainment.substr(1)
        }
      if (
        this.entertainment.length > 0 &&
        regEx.test(this.entertainment) === true
      ) {
        this.inputEntertainment = event.target.value
                if(this.inputEntertainment.charAt(0) === "N"){
          this.inputEntertainment = this.inputEntertainment.substr(1)
        }
        this.entertainment =  `N${this.inputEntertainment}`
        this.amountTracker.map(amount => {
          amount.entertainment = this.inputEntertainment
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "entertainment",
              amount: this.inputEntertainment
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "entertainment"){
                obj.amount = this.inputEntertainment
              }else{
                let eachExpense = {
                  key: "entertainment",
                  amount: this.inputEntertainment
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refInvestment.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.entertainment.length > 0 &&
        regEx.test(this.entertainment) === false
      ) {
        this.inputEntertainment = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.entertainment = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "entertainment",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "entertainment"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        this.$refs.refInvestment.focus()
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputInvestmentAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails()
        if(this.investment.charAt(0) === "N"){
          this.investment = this.investment.substr(1)
        }
      if (this.investment.length > 0 && regEx.test(this.investment) === true) {
        this.inputInvestment = event.target.value
                if(this.inputInvestment.charAt(0) === "N"){
          this.inputInvestment = this.inputInvestment.substr(1)
        }
        this.investment =  `N${this.inputInvestment}`
        this.amountTracker.map(amount => {
          amount.investment = this.inputInvestment
        })
          if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "investment",
              amount: this.inputInvestment
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "investment"){
                obj.amount = this.inputInvestment
              }else{
                let eachExpense = {
                  key: "investment",
                  amount: this.inputInvestment
                }
                this.maxExpense.push(eachExpense)
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
        // this.$refs.refButton.focus()
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
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.investment.length > 0 &&
        regEx.test(this.investment) === false
      ) {
        this.inputInvestment = event.target.value
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
        // this.btnDisable()
        this.inputAmount();
      } else {
        this.amountTracker.map(amount => {
          amount.investment = 0
        })
        if(this.maxExpense.length === 0){
            let eachExpense = {
              key: "investment",
              amount: 0
            }
            this.maxExpense.push(eachExpense)
          }else{
            this.maxExpense.map(obj => {
              if(obj.key === "investment"){
                obj.amount = 0
              }
            })
          }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refButton.focus()
        localStorage.setItem("amount_tracker", JSON.stringify(this.amountTracker));
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
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputAmount() {

      this.amount =
        Number(this.inputTransport) +
        Number(this.inputTransfer) +
        Number(this.inputEating) +
        Number(this.inputBills) +
        Number(this.inputFamily) +
        Number(this.inputGroceries) +
        Number(this.inputShopping) +
        Number(this.inputCare) +
        Number(this.inputVacation) +
        Number(this.inputPayroll) +
        Number(this.inputEntertainment) +
        Number(this.inputInvestment);
        
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";
</style>
