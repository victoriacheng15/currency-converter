<script setup lang="ts">
import { css } from "../../styled-system/css";

const styles = css({ display: "grid", gap: "2", w: "40%" });
</script>

<template>
  <section
    :class="
      css({
        p: '4',
        display: 'flex',
        gap: '20',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: '2',
        borderRadius: 'md',
        borderColor: 'gray.400',
        mb: '6',
      })
    "
  >
    <div :class="styles">
      <slot></slot>
    </div>
    <div :class="styles">
      <slot name="secondLabel"></slot>
    </div>
  </section>
</template>
