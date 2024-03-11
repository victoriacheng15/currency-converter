<script setup lang="ts">
import { css } from "../../styled-system/css";

const { displayCurrency } = defineProps({
  displayCurrency: { type: String, default: "" },
});
</script>

<template>
  <span :class="css({ flexBasis: '30px' })">{{ displayCurrency }}</span>
  <span :class="css({ mx: '1', fontSize: 'lg' })">$</span>
</template>
