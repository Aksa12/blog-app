<script setup>
import { defineProps } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  className: {
    type: String,
    default: '',
  },
  onClick: {
    type: Function,
    default: null,
  },
})
</script>

<template>
  <button
    :class="[
      'inline-block px-4 py-2 rounded-lg transition-colors font-medium',
      variant === 'primary' ? 'bg-button text-white hover:bg-buttonHover' : '',
      className,
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>
