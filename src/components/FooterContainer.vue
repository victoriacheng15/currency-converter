<script setup lang="ts">
import { css } from "../../styled-system/css";

const year = new Date().getFullYear();
const text = "Simple Plain Currency Converter | Coded with by Victoria Cheng";
</script>

<template>
  <footer :class="css({ py: '2', textAlign: 'center', fontSize: 'xs' })">
    <p :class="css({})">&copy; {{ year }} {{ text }}</p>
    <p>
      Find the source code on
      <a
        :class="css({ textDecoration: 'underline', color: 'blue500' })"
        href="https://github.com/victoriacheng15/currency-converter"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >
    </p>
  </footer>
</template>
