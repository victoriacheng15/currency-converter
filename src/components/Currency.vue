<script setup lang="ts">
import { css } from "../../styled-system/css"
import { ref, computed, watch } from "vue"
import SectionWrapper from "./SectionWrapper.vue";
import LabelText from "./LabelText.vue"
import { currencies as currencyList } from '../utils';
import { BASE_URL, API_KEY } from "../utils";
import DisplayCurrency from "./DisplayCurrency.vue";

const base = ref("CAD")
const currencies = ref<string[]>([])
const exchangeRate = ref<Record<string, string>>({})
const enterAmount = ref(10)

const filteredList = computed(() => currencyList.filter(({ code }) => code !== base.value))

watch(base, (newBase) => {
  currencies.value = currencies.value.filter((code) => code !== newBase);
});

const getExchangeRate = async () => {
  try {
    const response = await fetch(`${BASE_URL}?base_currency=${base.value}&currencies=${currencies.value}`, {
      headers: {
        "apikey": `${API_KEY}`
      }
    })
    const data = await response.json()

    if (response.ok) {
      exchangeRate.value = data.data
    }
  } catch (error) {
    console.log(error)
  }
}

function displayExchangeValue(currency: string) {
  const calculatedValue = enterAmount.value * Number(exchangeRate.value[currency])
  return Math.floor(calculatedValue * 100) / 100
}
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
      <input id="amountInput" type="number" placeholder="Enter amount" v-model="enterAmount"
        :class="css({ p: '1.5', borderRadius: 'lg', bg: 'gray.300', fontSize: 'lg', textAlign: 'right', flexGrow: '1' })"
        role="textbox" />
    </div>

    <template v-slot:secondLabel>
      <ul :class="css({ display: 'grid', gap: '2' })">
        <li v-for="currency in currencies" :key="currency"
          :class="css({ display: 'flex', flexDir: 'column', gap: '1' })">
          <div :class="css({ display: 'flex', alignItems: 'center' })">
            <DisplayCurrency :displayCurrency="currency" />
            <input type="number" :value="displayExchangeValue(currency).toFixed(2)"
              :class="css({ p: '1.5', borderRadius: 'lg', bg: 'gray.300', fontSize: 'lg', flexGrow: '1', textAlign: 'right' })"
              disabled />
          </div>
          <span v-if="exchangeRate[currency]" :class="css({ textAlign: 'right', color: 'gray.500' })">Rate: {{
      exchangeRate[currency] }}</span>
        </li>
      </ul>
    </template>
  </SectionWrapper>
</template>
