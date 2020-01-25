<template>
  <div id="app" class="main">
    <div class="tracker-page trackerPage">
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
      <img src="../assets/images/logo.svg" alt="Gomoney Logo" class="logo" />
      <img
        src="../assets/images/vector-shapes-1.svg"
        alt="Expense tracker Morph Icon For GoMoney Nigeria"
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
        src="../assets/images/big-leaf.svg"
        alt="Expense tracker Leaf Icon For GoMoney Nigeria"
        class="leaf-bottom leafBottom"
      />
      <img
        src="../assets/images/big-leaf.svg"
        alt="Expense tracker Leaf Icon For GoMoney Nigeria"
        class="leaf-bottom-desktop leafBottomDesktop"
      />
      <div v-for="(detail, index) in userDetails" :key="index">
        <h2 class="hero-text__primary">
          Hi <b class="capitalize">{{ detail.first_name }}</b
          >, time to find out where all of that money goes to every month.
        </h2>
      </div>
      <!-- <div class="break"></div> -->
      <div class="card-container">
        <div class="card-transport transport">
          <span
            class="radio opacity-zero transportRadio"
            @click="resetCards('transport')"
            >&#215;</span
          >
          <img
            src="../assets/images/transportation-icon.svg"
            alt="Expense tracker Transportation Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text transportText">Transport</p>
          <input
            ref="refTransport"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input transportInput"
            v-model="transport"
            @keypress="isNumberKey()"
            @change="inputTransportationAmount()"
          />
          <p class="error errorMsgtransport">!!!</p>
        </div>
        <div class="card-transfer transfer">
          <span
            class="radio opacity-zero transferRadio"
            @click="resetCards('transfer')"
            >&#215;</span
          >
          <img
            src="../assets/images/transfer.svg"
            alt="Expense tracker Transfer Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text transferText">Transfer</p>
          <input
            ref="refTransfer"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input transferInput"
            v-model="transfer"
            @keypress="isNumberKey()"
            @change="inputTransferAmount()"
          />
          <p class="error errorMsgtransfer">!!!</p>
        </div>
        <div class="card-eating eating">
          <span
            class="radio opacity-zero eatingRadio"
            @click="resetCards('eating')"
            >&#215;</span
          >
          <img
            src="../assets/images/eating.svg"
            alt="Expense tracker Eating Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text eatingText">Eating Out</p>
          <input
            ref="refEating"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input eatingInput"
            v-model="eating"
            @keypress="isNumberKey()"
            @change="inputEatingAmount()"
          />
          <p class="error errorMsgeating">!!!</p>
        </div>
        <div class="card-bills bills">
          <span
            class="radio opacity-zero billsRadio"
            @click="resetCards('bills')"
            >&#215;</span
          >
          <img
            src="../assets/images/bills.svg"
            alt="Expense tracker Bills Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text billsText">Bills</p>
          <input
            ref="refBills"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input billsInput"
            v-model="bills"
            @keypress="isNumberKey()"
            @change="inputBillsAmount()"
          />
          <p class="error errorMsgbills">!!!</p>
        </div>
        <div class="card-family family">
          <span
            class="radio opacity-zero familyRadio"
            @click="resetCards('family')"
            >&#215;</span
          >
          <img
            src="../assets/images/family.svg"
            alt="Expense tracker Family Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text familyText">Family</p>
          <input
            ref="refFamily"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input familyInput"
            v-model="family"
            @keypress="isNumberKey()"
            @change="inputFamilyAmount()"
          />
          <p class="error errorMsgfamily">!!!</p>
        </div>
        <div class="card-groceries groceries">
          <span
            class="radio opacity-zero groceriesRadio"
            @click="resetCards('groceries')"
            >&#215;</span
          >
          <img
            src="../assets/images/Groceries.svg"
            alt="Expense tracker Groceries Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text groceriesText">Groceries</p>
          <input
            ref="refGroceries"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input groceriesInput"
            v-model="groceries"
            @keypress="isNumberKey()"
            @change="inputGroceriesAmount()"
          />
          <p class="error errorMsggroceries">!!!</p>
        </div>
        <div class="card-shopping shopping">
          <span
            class="radio opacity-zero shoppingRadio"
            @click="resetCards('shopping')"
            >&#215;</span
          >
          <img
            src="../assets/images/shopping.svg"
            alt="Expense tracker Shopping Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text shoppingText">Shopping</p>
          <input
            ref="refShopping"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input shoppingInput"
            v-model="shopping"
            @keypress="isNumberKey()"
            @change="inputShoppingAmount()"
          />
          <p class="error errorMsgshopping">!!!</p>
        </div>
        <div class="card-care care">
          <span class="radio opacity-zero careRadio" @click="resetCards('care')"
            >&#215;</span
          >
          <img
            src="../assets/images/personal-care.svg"
            alt="Expense tracker Parsonal Care Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text careText">Personal Care</p>
          <input
            ref="refCare"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input careInput"
            v-model="care"
            @keypress="isNumberKey()"
            @change="inputCareAmount()"
          />
          <p class="error errorMsgcare">!!!</p>
        </div>
        <div class="card-vacation vacation">
          <span
            class="radio opacity-zero vacationRadio"
            @click="resetCards('vacation')"
            >&#215;</span
          >
          <img
            src="../assets/images/vercation.svg"
            alt="Expense tracker Vercation Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text vacationText">Vacation</p>
          <input
            ref="refVacation"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input vacationInput"
            v-model="vacation"
            @keypress="isNumberKey()"
            @change="inputVacationAmount()"
          />
          <p class="error errorMsgvacation">!!!</p>
        </div>
        <div class="card-payroll payroll">
          <span
            class="radio opacity-zero payrollRadio"
            @click="resetCards('payroll')"
            >&#215;</span
          >
          <img
            src="../assets/images/payroll.svg"
            alt="Expense tracker Payroll Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text payrollText">Payroll</p>
          <input
            ref="refPayroll"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input payrollInput"
            v-model="payroll"
            @keypress="isNumberKey()"
            @change="inputPayrollAmount()"
          />
          <p class="error errorMsgpayroll">!!!</p>
        </div>
        <div class="card-entertainment entertainment">
          <span
            class="radio opacity-zero entertainmentRadio"
            @click="resetCards('entertainment')"
            >&#215;</span
          >
          <img
            src="../assets/images/entertainment.svg"
            alt="Expense tracker Entertainment Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text entertainmentText">Entertainment</p>
          <input
            ref="refEntertainment"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input entertainmentInput"
            v-model="entertainment"
            @keypress="isNumberKey()"
            @change="inputEntertainmentAmount()"
          />
          <p class="error errorMsgentertainment">!!!</p>
        </div>
        <div class="card-investment investment">
          <span
            class="radio opacity-zero investmentRadio"
            @click="resetCards('investment')"
            >&#215;</span
          >
          <img
            src="../assets/images/investment.svg"
            alt="Expense tracker Investment Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text investmentText">Investment</p>
          <input
            ref="refInvestment"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input investmentInput"
            v-model="investment"
            @keypress="isNumberKey()"
            @change="inputInvestmentAmount()"
          />
          <p class="error errorMsginvestment">!!!</p>
        </div>
      </div>

      <div class="has-slider">
        <div class="slider" id="slider">
          <div class="slider-panel">
            <div class="card-transport transport">
              <span
                class="radio opacity-zero transportRadio"
                @click="resetCards('transport')"
                >&#215;</span
              >
              <img
                src="../assets/images/transportation-icon.svg"
                alt="Expense tracker Transportation Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text transportText">Transport</p>
              <input
                ref="refTransport"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input transportInput"
                v-model="transport"
                @keypress="isNumberKey()"
                @change="inputTransportationAmount()"
              />
              <p class="error errorMsgtransport">!!!</p>
            </div>
            <div class="card-transfer transfer">
              <span
                class="radio opacity-zero transferRadio"
                @click="resetCards('transfer')"
                >&#215;</span
              >
              <img
                src="../assets/images/transfer.svg"
                alt="Expense tracker Transfer Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text transferText">Transfer</p>
              <input
                ref="refTransfer"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input transferInput"
                v-model="transfer"
                @keypress="isNumberKey()"
                @change="inputTransferAmount()"
              />
              <p class="error errorMsgtransfer">!!!</p>
            </div>
            <div class="card-eating eating">
              <span
                class="radio opacity-zero eatingRadio"
                @click="resetCards('eating')"
                >&#215;</span
              >
              <img
                src="../assets/images/eating.svg"
                alt="Expense tracker Eating Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text eatingText">Eating Out</p>
              <input
                ref="refEating"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input eatingInput"
                v-model="eating"
                @keypress="isNumberKey()"
                @change="inputEatingAmount()"
              />
              <p class="error errorMsgeating">!!!</p>
            </div>
            <div class="card-bills bills">
              <span
                class="radio opacity-zero billsRadio"
                @click="resetCards('bills')"
                >&#215;</span
              >
              <img
                src="../assets/images/bills.svg"
                alt="Expense tracker Bills Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text billsText">Bills</p>
              <input
                ref="refBills"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input billsInput"
                v-model="bills"
                @keypress="isNumberKey()"
                @change="inputBillsAmount()"
              />
              <p class="error errorMsgbills">!!!</p>
            </div>
          </div>
          <div class="slider-panel">
            <div class="card-family family">
              <span
                class="radio opacity-zero familyRadio"
                @click="resetCards('family')"
                >&#215;</span
              >
              <img
                src="../assets/images/family.svg"
                alt="Expense tracker Family Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text familyText">Family</p>
              <input
                ref="refFamily"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input familyInput"
                v-model="family"
                @keypress="isNumberKey()"
                @change="inputFamilyAmount()"
              />
              <p class="error errorMsgfamily">!!!</p>
            </div>
            <div class="card-groceries groceries">
              <span
                class="radio opacity-zero groceriesRadio"
                @click="resetCards('groceries')"
                >&#215;</span
              >
              <img
                src="../assets/images/Groceries.svg"
                alt="Expense tracker Groceries Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text groceriesText">Groceries</p>
              <input
                ref="refGroceries"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input groceriesInput"
                v-model="groceries"
                @keypress="isNumberKey()"
                @change="inputGroceriesAmount()"
              />
              <p class="error errorMsggroceries">!!!</p>
            </div>
            <div class="card-shopping shopping">
              <span
                class="radio opacity-zero shoppingRadio"
                @click="resetCards('shopping')"
                >&#215;</span
              >
              <img
                src="../assets/images/shopping.svg"
                alt="Expense tracker Shopping Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text shoppingText">Shopping</p>
              <input
                ref="refShopping"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input shoppingInput"
                v-model="shopping"
                @keypress="isNumberKey()"
                @change="inputShoppingAmount()"
              />
              <p class="error errorMsgshopping">!!!</p>
            </div>
            <div class="card-care care">
              <span
                class="radio opacity-zero careRadio"
                @click="resetCards('care')"
                >&#215;</span
              >
              <img
                src="../assets/images/personal-care.svg"
                alt="Expense tracker Personal Care Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text careText">Personal Care</p>
              <input
                ref="refCare"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input careInput"
                v-model="care"
                @keypress="isNumberKey()"
                @change="inputCareAmount()"
              />
              <p class="error errorMsgcare">!!!</p>
            </div>
          </div>
          <div class="slider-panel">
            <div class="card-vacation vacation">
              <span
                class="radio opacity-zero vacationRadio"
                @click="resetCards('vacation')"
                >&#215;</span
              >
              <img
                src="../assets/images/vercation.svg"
                alt="Expense tracker Vercation Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text vacationText">Vacation</p>
              <input
                ref="refVacation"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input vacationInput"
                v-model="vacation"
                @keypress="isNumberKey()"
                @change="inputVacationAmount()"
              />
              <p class="error errorMsgvacation">!!!</p>
            </div>
            <div class="card-payroll payroll">
              <span
                class="radio opacity-zero payrollRadio"
                @click="resetCards('payroll')"
                >&#215;</span
              >
              <img
                src="../assets/images/payroll.svg"
                alt="Expense tracker Payroll Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text payrollText">Payroll</p>
              <input
                ref="refPayroll"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input payrollInput"
                v-model="payroll"
                @keypress="isNumberKey()"
                @change="inputPayrollAmount()"
              />
              <p class="error errorMsgpayroll">!!!</p>
            </div>
            <div class="card-entertainment entertainment">
              <span
                class="radio opacity-zero entertainmentRadio"
                @click="resetCards('entertainment')"
                >&#215;</span
              >
              <img
                src="../assets/images/entertainment.svg"
                alt="Expense tracker Entertainment Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text entertainmentText">Entertainment</p>
              <input
                ref="refEntertainment"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input entertainmentInput"
                v-model="entertainment"
                @keypress="isNumberKey()"
                @change="inputEntertainmentAmount()"
              />
              <p class="error errorMsgentertainment">!!!</p>
            </div>
            <div class="card-investment investment">
              <span
                class="radio opacity-zero investmentRadio"
                @click="resetCards('investment')"
                >&#215;</span
              >
              <img
                src="../assets/images/investment.svg"
                alt="Expense tracker Investment Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text investmentText">Investment</p>
              <input
                ref="refInvestment"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input investmentInput"
                v-model="investment"
                @keypress="isNumberKey()"
                @change="inputInvestmentAmount()"
              />
              <p class="error errorMsginvestment">!!!</p>
            </div>
          </div>
        </div>
        <div class="slider-pagination">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div ref="refButton" class="button btn" @click="checkHabit()">
        Check Your Habit!
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  data() {
    return {
      amount: 0,
      userDetails: JSON.parse(localStorage.getItem("user_details")),
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
    this.checkUserDetails()
    this.initialTrackerDetails();

    window.slider = {};

    slider.sliderPanelSelector = ".slider-panel";
    slider.sliderPaginationSelector = ".slider-pagination";
    slider.sensitivity = 25; // horizontal % needed to trigger swipe

    // 2. Placeholder to remember which slide we’re on
    slider.activeSlide = 0;

    // 3. Slide counter
    slider.slideCount = 0;

    // 4. Initialization + event listener
    slider.init = function(selector) {
      // 4a. Find the container
      slider.sliderEl = document.querySelector(selector);

      // 4b. Count stuff
      slider.slideCount = slider.sliderEl.querySelectorAll(
        slider.sliderPanelSelector
      ).length;

      // 4c. Populate pagination
      let n = 0;
      for (n; n < slider.slideCount; n++) {
        let activeStatus = n == slider.activeSlide ? ' class="is-active"' : "";
        slider.sliderEl.parentElement.querySelector(
          slider.sliderPaginationSelector
        ).innerHTML += "<div " + activeStatus + "></div>";
      }

      // 4d. Set up HammerJS
      let sliderManager = new Hammer.Manager(slider.sliderEl);
      sliderManager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
      sliderManager.on("pan", function(e) {
        // 4e. Calculate pixel movements into 1:1 screen percents so gestures track with motion
        let percentage =
          ((100 / slider.slideCount) * e.deltaX) / window.innerWidth;

        // 4f. Multiply percent by # of slide we’re on
        let percentageCalculated =
          percentage - (100 / slider.slideCount) * slider.activeSlide;

        // 4g. Apply transformation
        slider.sliderEl.style.transform =
          "translateX( " + percentageCalculated + "% )";

        // 4h. Snap to slide when done
        if (e.isFinal) {
          if (e.velocityX > 1) {
            slider.goTo(slider.activeSlide - 1);
          } else if (e.velocityX < -1) {
            slider.goTo(slider.activeSlide + 1);
          } else {
            if (percentage <= -(slider.sensitivity / slider.slideCount))
              slider.goTo(slider.activeSlide + 1);
            else if (percentage >= slider.sensitivity / slider.slideCount)
              slider.goTo(slider.activeSlide - 1);
            else slider.goTo(slider.activeSlide);
          }
        }
      });
    };

    // 5. Update current slide
    slider.goTo = function(number) {
      // 5a. Stop it from doing weird things like moving to slides that don’t exist
      if (number < 0) slider.activeSlide = 0;
      else if (number > slider.slideCount - 1)
        slider.activeSlide = slider.slideCount - 1;
      else slider.activeSlide = number;

      // 5b. Apply transformation & smoothly animate via .is-animating CSS
      slider.sliderEl.classList.add("is-animating");
      let percentage = -(100 / slider.slideCount) * slider.activeSlide;
      slider.sliderEl.style.transform = "translateX( " + percentage + "% )";
      clearTimeout(slider.timer);
      slider.timer = setTimeout(function() {
        slider.sliderEl.classList.remove("is-animating");
      }, 400);

      // 5c. Update the counters
      let pagination = slider.sliderEl.parentElement.querySelectorAll(
        slider.sliderPaginationSelector + " > *"
      );
      let n = 0;
      for (n; n < pagination.length; n++) {
        let className = n == slider.activeSlide ? "is-active" : "";
        pagination[n].className = className;
      }
    };

    // Initialize
    slider.init("#slider");

    const tl = new TimelineMax();
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
        rotation: "-60"
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
        rotation: "30"
      },
      -3
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
      ".leafRight",
      5,
      { x: 0, y: 0 },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.4,
        ease: Linear.easeNone,
        x: 10,
        y: -30
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
        y: -10
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
      ".leafBottomDesktop",
      5,
      { x: 0, y: 0 },
      {
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        ease: Linear.easeNone,
        x: -3,
        y: -10,
        rotation: "5"
      },
      -3
    );

    tl.fromTo(
      ".trackerPage",
      1.5,
      { opacity: 0, ease: Power2.easeInOut },
      { opacity: 1, pointerEvents: "visible", ease: Power2.easeInOut }
    );
  },
  methods: {
    checkUserDetails() {
      if (!localStorage.getItem("user_details")) {
        this.$router.push("/");
        return
      }
      let user = JSON.parse(localStorage.getItem("user_details")).map(user => {
        if(user.email === "") {
          this.$router.push("/sign-up-page");
        }
      })
    },
    isNumberKey() {
      if ((event.which < 48 || event.which > 57) && event.which !== 13) {
        event.preventDefault();
      }
    },
    initialTrackerDetails() {
      this.maxExpense = [];
      this.maxExpense = [
        { key: "transport", amount: this.inputTransport },
        { key: "transfer", amount: this.inputTransfer },
        { key: "eating", amount: this.inputEating },
        { key: "bills", amount: this.inputBills },
        { key: "family", amount: this.inputFamily },
        { key: "groceries", amount: this.inputGroceries },
        { key: "shopping", amount: this.inputShopping },
        { key: "care", amount: this.inputCare },
        { key: "vacation", amount: this.inputVacation },
        { key: "payroll", amount: this.inputPayroll },
        { key: "entertainment", amount: this.inputEntertainment },
        { key: "investment", amount: this.inputInvestment }
      ];
      localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
    },
    notification(msg) {
      this.$swal.fire({
        position: "top-end",
        padding: "1rem 1.5rem",
        background: "#fef2f1",
        title: `<h2 style='color:lightcoral; font-size: 2.8rem'>${msg}</h2>`,
        customClass: {
          popup: "swal-popup"
        },
        showConfirmButton: false,
        timer: 2000,
        toast: true
      });
    },
    setHighestExpense(key, max) {
      this.userDetails.map(details => {
        details.key = key,
        details.highest_expense = max,
        details.amount = this.amount;
      });
      localStorage.setItem("user_details", JSON.stringify(this.userDetails));
      this.$router.push("/result");
    },
    checkHabit() {
      if (isNaN(this.amount) === true) {
        this.notification("Input error");
        return;
      } else if (this.amount === 0) {
        this.notification("Please enter amount");
        return;
      } else {
        this.max = Math.max.apply(
          Math,
          this.maxExpense.map(object => {
            return object.amount;
          })
        );
        if (this.inputTransport == this.max) {
          this.setHighestExpense("transport", this.max);
        }
        if (this.inputTransfer == this.max) {
          this.setHighestExpense("transfer", this.max);
        }
        if (this.inputEating == this.max) {
          this.setHighestExpense("eating", this.max);
        }
        if (this.inputBills == this.max) {
          this.setHighestExpense("bills", this.max);
        }
        if (this.inputFamily == this.max) {
          this.setHighestExpense("family", this.max);
        }
        if (this.inputGroceries == this.max) {
          this.setHighestExpense("groceries", this.max);
        }
        if (this.inputShopping == this.max) {
          this.setHighestExpense("shopping", this.max);
        }
        if (this.inputCare == this.max) {
          this.setHighestExpense("personal care", this.max);
        }
        if (this.inputVacation == this.max) {
          this.setHighestExpense("vacation", this.max);
        }
        if (this.inputPayroll == this.max) {
          this.setHighestExpense("payroll", this.max);
        }
        if (this.inputEntertainment == this.max) {
          this.setHighestExpense("entertainment", this.max);
        }
        if (this.inputInvestment == this.max) {
          this.setHighestExpense("investment", this.max);
        }
      }
    },
    resetCards(card) {
      if (card === "transport") {
        this.transport = "";
        this.inputTransport = 0;
        this.initialTrackerDetails();
      }
      if (card === "transfer") {
        this.transfer = "";
        this.inputTransfer = 0;
        this.initialTrackerDetails();
      }
      if (card === "eating") {
        this.eating = "";
        this.inputEating = 0;
        this.initialTrackerDetails();
      }
      if (card === "bills") {
        this.bills = "";
        this.inputBills = 0;
        this.initialTrackerDetails();
      }
      if (card === "family") {
        this.family = "";
        this.inputFamily = 0;
        this.initialTrackerDetails();
      }
      if (card === "groceries") {
        this.groceries = "";
        this.inputGroceries = 0;
        this.initialTrackerDetails();
      }
      if (card === "shopping") {
        this.shopping = "";
        this.inputShopping = 0;
        this.initialTrackerDetails();
      }
      if (card === "care") {
        this.care = "";
        this.inputCare = 0;
        this.initialTrackerDetails();
      }
      if (card === "vacation") {
        this.vacation = "";
        this.inputVacation = 0;
        this.initialTrackerDetails();
      }
      if (card === "payroll") {
        this.payroll = "";
        this.inputPayroll = 0;
        this.initialTrackerDetails();
      }
      if (card === "entertainment") {
        this.entertainment = "";
        this.inputEntertainment = 0;
        this.initialTrackerDetails();
      }
      if (card === "investment") {
        this.investment = "";
        this.inputInvestment = 0;
        this.initialTrackerDetails();
      }
      const tl = new TimelineMax();

      tl.to(
        `.${card}`,
        0.5,
        { backgroundColor: "#ffffff", color: "#3a3737" },
        0.1
      )
        .to(`.${card}Text`, 0.5, { color: "#3a3737" }, 0.1)
        .to(
          `.${card}Input`,
          0.5,
          { backgroundColor: "#f1f1f1", color: "#252525" },
          0.1
        )
        .to(`.${card}Radio`, 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(`.errorMsg${card}`, 0.5, { display: "none" }, 0.1);

      this.totalAmount();
    },
    animateCardOnInput(card, backgroundColor) {
      const tl = new TimelineMax();
      tl.to(
        `.${card}`,
        0.5,
        { backgroundColor: `#${backgroundColor}`, color: "#ffffff" },
        0.1
      )
        .to(`.${card}Text`, 0.5, { color: "#ffffff" }, 0.1)
        .to(
          `.${card}Input`,
          0.5,
          { backgroundColor: `#${backgroundColor}`, color: "#ffffff" },
          0.1
        )
        .to(`.errorMsg${card}`, 0.5, { display: "none" }, 0.1)
        .to(
          `.${card}Radio`,
          0.5,
          { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
          0.1
        );
    },
    animateCardOnError(card) {
      const tl = new TimelineMax();
      tl.to(
        `.${card}`,
        0.5,
        { backgroundColor: "#ffffff", color: "#3a3737" },
        0.1
      )
        .to(`.${card}Text`, 0.5, { color: "#3a3737" }, 0.1)
        .to(
          `.${card}Input`,
          0.5,
          { backgroundColor: "#f1f1f1", color: "#252525" },
          0.1
        )
        .to(
          `.${card}Radio`,
          0.5,
          { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
          0.1
        );
      TweenMax.fromTo(
        `.errorMsg${card}`,
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
    },
    animateCardOnClearInput(card) {
      const tl = new TimelineMax();
      tl.to(
        `.${card}`,
        0.5,
        { backgroundColor: "#ffffff", color: "#3a3737" },
        0.1
      )
        .to(`.${card}Text`, 0.5, { color: "#3a3737" }, 0.1)
        .to(
          `.${card}Input`,
          0.5,
          { backgroundColor: "#f1f1f1", color: "#252525" },
          0.1
        )
        .to(
          `.${card}Radio`,
          0.5,
          { opacity: "0", pointerEvents: "none" },
          0.1
        )
        .to(`.errorMsg${card}`, 0.5, { display: "none" }, 0.1);
    },
    inputTransportationAmount() {
      let regEx = /^[0-9]*$/gm;
      if (this.transport.charAt(0) === "N") {
        this.transport = this.transport.substr(1);
      }
      if (this.transport.length > 0 && regEx.test(this.transport) === true) {
        this.inputTransport = event.target.value;
        if (this.inputTransport.charAt(0) === "N") {
          this.inputTransport = this.inputTransport.substr(1);
        }
        this.transport = `N${this.inputTransport}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("transport", "1b5ece")
        this.totalAmount();
      }
      else if (
        this.transport.length > 0 &&
        regEx.test(this.transport) === false
      ) {
        this.inputTransport = event.target.value;
        this.animateCardOnError("transport")
        this.totalAmount();
      }
      else if (this.transport.length === 0) {
        this.inputTransport = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("transport")
        this.totalAmount();
      }
    },
    inputTransferAmount() {
      let regEx = /^[0-9]*$/gm;
      // this.initialTrackerDetails();
      if (this.transfer.charAt(0) === "N") {
        this.transfer = this.transfer.substr(1);
      }
      if (this.transfer.length > 0 && regEx.test(this.transfer) === true) {
        this.inputTransfer = event.target.value;
        if (this.inputTransfer.charAt(0) === "N") {
          this.inputTransfer = this.inputTransfer.substr(1);
        }
        this.transfer = `N${this.inputTransfer}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("transfer", "D0001B")
        this.totalAmount();
      } else if (
        this.transfer.length > 0 &&
        regEx.test(this.transfer) === false
      ) {
        this.inputTransfer = event.target.value;
        this.animateCardOnError("transfer")
        this.totalAmount();
      } else if (this.transfer.length === 0) {
        this.inputTransfer = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("transfer")
        this.totalAmount();
      }
    },
    inputEatingAmount() {
      let regEx = /^[0-9]*$/gm;
      if (this.eating.charAt(0) === "N") {
        this.eating = this.eating.substr(1);
      }
      if (this.eating.length > 0 && regEx.test(this.eating) === true) {
        this.inputEating = event.target.value;
        if (this.inputEating.charAt(0) === "N") {
          this.inputEating = this.inputEating.substr(1);
        }
        this.eating = `N${this.inputEating}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("eating", "14777C")
        this.totalAmount();
      } else if (this.eating.length > 0 && regEx.test(this.eating) === false) {
        this.inputEating = event.target.value;
        this.animateCardOnError("eating")
        this.totalAmount();
      } else if (this.eating.length === 0) {
        this.inputEating = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("eating")
        this.totalAmount();
      }
    },
    inputBillsAmount() {
      let regEx = /^[0-9]*$/gm;
      if (this.bills.charAt(0) === "N") {
        this.bills = this.bills.substr(1);
      }
      if (this.bills.length > 0 && regEx.test(this.bills) === true) {
        this.inputBills = event.target.value;
        if (this.inputBills.charAt(0) === "N") {
          this.inputBills = this.inputBills.substr(1);
        }
        this.bills = `N${this.inputBills}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("bills", "D0001B")
        this.totalAmount();
      } else if (this.bills.length > 0 && regEx.test(this.bills) === false) {
        this.inputBills = event.target.value;
        this.animateCardOnError("bills")
        this.totalAmount();
      } else if (this.bills.length === 0) {
        this.inputBills = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("bills")
        this.totalAmount();
      }
    },
    inputFamilyAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.family.charAt(0) === "N") {
        this.family = this.family.substr(1);
      }
      if (this.family.length > 0 && regEx.test(this.family) === true) {
        this.inputFamily = event.target.value;
        if (this.inputFamily.charAt(0) === "N") {
          this.inputFamily = this.inputFamily.substr(1);
        }
        this.family = `N${this.inputFamily}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("family", "5D29DE")
        this.totalAmount();
      } else if (this.family.length > 0 && regEx.test(this.family) === false) {
        this.inputFamily = event.target.value;
        this.animateCardOnError("family")
        this.totalAmount();
      } else {
        this.inputFamily = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("family")
        this.totalAmount();
      }
    },
    inputGroceriesAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.groceries.charAt(0) === "N") {
        this.groceries = this.groceries.substr(1);
      }
      if (this.groceries.length > 0 && regEx.test(this.groceries) === true) {
        this.inputGroceries = event.target.value;
        if (this.inputGroceries.charAt(0) === "N") {
          this.inputGroceries = this.inputGroceries.substr(1);
        }
        this.groceries = `N${this.inputGroceries}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("groceries", "14777C")
        this.totalAmount();
      } else if (
        this.groceries.length > 0 &&
        regEx.test(this.groceries) === false
      ) {
        this.inputGroceries = event.target.value;
        this.animateCardOnError("groceries")
        this.totalAmount();
      } else {
        this.inputGroceries = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("groceries")
        this.totalAmount();
      }
    },
    inputShoppingAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.shopping.charAt(0) === "N") {
        this.shopping = this.shopping.substr(1);
      }
      if (this.shopping.length > 0 && regEx.test(this.shopping) === true) {
        this.inputShopping = event.target.value;
        if (this.inputShopping.charAt(0) === "N") {
          this.inputShopping = this.inputShopping.substr(1);
        }
        this.shopping = `N${this.inputShopping}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("shopping", "F1663D")
        this.totalAmount();
      } else if (
        this.shopping.length > 0 &&
        regEx.test(this.shopping) === false
      ) {
        this.inputShopping = event.target.value;
        this.animateCardOnError("shopping")
        this.totalAmount();
      } else {
        this.inputShopping = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("shopping")
        this.totalAmount();
      }
    },
    inputCareAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.care.charAt(0) === "N") {
        this.care = this.care.substr(1);
      }
      if (this.care.length > 0 && regEx.test(this.care) === true) {
        this.inputCare = event.target.value;
        if (this.inputCare.charAt(0) === "N") {
          this.inputCare = this.inputCare.substr(1);
        }
        this.care = `N${this.inputCare}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("care", "1b5ece")
        this.totalAmount();
      } else if (this.care.length > 0 && regEx.test(this.care) === false) {
        this.inputCare = event.target.value;
        this.animateCardOnError("care")
        this.totalAmount();
      } else {
        this.inputCare = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("care")
        this.totalAmount();
      }
    },
    inputVacationAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.vacation.charAt(0) === "N") {
        this.vacation = this.vacation.substr(1);
      }
      if (this.vacation.length > 0 && regEx.test(this.vacation) === true) {
        this.inputVacation = event.target.value;
        if (this.inputVacation.charAt(0) === "N") {
          this.inputVacation = this.inputVacation.substr(1);
        }
        this.vacation = `N${this.inputVacation}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("vacation", "F1663D")
        this.totalAmount();
      } else if (
        this.vacation.length > 0 &&
        regEx.test(this.vacation) === false
      ) {
        this.inputVacation = event.target.value;
        this.animateCardOnError("vacation")
        this.totalAmount();
      } else {
        this.inputVacation = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("vacation")
        this.totalAmount();
      }
    },
    inputPayrollAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.payroll.charAt(0) === "N") {
        this.payroll = this.payroll.substr(1);
      }
      if (this.payroll.length > 0 && regEx.test(this.payroll) === true) {
        this.inputPayroll = event.target.value;
        if (this.inputPayroll.charAt(0) === "N") {
          this.inputPayroll = this.inputPayroll.substr(1);
        }
        this.payroll = `N${this.inputPayroll}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("payroll", "1b5ece")
        this.totalAmount();
      } else if (
        this.payroll.length > 0 &&
        regEx.test(this.payroll) === false
      ) {
        this.inputPayroll = event.target.value;
        this.animateCardOnError("payroll")
        this.totalAmount();
      } else {
        this.inputPayroll = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("payroll")
        this.totalAmount();
      }
    },
    inputEntertainmentAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.entertainment.charAt(0) === "N") {
        this.entertainment = this.entertainment.substr(1);
      }
      if (
        this.entertainment.length > 0 &&
        regEx.test(this.entertainment) === true
      ) {
        this.inputEntertainment = event.target.value;
        if (this.inputEntertainment.charAt(0) === "N") {
          this.inputEntertainment = this.inputEntertainment.substr(1);
        }
        this.entertainment = `N${this.inputEntertainment}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("entertainment", "5D29DE")
        this.totalAmount();
      } else if (
        this.entertainment.length > 0 &&
        regEx.test(this.entertainment) === false
      ) {
        this.inputEntertainment = event.target.value;
        this.animateCardOnError("entertainment")
        this.totalAmount();
      } else {
        this.inputEntertainment = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("entertainment")
        this.totalAmount();
      }
    },
    inputInvestmentAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.investment.charAt(0) === "N") {
        this.investment = this.investment.substr(1);
      }
      if (this.investment.length > 0 && regEx.test(this.investment) === true) {
        this.inputInvestment = event.target.value;
        if (this.inputInvestment.charAt(0) === "N") {
          this.inputInvestment = this.inputInvestment.substr(1);
        }
        this.investment = `N${this.inputInvestment}`;
        this.initialTrackerDetails();
        this.animateCardOnInput("investment", "14777C")
        this.totalAmount();
      } else if (
        this.investment.length > 0 &&
        regEx.test(this.investment) === false
      ) {
        this.inputInvestment = event.target.value;
        this.animateCardOnError("investment")
        this.totalAmount();
      } else {
        this.inputInvestment = 0;
        this.initialTrackerDetails();
        this.animateCardOnClearInput("investment")
        this.totalAmount();
      }
    },
    totalAmount() {
      this.amount = this.maxExpense.reduce(function (accumulator, obj) {
        return accumulator + Number(obj.amount);
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";
@import "@/assets/styles/trackerPage";
</style>