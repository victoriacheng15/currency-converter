<script setup lang="ts">
import { css } from "../styled-system/css"
import Currency from "./components/Currency.vue";
</script>

<template>
  <div :class="css({ minH: '100vh', bg: 'gray.100' })">
    <div :class="css({ mx: 'auto', maxW: '4xl', px: '4', pt: '8' })">
      <header :class="css({ my: '10' })">
        <h1 :class="css({ fontSize: '4xl', textAlign: 'center' })">Currency Converter</h1>
      </header>
      <main>
        <Currency />
      </main>
    </div>
  </div>
</template>
