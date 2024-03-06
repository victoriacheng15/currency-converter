<script setup lang="ts">
import { css } from "../../styled-system/css"

const { forElement, text } = defineProps<{ forElement: string, text: string }>()
</script>

<template>
  <label :for="forElement" :class="css({ fontSize: 'xl', textAlign: 'center' })">
    {{ text }}
  </label>
</template>
