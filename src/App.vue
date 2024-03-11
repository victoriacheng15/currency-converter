<script setup lang="ts">
import { css } from "../styled-system/css";
import CurrencyForm from "./components/CurrencyForm.vue";
import FooterContainer from "./components/FooterContainer.vue";
</script>

<template>
  <div :class="css({ bg: 'gray.100' })">
    <div :class="css({
    minH: '100vh',
    mx: 'auto',
    maxW: '4xl',
    px: '4',
    pt: '8',
    display: 'flex',
    flexDir: 'column',
  })
    ">
      <header :class="css({ my: '10' })">
        <h1 :class="css({ fontSize: '4xl', textAlign: 'center' })">
          Simple Plain Currency Converter
        </h1>
      </header>
      <main :class="css({ mb: 'auto' })">
        <CurrencyForm />
      </main>
      <FooterContainer />
    </div>
  </div>
</template>
