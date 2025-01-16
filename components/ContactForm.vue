<template>
  <form
    class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md"
    @submit.prevent="submitForm"
  >
    <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
    <TextField
      id="name"
      v-model="formData.name"
      label="Name"
      placeholder="Your Name"
      :error="errors.name"
    />
    <TextField
      id="email"
      v-model="formData.email"
      label="Email"
      type="email"
      placeholder="Your Email"
      :error="errors.email"
    />
    <TextField
      id="message"
      v-model="formData.message"
      label="Message"
      type="textarea"
      placeholder="Your Message"
      :error="errors.message"
    />
    <CustomButton class-name="w-full" variant="primary">
      Send Message
    </CustomButton>
  </form>
</template>

<script>
import TextField from './TextField.vue'
import CustomButton from './CustomButton.vue'

export default {
  components: {
    TextField,
    CustomButton,
  },
  emits: ['submitSuccess'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      errors: {},
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required.'
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required.'
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Email is invalid.'
      }

      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required.'
      }

      return Object.keys(this.errors).length === 0
    },
    submitForm() {
      if (this.validateForm()) {
        this.resetForm()
        this.$emit('submitSuccess')
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        message: '',
      }
      this.errors = {} // Clear validation errors
    },
  },
}
</script>
