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

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary', // Default button style
    },
    className: {
      type: String,
      default: '', // Extra classes
    },
    onClick: {
      type: Function,
      default: null, // Optional click handler
    },
  },
}
</script>
