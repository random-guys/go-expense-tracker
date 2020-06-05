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
          Hey
          <b class="capitalize">{{ detail.first_name }}</b>, let's find out what your money is saying.
        </h2>
      </div>
      <!-- <div class="break"></div> -->
      <div class="card-container">
        <div class="card-transport transport">
          <span class="radio opacity-zero transportRadio" @click="resetTransportCard()">&#215;</span>
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
          <p class="error errorMsgTransport">!!!</p>
        </div>
        <div class="card-transfer transfer">
          <span class="radio opacity-zero transferRadio" @click="resetTransferCard()">&#215;</span>
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
          <p class="error errorMsgTransfer">!!!</p>
        </div>
        <div class="card-eating eating">
          <span class="radio opacity-zero eatingRadio" @click="resetEatingCard()">&#215;</span>
          <img
            src="../assets/images/eating.svg"
            alt="Expense tracker Eating Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text eatingText">Food</p>
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
          <p class="error errorMsgEating">!!!</p>
        </div>
        <div class="card-bills bills">
          <span class="radio opacity-zero billsRadio" @click="resetBillsCard()">&#215;</span>
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
          <p class="error errorMsgBills">!!!</p>
        </div>
        <div class="card-family family">
          <span class="radio opacity-zero familyRadio" @click="resetFamilyCard()">&#215;</span>
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
          <p class="error errorMsgFamily">!!!</p>
        </div>
        <div class="card-groceries groceries">
          <span class="radio opacity-zero groceriesRadio" @click="resetGroceriesCard()">&#215;</span>
          <img
            src="../assets/images/groceries.svg"
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
          <p class="error errorMsgGroceries">!!!</p>
        </div>
        <div class="card-shopping shopping">
          <span class="radio opacity-zero shoppingRadio" @click="resetShoppingCard()">&#215;</span>
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
          <p class="error errorMsgShopping">!!!</p>
        </div>
        <div class="card-care care">
          <span class="radio opacity-zero careRadio" @click="resetCareCard()">&#215;</span>
          <img
            src="../assets/images/personal-care.svg"
            alt="Expense tracker Parsonal Care Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text careText">Self Care</p>
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
          <p class="error errorMsgCare">!!!</p>
        </div>
        <div class="card-vacation vacation">
          <span class="radio opacity-zero vacationRadio" @click="resetVacationCard()">&#215;</span>
          <img
            src="../assets/images/vacation.svg"
            alt="Expense tracker Vercation Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text vacationText">Holiday</p>
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
          <p class="error errorMsgVacation">!!!</p>
        </div>
        <div class="card-payroll payroll">
          <span class="radio opacity-zero payrollRadio" @click="resetPayrollCard()">&#215;</span>
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
          <p class="error errorMsgPayroll">!!!</p>
        </div>
        <div class="card-entertainment entertainment">
          <span
            class="radio opacity-zero entertainmentRadio"
            @click="resetEntertainmentCard()"
          >&#215;</span>
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
          <p class="error errorMsgEntertainment">!!!</p>
        </div>
        <div class="card-investment investment">
          <span class="radio opacity-zero investmentRadio" @click="resetInvestmentCard()">&#215;</span>
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
          <p class="error errorMsgInvestment">!!!</p>
        </div>
        <div class="card-charity charity">
          <span class="radio opacity-zero charityRadio" @click="resetCharityCard()">&#215;</span>
          <img
            src="../assets/images/charity.svg"
            alt="Expense tracker Charity Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text charityText">Charity</p>
          <input
            ref="refCharity"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input charityInput"
            v-model="charity"
            @keypress="isNumberKey()"
            @change="inputCharityAmount()"
          />
          <p class="error errorMsgCharity">!!!</p>
        </div>
        <div class="card-cardPurchases cardPurchases">
          <span
            class="radio opacity-zero cardPurchasesRadio"
            @click="resetCardPurchasesCard()"
          >&#215;</span>
          <img
            src="../assets/images/card-purchase.svg"
            alt="Expense tracker CardPurchases Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text cardPurchasesText">Card Purchase</p>
          <input
            ref="refCardPurchases"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input cardPurchasesInput"
            v-model="cardPurchases"
            @keypress="isNumberKey()"
            @change="inputCardPurchasesAmount()"
          />
          <p class="error errorMsgCardPurchases">!!!</p>
        </div>
        <div class="card-household household">
          <span class="radio opacity-zero householdRadio" @click="resetHouseholdCard()">&#215;</span>
          <img
            src="../assets/images/household.svg"
            alt="Expense tracker Household Icon For GoMoney Nigeria"
            class="card-img"
          />
          <p class="card-text householdText">Household</p>
          <input
            ref="refHousehold"
            type="text"
            placeholder="N.00"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='N.00'"
            class="input householdInput"
            v-model="household"
            @keypress="isNumberKey()"
            @change="inputHouseholdAmount()"
          />
          <p class="error errorMsgHousehold">!!!</p>
        </div>
      </div>

      <div class="has-slider">
        <div class="slider" id="slider">
          <!-- slide one -mobile -->
          <div class="slider-panel">
            <div class="card-transport transport">
              <span class="radio opacity-zero transportRadio" @click="resetTransportCard()">&#215;</span>
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
              <p class="error errorMsgTransport">!!!</p>
            </div>
            <div class="card-transfer transfer">
              <span class="radio opacity-zero transferRadio" @click="resetTransferCard()">&#215;</span>
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
              <p class="error errorMsgTransfer">!!!</p>
            </div>
            <div class="card-eating eating">
              <span class="radio opacity-zero eatingRadio" @click="resetEatingCard()">&#215;</span>
              <img
                src="../assets/images/eating.svg"
                alt="Expense tracker Eating Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text eatingText">Food</p>
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
              <p class="error errorMsgEating">!!!</p>
            </div>
            <div class="card-bills bills">
              <span class="radio opacity-zero billsRadio" @click="resetBillsCard()">&#215;</span>
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
              <p class="error errorMsgBills">!!!</p>
            </div>
          </div>

          <!-- slide two - mobile  -->
          <div class="slider-panel">
            <div class="card-family family">
              <span class="radio opacity-zero familyRadio" @click="resetFamilyCard()">&#215;</span>
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
              <p class="error errorMsgFamily">!!!</p>
            </div>
            <div class="card-groceries groceries">
              <span class="radio opacity-zero groceriesRadio" @click="resetGroceriesCard()">&#215;</span>
              <img
                src="../assets/images/groceries.svg"
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
              <p class="error errorMsgGroceries">!!!</p>
            </div>
            <div class="card-shopping shopping">
              <span class="radio opacity-zero shoppingRadio" @click="resetShoppingCard()">&#215;</span>
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
              <p class="error errorMsgShopping">!!!</p>
            </div>
            <div class="card-care care">
              <span class="radio opacity-zero careRadio" @click="resetCareCard()">&#215;</span>
              <img
                src="../assets/images/personal-care.svg"
                alt="Expense tracker Personal Care Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text careText">Self Care</p>
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
              <p class="error errorMsgCare">!!!</p>
            </div>
          </div>

          <!-- slide three -mobile  -->
          <div class="slider-panel">
            <div class="card-vacation vacation">
              <span class="radio opacity-zero vacationRadio" @click="resetVacationCard()">&#215;</span>
              <img
                src="../assets/images/vacation.svg"
                alt="Expense tracker Vercation Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text vacationText">Holiday</p>
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
              <p class="error errorMsgVacation">!!!</p>
            </div>
            <div class="card-payroll payroll">
              <span class="radio opacity-zero payrollRadio" @click="resetPayrollCard()">&#215;</span>
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
              <p class="error errorMsgPayroll">!!!</p>
            </div>
            <div class="card-entertainment entertainment">
              <span
                class="radio opacity-zero entertainmentRadio"
                @click="resetEntertainmentCard()"
              >&#215;</span>
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
              <p class="error errorMsgEntertainment">!!!</p>
            </div>
            <div class="card-investment investment">
              <span class="radio opacity-zero investmentRadio" @click="resetInvestmentCard()">&#215;</span>
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
              <p class="error errorMsgInvestment">!!!</p>
            </div>
          </div>

          <!-- slide four -mobile -->
          <div class="slider-panel">
            <!-- Charity card  -->
            <div class="card-charity charity">
              <span class="radio opacity-zero charityRadio" @click="resetCharityCard()">&#215;</span>
              <img
                src="../assets/images/charity.svg"
                alt="Expense tracker Payroll Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text charityText">Charity</p>
              <input
                ref="refCharity"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input charityInput"
                v-model="charity"
                @keypress="isNumberKey()"
                @change="inputCharityAmount()"
              />
              <p class="error errorMsgCharity">!!!</p>
            </div>

            <div class="card-cardPurchases cardPurchases">
              <span
                class="radio opacity-zero cardPurchasesRadio"
                @click="resetCardPurchasesCard()"
              >&#215;</span>
              <img
                src="../assets/images/card-purchase.svg"
                alt="Expense tracker CardPurchases Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text cardPurchasesText">Card Purchase</p>
              <input
                ref="refCardPurchases"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input cardPurchasesInput"
                v-model="cardPurchases"
                @keypress="isNumberKey()"
                @change="inputCardPurchasesAmount()"
              />
              <p class="error errorMsgCardPurchases">!!!</p>
            </div>

            <div class="card-household household">
              <span class="radio opacity-zero householdRadio" @click="resetHouseholdCard()">&#215;</span>
              <img
                src="../assets/images/household.svg"
                alt="Expense tracker Household Icon For GoMoney Nigeria"
                class="card-img"
              />
              <p class="card-text householdText">Household</p>
              <input
                ref="refHousehold"
                type="text"
                placeholder="N.00"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='N.00'"
                class="input householdInput"
                v-model="household"
                @keypress="isNumberKey()"
                @change="inputHouseholdAmount()"
              />
              <p class="error errorMsgHousehold">!!!</p>
            </div>
          </div>
        </div>
        <div class="slider-pagination">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
      inputInvestment: "",
      charity: "",
      inputCharity: "",
      cardPurchases: "",
      inputCardPurchases: "",
      household: "",
      inputHousehold: ""
    };
  },
  mounted() {
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

    this.userDetails = JSON.parse(localStorage.getItem("user_details"));
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
    isNumberKey() {
      if ((event.which < 48 || event.which > 57) && event.which !== 13) {
        event.preventDefault();
      }
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
        investment: this.inputInvestment,
        charity: this.inputCharity,
        refund: this.inputRefund,
        cardPurchases: this.inputCardPurchases,
        household: this.inputHousehold
      };
      this.amountTracker.push(trackerObject);
      localStorage.setItem(
        "amount_tracker",
        JSON.stringify(this.amountTracker)
      );
    },
    checkHabit() {
      if (isNaN(this.amount) === true) {
        this.$swal.fire({
          position: "top-end",
          padding: "1.5rem",
          background: "#fef2f1",
          width: 350,
          title: "Input error(Numbers only)",
          showConfirmButton: false,
          timer: 2000,
          toast: true
        });
        return;
      } else if (this.amount === 0) {
        this.$swal.fire({
          position: "top-end",
          padding: "1.5rem",
          background: "#fef2f1",
          width: 350,
          title: "Please enter amount(Numbers only)",
          showConfirmButton: false,
          timer: 2000,
          toast: true
        });
      } else {
        this.max = Math.max.apply(
          Math,
          this.maxExpense.map(function(o) {
            return o.amount;
          })
        );

        if (this.inputTransport == this.max) {
          this.userDetails.map(details => {
            (details.key = "transport"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputTransfer == this.max) {
          this.userDetails.map(details => {
            (details.key = "transfer"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputEating == this.max) {
          this.userDetails.map(details => {
            (details.key = "eating out"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputBills == this.max) {
          this.userDetails.map(details => {
            (details.key = "bills"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputFamily == this.max) {
          this.userDetails.map(details => {
            (details.key = "family"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputGroceries == this.max) {
          this.userDetails.map(details => {
            (details.key = "groceries"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputShopping == this.max) {
          this.userDetails.map(details => {
            (details.key = "shopping"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputCare == this.max) {
          this.userDetails.map(details => {
            (details.key = "personal care"),
              (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputVacation == this.max) {
          this.userDetails.map(details => {
            (details.key = "vacation"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputPayroll == this.max) {
          this.userDetails.map(details => {
            (details.key = "payroll"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputEntertainment == this.max) {
          this.userDetails.map(details => {
            (details.key = "entertainment"),
              (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputInvestment == this.max) {
          this.userDetails.map(details => {
            (details.key = "investment"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputCharity == this.max) {
          this.userDetails.map(details => {
            (details.key = "charity"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputRefund == this.max) {
          this.userDetails.map(details => {
            (details.key = "refund"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputCardPurchases == this.max) {
          this.userDetails.map(details => {
            (details.key = "card purchases"),
              (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        if (this.inputHousehold == this.max) {
          this.userDetails.map(details => {
            (details.key = "household"), (details.highest_expense = this.max);
          });
          localStorage.setItem(
            "user_details",
            JSON.stringify(this.userDetails)
          );
        }
        this.userDetails.map(details => {
          details.amount = this.amount;
        });
        localStorage.setItem("user_details", JSON.stringify(this.userDetails));
        this.$router.push("/result");
      }
    },
    resetTransportCard() {
      this.transport = "";
      this.inputTransport = 0;
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
        .to(
          ".transportRadio",
          0.5,
          { opacity: "0", pointerEvents: "none" },
          0.1
        )
        .to(".errorMsgTransport", 0.5, { display: "none" }, 0.1);

      this.inputAmount();
    },
    resetTransferCard() {
      this.transfer = "";
      this.inputTransfer = 0;
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
        .to(".transferRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgTransfer", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetEatingCard() {
      this.eating = "";
      this.inputEating = 0;
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
        .to(".eatingRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgEating", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetBillsCard() {
      this.bills = "";
      this.inputBills = 0;
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
        .to(".billsRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgBills", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetFamilyCard() {
      this.family = "";
      this.inputFamily = 0;
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
        .to(".familyRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgFamily", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetGroceriesCard() {
      this.groceries = "";
      this.inputGroceries = 0;
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
        .to(
          ".groceriesRadio",
          0.5,
          { opacity: "0", pointerEvents: "none" },
          0.1
        )
        .to(".errorMsgGroceries", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetShoppingCard() {
      this.shopping = "";
      this.inputShopping = 0;

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
        .to(".shoppingRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgShopping", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetCareCard() {
      this.care = "";
      this.inputCare = 0;
      const tl = new TimelineMax();

      tl.to(".care", 0.5, { backgroundColor: "#ffffff", color: "#3a3737" }, 0.1)
        .to(".careText", 0.5, { color: "#3a3737" }, 0.1)
        .to(
          ".careInput",
          0.5,
          { backgroundColor: "#f1f1f1", color: "#252525" },
          0.1
        )
        .to(".careRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgCare", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetVacationCard() {
      this.vacation = "";
      this.inputVacation = 0;

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
        .to(".vacationRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgVacation", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetPayrollCard() {
      this.payroll = "";
      this.inputPayroll = 0;
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
        .to(".payrollRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgPayroll", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetEntertainmentCard() {
      this.entertainment = "";
      this.inputEntertainment = 0;
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
        .to(
          ".entertainmentRadio",
          0.5,
          { opacity: "0", pointerEvents: "none" },
          0.1
        )
        .to(".errorMsgEntertainment", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetInvestmentCard() {
      this.investment = "";
      this.inputInvestment = 0;
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
        .to(
          ".investmentRadio",
          0.5,
          { opacity: "0", pointerEvents: "none" },
          0.1
        )
        .to(".errorMsgInvestment", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetCharityCard() {
      this.charity = "";
      this.inputCharity = 0;
      const tl = new TimelineMax();

      tl.to(
        ".charity",
        0.5,
        { backgroundColor: "#ffffff", color: "#3a3737" },
        0.1
      )
        .to(".charityText", 0.5, { color: "#3a3737" }, 0.1)
        .to(
          ".charityInput",
          0.5,
          { backgroundColor: "#f1f1f1", color: "#252525" },
          0.1
        )
        .to(".charityRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgCharity", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetCardPurchasesCard() {
      this.cardPurchases = "";
      this.inputCardPurchases = 0;
      const tl = new TimelineMax();

      tl.to(
        ".cardPurchases",
        0.5,
        { backgroundColor: "#ffffff", color: "#3a3737" },
        0.1
      )
        .to(".cardPurchasesText", 0.5, { color: "#3a3737" }, 0.1)
        .to(
          ".cardPurchasesInput",
          0.5,
          { backgroundColor: "#f1f1f1", color: "#252525" },
          0.1
        )
        .to(".refundRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgCardPurchases", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },
    resetHouseholdCard() {
      this.household = "";
      this.inputHousehold = 0;
      const tl = new TimelineMax();

      tl.to(
        ".household",
        0.5,
        { backgroundColor: "#ffffff", color: "#3a3737" },
        0.1
      )
        .to(".householdText", 0.5, { color: "#3a3737" }, 0.1)
        .to(
          ".householdInput",
          0.5,
          { backgroundColor: "#f1f1f1", color: "#252525" },
          0.1
        )
        .to(".refundRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
        .to(".errorMsgHousehold", 0.5, { display: "none" }, 0.1);
      this.inputAmount();
    },

    inputTransportationAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      // this.amountTracker = JSON.parse(localStorage.getItem("amount_tracker"));
      if (this.transport.charAt(0) === "N") {
        this.transport = this.transport.substr(1);
      }

      if (this.transport.length > 0 && regEx.test(this.transport) === true) {
        this.inputTransport = event.target.value;
        if (this.inputTransport.charAt(0) === "N") {
          this.inputTransport = this.inputTransport.substr(1);
        }

        this.transport = `N${this.inputTransport}`;
        this.amountTracker.map(amount => {
          amount.transport = this.inputTransport;
        });

        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "transport",
            amount: this.inputTransport
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "transport") {
              obj.amount = this.inputTransport;
            } else {
              let eachExpense = {
                key: "transport",
                amount: this.inputTransport
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refTransfer.focus()
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
          .to(".errorMsgTransport", 0.5, { display: "none" }, 0.1)
          .to(
            ".transportRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.transport.length > 0 &&
        regEx.test(this.transport) === false
      ) {
        this.inputTransport = event.target.value;
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
          .to(
            ".transportRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputTransport = 0;
        this.amountTracker.map(amount => {
          amount.transport = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "transport",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "transport") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refTransfer.focus()

        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );

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
          .to(
            ".transportRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgTransport", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputTransferAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.transfer.charAt(0) === "N") {
        this.transfer = this.transfer.substr(1);
      }
      if (this.transfer.length > 0 && regEx.test(this.transfer) === true) {
        this.inputTransfer = event.target.value;
        if (this.inputTransfer.charAt(0) === "N") {
          this.inputTransfer = this.inputTransfer.substr(1);
        }
        this.transfer = `N${this.inputTransfer}`;
        this.amountTracker.map(amount => {
          amount.transfer = this.inputTransfer;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "transfer",
            amount: this.inputTransfer
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "transfer") {
              obj.amount = this.inputTransfer;
            } else {
              let eachExpense = {
                key: "transfer",
                amount: this.inputTransfer
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refEating.focus()
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
          .to(".errorMsgTransfer", 0.5, { display: "none" }, 0.1)
          .to(
            ".transferRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.transfer.length > 0 &&
        regEx.test(this.transfer) === false
      ) {
        this.inputTransfer = event.target.value;
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
          .to(
            ".transferRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputTransfer = 0;
        this.amountTracker.map(amount => {
          amount.transfer = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "transfer",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "transfer") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refTransfer.focus()

        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(
            ".transferRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgTransfer", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputEatingAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.eating.charAt(0) === "N") {
        this.eating = this.eating.substr(1);
      }
      if (this.eating.length > 0 && regEx.test(this.eating) === true) {
        this.inputEating = event.target.value;
        if (this.inputEating.charAt(0) === "N") {
          this.inputEating = this.inputEating.substr(1);
        }
        this.eating = `N${this.inputEating}`;
        this.amountTracker.map(amount => {
          amount.eating = this.inputEating;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "eating out",
            amount: this.inputEating
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "eating out") {
              obj.amount = this.inputEating;
            } else {
              let eachExpense = {
                key: "eating out",
                amount: this.inputEating
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refBills.focus()
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
          .to(".errorMsgEating", 0.5, { display: "none" }, 0.1)
          .to(
            ".eatingRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.eating.length > 0 && regEx.test(this.eating) === false) {
        this.inputEating = event.target.value;
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
          .to(
            ".eatingRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputEating = 0;

        this.amountTracker.map(amount => {
          amount.eating = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "eating out",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "eating out") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refBills.focus()

        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(".eatingRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
          .to(".errorMsgEating", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputBillsAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.bills.charAt(0) === "N") {
        this.bills = this.bills.substr(1);
      }
      if (this.bills.length > 0 && regEx.test(this.bills) === true) {
        this.inputBills = event.target.value;
        if (this.inputBills.charAt(0) === "N") {
          this.inputBills = this.inputBills.substr(1);
        }
        this.bills = `N${this.inputBills}`;
        this.amountTracker.map(amount => {
          amount.bills = this.inputBills;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "bills",
            amount: this.inputBills
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "bills") {
              obj.amount = this.inputBills;
            } else {
              let eachExpense = {
                key: "bills",
                amount: this.inputBills
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refFamily.focus()
        const tl = new TimelineMax();

        tl.to(
          ".bills",
          0.5,
          { backgroundColor: "#F4626C", color: "#ffffff" },
          0.1
        )
          .to(".billsText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".billsInput",
            0.5,
            { backgroundColor: "#F4626C", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgBills", 0.5, { display: "none" }, 0.1)
          .to(
            ".billsRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.bills.length > 0 && regEx.test(this.bills) === false) {
        this.inputBills = event.target.value;
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
          .to(
            ".billsRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputBills = 0;

        this.amountTracker.map(amount => {
          amount.bills = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "bills",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "bills") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refFamily.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(".billsRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
          .to(".errorMsgBills", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.family = this.inputFamily;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "family",
            amount: this.inputFamily
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "family") {
              obj.amount = this.inputFamily;
            } else {
              let eachExpense = {
                key: "family",
                amount: this.inputFamily
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refGroceries.focus()
        const tl = new TimelineMax();

        tl.to(
          ".family",
          0.5,
          { backgroundColor: "#bc7df0", color: "#ffffff" },
          0.1
        )
          .to(".familyText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".familyInput",
            0.5,
            { backgroundColor: "#bc7df0", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgFamily", 0.5, { display: "none" }, 0.1)
          .to(
            ".familyRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.family.length > 0 && regEx.test(this.family) === false) {
        this.inputFamily = event.target.value;
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
          .to(
            ".familyRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputFamily = 0;
        this.amountTracker.map(amount => {
          amount.family = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "family",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "family") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refGroceries.focus()

        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(".familyRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
          .to(".errorMsgFamily", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.groceries = this.inputGroceries;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "groceries",
            amount: this.inputGroceries
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "groceries") {
              obj.amount = this.inputGroceries;
            } else {
              let eachExpense = {
                key: "groceries",
                amount: this.inputGroceries
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refShopping.focus()
        const tl = new TimelineMax();

        tl.to(
          ".groceries",
          0.5,
          { backgroundColor: "#ffc033", color: "#ffffff" },
          0.1
        )
          .to(".groceriesText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".groceriesInput",
            0.5,
            { backgroundColor: "#ffc033", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgGroceries", 0.5, { display: "none" }, 0.1)
          .to(
            ".groceriesRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.groceries.length > 0 &&
        regEx.test(this.groceries) === false
      ) {
        this.inputGroceries = event.target.value;

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
          .to(
            ".groceriesRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputGroceries = 0;
        this.amountTracker.map(amount => {
          amount.groceries = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "groceries",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "groceries") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refShopping.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(
            ".groceriesRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgGroceries", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.shopping = this.inputShopping;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "shopping",
            amount: this.inputShopping
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "shopping") {
              obj.amount = this.inputShopping;
            } else {
              let eachExpense = {
                key: "shopping",
                amount: this.inputShopping
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refCare.focus()
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
          .to(".errorMsgShopping", 0.5, { display: "none" }, 0.1)
          .to(
            ".shoppingRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.shopping.length > 0 &&
        regEx.test(this.shopping) === false
      ) {
        this.inputShopping = event.target.value;

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
          .to(
            ".shoppingRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputShopping = 0;
        this.amountTracker.map(amount => {
          amount.shopping = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "shopping",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "shopping") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refCare.focus()

        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(
            ".shoppingRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgShopping", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.care = this.inputCare;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "personal care",
            amount: this.inputCare
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "personal care") {
              obj.amount = this.inputCare;
            } else {
              let eachExpense = {
                key: "personal care",
                amount: this.inputCare
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refVacation.focus()
        const tl = new TimelineMax();

        tl.to(
          ".care",
          0.5,
          { backgroundColor: "#5dcdfc", color: "#ffffff" },
          0.1
        )
          .to(".careText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".careInput",
            0.5,
            { backgroundColor: "#5dcdfc", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgCare", 0.5, { display: "none" }, 0.1)
          .to(
            ".careRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (this.care.length > 0 && regEx.test(this.care) === false) {
        this.inputCare = event.target.value;
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
          .to(
            ".careRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputCare = 0;
        this.amountTracker.map(amount => {
          amount.care = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "personal care",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "personal care") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refVacation.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(".careRadio", 0.5, { opacity: "0", pointerEvents: "none" }, 0.1)
          .to(".errorMsgCare", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.vacation = this.inputVacation;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "vacation",
            amount: this.inputVacation
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "vacation") {
              obj.amount = this.inputVacation;
            } else {
              let eachExpense = {
                key: "vacation",
                amount: this.inputVacation
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refPayroll.focus()
        const tl = new TimelineMax();

        tl.to(
          ".vacation",
          0.5,
          { backgroundColor: "#14777C", color: "#ffffff" },
          0.1
        )
          .to(".vacationText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".vacationInput",
            0.5,
            { backgroundColor: "#14777C", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgVacation", 0.5, { display: "none" }, 0.1)
          .to(
            ".vacationRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.vacation.length > 0 &&
        regEx.test(this.vacation) === false
      ) {
        this.inputVacation = event.target.value;
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
          .to(
            ".vacationRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputVacation = 0;
        this.amountTracker.map(amount => {
          amount.vacation = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "vacation",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "vacation") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refPayroll.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(
            ".vacationRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgVacation", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.payroll = this.inputPayroll;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "payroll",
            amount: this.inputPayroll
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "payroll") {
              obj.amount = this.inputPayroll;
            } else {
              let eachExpense = {
                key: "payroll",
                amount: this.inputPayroll
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refEntertainment.focus()
        const tl = new TimelineMax();

        tl.to(
          ".payroll",
          0.5,
          { backgroundColor: "#26bac2", color: "#ffffff" },
          0.1
        )
          .to(".payrollText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".payrollInput",
            0.5,
            { backgroundColor: "#26bac2", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgPayroll", 0.5, { display: "none" }, 0.1)
          .to(
            ".payrollRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.payroll.length > 0 &&
        regEx.test(this.payroll) === false
      ) {
        this.inputPayroll = event.target.value;

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
          .to(
            ".payrollRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputPayroll = 0;
        this.amountTracker.map(amount => {
          amount.payroll = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "payroll",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "payroll") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refEntertainment.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(
            ".payrollRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgPayroll", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.entertainment = this.inputEntertainment;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "entertainment",
            amount: this.inputEntertainment
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "entertainment") {
              obj.amount = this.inputEntertainment;
            } else {
              let eachExpense = {
                key: "entertainment",
                amount: this.inputEntertainment
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refInvestment.focus()
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
          .to(".errorMsgEntertainment", 0.5, { display: "none" }, 0.1)
          .to(
            ".entertainmentRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.entertainment.length > 0 &&
        regEx.test(this.entertainment) === false
      ) {
        this.inputEntertainment = event.target.value;
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
          .to(
            ".entertainmentRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputEntertainment = 0;
        this.amountTracker.map(amount => {
          amount.entertainment = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "entertainment",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "entertainment") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refInvestment.focus()
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
          .to(
            ".entertainmentRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgEntertainment", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
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
        this.amountTracker.map(amount => {
          amount.investment = this.inputInvestment;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "investment",
            amount: this.inputInvestment
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "investment") {
              obj.amount = this.inputInvestment;
            } else {
              let eachExpense = {
                key: "investment",
                amount: this.inputInvestment
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refButton.focus()
        const tl = new TimelineMax();

        tl.to(
          ".investment",
          0.5,
          { backgroundColor: "#90e831", color: "#ffffff" },
          0.1
        )
          .to(".investmentText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".investmentInput",
            0.5,
            { backgroundColor: "#90e831", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgInvestment", 0.5, { display: "none" }, 0.1)
          .to(
            ".investmentRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.investment.length > 0 &&
        regEx.test(this.investment) === false
      ) {
        this.inputInvestment = event.target.value;
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
          .to(
            ".investmentRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
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
        this.inputInvestment = 0;
        this.amountTracker.map(amount => {
          amount.investment = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "investment",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "investment") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refButton.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
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
          .to(
            ".investmentRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgInvestment", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputCharityAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.charity.charAt(0) === "N") {
        this.charity = this.charity.substr(1);
      }
      if (this.charity.length > 0 && regEx.test(this.charity) === true) {
        this.inputCharity = event.target.value;
        if (this.inputCharity.charAt(0) === "N") {
          this.inputCharity = this.inputCharity.substr(1);
        }
        this.charity = `N${this.inputCharity}`;
        this.amountTracker.map(amount => {
          amount.charity = this.inputCharity;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "charity",
            amount: this.inputCharity
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "charity") {
              obj.amount = this.inputCharity;
            } else {
              let eachExpense = {
                key: "charity",
                amount: this.inputCharity
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refButton.focus()
        const tl = new TimelineMax();

        tl.to(
          ".charity",
          0.5,
          { backgroundColor: "#FF0000", color: "#ffffff" },
          0.1
        )
          .to(".charityText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".charityInput",
            0.5,
            { backgroundColor: "#FF0000", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgCharity", 0.5, { display: "none" }, 0.1)
          .to(
            ".charityRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.charity.length > 0 &&
        regEx.test(this.charity) === false
      ) {
        this.inputCharity = event.target.value;
        const tl = new TimelineMax();

        tl.to(
          ".charity",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".charityText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".charityInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(
            ".charityRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgCharity",
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
        this.inputCharity = 0;
        this.amountTracker.map(amount => {
          amount.charity = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "charity",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "charity") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refButton.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        const tl = new TimelineMax();

        tl.to(
          ".charity",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".charityText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".charityInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(
            ".charityRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgCharity", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputCardPurchasesAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.cardPurchases.charAt(0) === "N") {
        this.cardPurchases = this.cardPurchases.substr(1);
      }
      if (
        this.cardPurchases.length > 0 &&
        regEx.test(this.cardPurchases) === true
      ) {
        this.inputCardPurchases = event.target.value;
        if (this.inputCardPurchases.charAt(0) === "N") {
          this.inputCardPurchases = this.inputCardPurchases.substr(1);
        }
        this.cardPurchases = `N${this.inputCardPurchases}`;
        this.amountTracker.map(amount => {
          amount.cardPurchases = this.inputCardPurchases;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "cardPurchases",
            amount: this.inputCardPurchases
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "cardPurchases") {
              obj.amount = this.inputCardPurchases;
            } else {
              let eachExpense = {
                key: "cardPurchases",
                amount: this.inputCardPurchases
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refButton.focus()
        const tl = new TimelineMax();

        tl.to(
          ".cardPurchases",
          0.5,
          { backgroundColor: "#1B5ECE", color: "#ffffff" },
          0.1
        )
          .to(".cardPurchasesText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".cardPurchasesInput",
            0.5,
            { backgroundColor: "#1B5ECE", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgCardPurchases", 0.5, { display: "none" }, 0.1)
          .to(
            ".cardPurchasesRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.cardPurchases.length > 0 &&
        regEx.test(this.cardPurchases) === false
      ) {
        this.inputCardPurchases = event.target.value;
        const tl = new TimelineMax();

        tl.to(
          ".cardPurchases",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".cardPurchasesText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".cardPurchasesInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(
            ".cardPurchasesRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgCardPurchases",
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
        this.inputCardPurchases = 0;
        this.amountTracker.map(amount => {
          amount.cardPurchases = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "cardPurchases",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "cardPurchases") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refButton.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        const tl = new TimelineMax();

        tl.to(
          ".cardPurchases",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".cardPurchasesText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".cardPurchasesInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(
            ".cardPurchasesRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgCardPurchases", 0.5, { display: "none" }, 0.1);
        // this.btnDisable()
        this.inputAmount();
      }
    },
    inputHouseholdAmount() {
      let regEx = /^[0-9]*$/gm;
      this.initialTrackerDetails();
      if (this.household.charAt(0) === "N") {
        this.household = this.household.substr(1);
      }
      if (this.household.length > 0 && regEx.test(this.household) === true) {
        this.inputHousehold = event.target.value;
        if (this.inputHousehold.charAt(0) === "N") {
          this.inputHousehold = this.inputHousehold.substr(1);
        }
        this.household = `N${this.inputHousehold}`;
        this.amountTracker.map(amount => {
          amount.household = this.inputHousehold;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "household",
            amount: this.inputHousehold
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "household") {
              obj.amount = this.inputHousehold;
            } else {
              let eachExpense = {
                key: "household",
                amount: this.inputHousehold
              };
              this.maxExpense.push(eachExpense);
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        // this.$refs.refButton.focus()
        const tl = new TimelineMax();

        tl.to(
          ".household",
          0.5,
          { backgroundColor: "#1B5ECE", color: "#ffffff" },
          0.1
        )
          .to(".householdText", 0.5, { color: "#ffffff" }, 0.1)
          .to(
            ".householdInput",
            0.5,
            { backgroundColor: "#1B5ECE", color: "#ffffff" },
            0.1
          )
          .to(".errorMsgHousehold", 0.5, { display: "none" }, 0.1)
          .to(
            ".householdRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        // this.btnEnabled()
        this.inputAmount();
      } else if (
        this.household.length > 0 &&
        regEx.test(this.household) === false
      ) {
        this.inputHousehold = event.target.value;
        const tl = new TimelineMax();

        tl.to(
          ".household",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".householdText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".householdInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(
            ".householdRadio",
            0.5,
            { opacity: "1", pointerEvents: "visible", cursor: "pointer" },
            0.1
          );
        TweenMax.fromTo(
          ".errorMsgHousehold",
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
        this.inputHousehold = 0;
        this.amountTracker.map(amount => {
          amount.household = 0;
        });
        if (this.maxExpense.length === 0) {
          let eachExpense = {
            key: "household",
            amount: 0
          };
          this.maxExpense.push(eachExpense);
        } else {
          this.maxExpense.map(obj => {
            if (obj.key === "household") {
              obj.amount = 0;
            }
          });
        }
        localStorage.setItem("max_expense", JSON.stringify(this.maxExpense));
        // this.$refs.refButton.focus()
        localStorage.setItem(
          "amount_tracker",
          JSON.stringify(this.amountTracker)
        );
        const tl = new TimelineMax();

        tl.to(
          ".household",
          0.5,
          { backgroundColor: "#ffffff", color: "#3a3737" },
          0.1
        )
          .to(".householdText", 0.5, { color: "#3a3737" }, 0.1)
          .to(
            ".householdInput",
            0.5,
            { backgroundColor: "#f1f1f1", color: "#252525" },
            0.1
          )
          .to(
            ".householdRadio",
            0.5,
            { opacity: "0", pointerEvents: "none" },
            0.1
          )
          .to(".errorMsgHousehold", 0.5, { display: "none" }, 0.1);
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
        Number(this.inputInvestment) +
        Number(this.inputCardPurchases) +
        Number(this.inputCharity) +
        Number(this.inputHousehold);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main";
@import "@/assets/styles/trackerPage";

.slider {
  display: flex;
  width: 400%;
}
.slider.is-animating {
  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);
  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);
  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1),
    -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);
}

.slider-pagination {
  pointer-events: none;
  text-align: center;
  width: 100%;
}
.slider-pagination > * {
  border-radius: 40%;
  background-color: rgba(244, 112, 121, 0.2);
  display: inline-block;
  padding: 0.3rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition: background-color 250ms;
  width: 2rem;
}
.slider-pagination > *.is-active {
  background-color: $color-btn-bkg;
}

.slider-panel {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;

  @media screen and (max-width: 475px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 375px) {
    padding: 0 1rem;
  }

  .card-transport,
  .card-transfer,
  .card-eating,
  .card-bills,
  .card-family,
  .card-groceries,
  .card-shopping,
  .card-care,
  .card-vacation,
  .card-payroll,
  .card-charity,
  .card-refund,
  .card-cardPurchases,
  .card-entertainment,
  .card-household,
  .card-investment {
    width: 18rem;
    // padding: 0rem 0;
    padding-bottom: 0.5rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 2rem 0;
    margin-top: 0;
    background-color: #ffffff;
    // flex: 1 0 25%;

    @media screen and (max-width: 600px) {
      width: 15rem;
    }

    @media screen and (max-width: 425px) {
      width: 12rem;
    }

    @media screen and (max-width: 320px) {
      width: 10rem;
    }

    .radio {
      align-self: flex-end;
      margin-right: 1.5rem;
      font-size: 2rem;
      font-weight: 900;
    }

    ::placeholder {
      opacity: 0.48;
      font-family: Graphik;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.58px;
      color: #252525;
    }

    :focus {
      outline: none;
    }

    .card-img {
      width: 30%;
      margin-bottom: 0.5rem;
    }

    .error {
      display: none;
      color: red;
    }

    .card-text {
      width: 100%;
      margin-top: 0.5rem;
      font-family: Graphik;
      font-size: 1.2rem;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.41px;
      text-align: center;
      color: #3a3737;

      @media screen and (max-width: 320px) {
        font-size: 1rem;
      }
    }

    .input {
      width: 80%;
      font-size: 1.8rem;
      text-align: center;
      margin-top: 1.6rem;
      margin-bottom: 0.8rem;
      padding: 0.5rem 0;
      border: none;
      border-radius: 3px;
      background-color: #f1f1f1;
    }
  }

  .card-transport,
  .card-eating,
  .card-family,
  .card-shopping,
  .card-vacation,
  .card-entertainment,
  .card-charity,
  .card-cardPurchases {
    margin-right: 3rem;
  }
}

.has-slider {
  display: none;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media screen and (max-width: 700px) {
    display: block;
  }
}
</style>
