<script setup lang="ts">
import { css } from "../../styled-system/css"
import { ref, computed, watch } from "vue"
import SectionWrapper from "./SectionWrapper.vue";
import LabelText from "./LabelText.vue"
import { currencies as currencyList } from '../utils';
import { BASE_URL } from "../utils";

const base = ref("CAD")
const currencies = ref<string[]>([])
const exchangeRate = ref<Record<string, string>>({})

const filteredList = computed(() => currencyList.filter(({ code }) => code !== base.value))

watch(base, (newBase) => {
  currencies.value = currencies.value.filter((code) => code !== newBase);
});

const getExchangeRate = async () => {
  try {
    const response = await fetch(`${BASE_URL}&base_currency=${base.value}&currencies=${currencies.value}`)
    const data = await response.json()
    if (response.ok) {
      exchangeRate.value = data.data
    }
  } catch (error) {
    console.log(error)
  }
}

function formattedRate(rate: string) {
  return Number(rate).toFixed(2)
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
        :class="css({ p: '2', bg: 'gray.200', h: '200px' })" multiple>
        <option v-for="{ code, name } in filteredList" :value="code" :key="name" :class="css({ py: '1' })">
          {{ name }} ({{ code }})
        </option>
      </select>
    </template>
  </SectionWrapper>
  <SectionWrapper>
    <h2>You selected {{ base }}</h2>
    <div>
      <label :class="css({ srOnly: true })" for="amountInput">Enter Amount</label>
      <span>{{ base }}</span>
      <span :class="css({ mx: '1' })">$</span>
      <input id="amountInput" type="number" placeholder="Enter amount"
        :class="css({ p: '1', bg: 'red.100', borderRadius: 'lg', textAlign: 'right' })" role="textbox" />
    </div>

    <template v-slot:secondLabel>
      <h2>Selected Currencies</h2>
      <ul :class="css({ display: 'grid', gap: '2' })">
        <li v-for="currency in currencies" :key="currency"
          :class="css({ display: 'flex', flexDir: 'column', gap: '1' })">
          <div>
            <span :class="css({ flexBasis: '50px' })">{{ currency }}</span>
            <span :class="css({ mx: '1' })">$</span>
            <input type="number" value="1"
              :class="css({ p: '1', bg: 'red.100', borderRadius: 'lg', flexGrow: '1', textAlign: 'right' })" disabled />
          </div>
          <span :class="css({ textAlign: 'right', color: 'gray.500' })">Rate: {{ formattedRate(exchangeRate[currency])
            }}</span>
        </li>
      </ul>
    </template>
  </SectionWrapper>
</template>
