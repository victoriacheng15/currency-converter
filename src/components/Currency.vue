<script setup lang="ts">
import { css } from "../../styled-system/css"
import { watch } from "vue"
import { useFetchRate } from "../composables/useFetchRate";
import SectionWrapper from "./SectionWrapper.vue";
import LabelText from "./LabelText.vue"
import DisplayCurrency from "./DisplayCurrency.vue";

const {
  base,
  currencies,
  exchangeRate,
  errorMsg,
  currencyList,
  filteredList,
  getExchangeRate,
  enterAmount,
  displayExchangeRate
} = useFetchRate()


watch(base, (newBase) => {
  currencies.value = currencies.value.filter((code) => code !== newBase);
});

const inputStyles = css({ p: '1.5', borderRadius: 'lg', bg: 'gray.300', fontSize: 'lg', textAlign: 'right', flexGrow: '1' })
</script>

<template>
  <SectionWrapper>
    <LabelText forElement="selectCurrency" text="The currency I have:" />
    <select @click="getExchangeRate" id="selectCurrency" v-model="base" :class="css({ p: '2', bg: 'gray.200' })">
      <option v-for="{ code, name } in currencyList" :value="code" :key="code">
        {{ name }} ({{ code }})
      </option>
    </select>
    <template v-slot:secondLabel>
      <LabelText forElement="selectCurrencies" text="The currencies I want:" />
      <select @click="getExchangeRate" id="selectCurrencies" v-model="currencies"
        :class="css({ p: '2', bg: 'gray.200', h: '250px' })" multiple>
        <option v-for="{ code, name } in filteredList" :value="code" :key="name" :class="css({ py: '1' })">
          {{ name }} ({{ code }})
        </option>
      </select>
    </template>
  </SectionWrapper>
  <SectionWrapper>
    <div :class="css({ display: 'flex', alignItems: 'center' })">
      <label :class="css({ srOnly: true })" for="amountInput">Enter Amount</label>
      <DisplayCurrency :displayCurrency="base" />
      <input id="amountInput" type="number" placeholder="Enter amount" v-model="enterAmount" :class="inputStyles"
        role="textbox" />
    </div>

    <template v-slot:secondLabel>
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <ul v-else :class="css({ display: 'grid', gap: '2' })">
        <li v-for="currency in currencies" :key="currency"
          :class="css({ display: 'flex', flexDir: 'column', gap: '1' })">
          <div :class="css({ display: 'flex', alignItems: 'center' })">
            <DisplayCurrency :displayCurrency="currency" />
            <input type="number" :value="displayExchangeRate(currency).toFixed(2)" :class="inputStyles" disabled />
          </div>
          <span v-if="exchangeRate[currency]" :class="css({ textAlign: 'right', color: 'gray.500' })">Rate: {{
      exchangeRate[currency] }}</span>
        </li>
      </ul>
    </template>
  </SectionWrapper>
</template>../composables/useFetchRate
