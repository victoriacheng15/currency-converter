<script setup lang="ts">
import { css } from "../styled-system/css"
import { API_URL } from "./utils";

console.log(API_URL)
</script>

<template>
  <div :class="css({ fontSize: '5xl', fontWeight: 'bold', color: 'blue' })">Hello 🐼!</div>
</template>
