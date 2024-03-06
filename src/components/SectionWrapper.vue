<script setup lang="ts">
import { css } from "../../styled-system/css"

const styles = css({ display: 'grid', gap: '2' })
</script>

<template>
  <section
    :class="css({ p: '4', display: 'flex', gap: '8', justifyContent: 'space-evenly', alignItems: 'flex-start', borderWidth: '2', borderRadius: 'md', borderColor: 'gray.400' })">
    <div :class="styles">
      <slot></slot>
    </div>
    <div :class="styles">
      <slot name="secondLabel"></slot>
    </div>
  </section>
</template>
