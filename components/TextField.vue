<template>
  <div class="mb-4 flex flex-col">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <input
      v-if="type !== 'textarea'"
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-button focus:border-button"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <textarea
      v-else
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      rows="4"
      class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-button focus:border-button"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text', // Supports "text", "email", "textarea", etc.
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
}
</script>
