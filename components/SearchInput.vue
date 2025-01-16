<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
})

defineEmits(['update:value'])
</script>

<template>
  <div class="mb-6">
    <input
      :value="value"
      type="text"
      :placeholder="placeholder"
      class="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-button focus:border-button"
      @input="(event) => $emit('update:value', event.target.value)"
    />
  </div>
</template>
