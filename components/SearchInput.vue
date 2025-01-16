<template>
  <div class="mb-6">
    <input
      :value="value"
      type="text"
      :placeholder="placeholder"
      class="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-button focus:border-button"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Search by title or content',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const onInput = (event) => {
      emit('update:value', event.target.value)
    }

    return {
      onInput,
    }
  },
}
</script>
