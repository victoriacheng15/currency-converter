<script setup lang="ts">
import { css } from "../../styled-system/css";

const { forElement, text } = defineProps({
  forElement: { type: String, default: "" },
  text: { type: String, default: "" },
});
</script>

<template>
  <label
    :for="forElement"
    :class="css({ fontSize: 'xl', textAlign: 'center' })"
  >
    {{ text }}
  </label>
</template>
