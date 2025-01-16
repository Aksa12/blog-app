<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TextField from './TextField.vue'
import CustomButton from './CustomButton.vue'

const emit = defineEmits(['submitSuccess'])

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  message: '',
})
const errors = ref({})

const validateForm = () => {
  errors.value = {}
  if (!formData.value.name.trim()) {
    errors.value.name = t('contactUs.errMsg.nameRequired')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email.trim()) {
    errors.value.email = t('contactUs.errMsg.emailRequired')
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = t('contactUs.errMsg.emailInvalid')
  }

  if (!formData.value.message.trim()) {
    errors.value.message = t('contactUs.errMsg.messageRequired')
  }

  return Object.keys(errors.value).length === 0
}

const submitForm = () => {
  if (validateForm()) {
    resetForm()
    emit('submitSuccess')
  }
}

// Reset the form
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    message: '',
  }
  errors.value = {}
}
</script>

<template>
  <form
    class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md"
    @submit.prevent="submitForm"
  >
    <!-- Translated Title -->
    <h2 class="text-2xl font-bold mb-6">{{ t('contactUs.title') }}</h2>

    <!-- Name Field -->
    <TextField
      id="name"
      v-model="formData.name"
      :label="$t('contactUs.nameLabel')"
      :placeholder="$t('contactUs.namePlaceholder')"
      :error="errors.name"
    />

    <!-- Email Field -->
    <TextField
      id="email"
      v-model="formData.email"
      :label="$t('contactUs.emailLabel')"
      type="email"
      :placeholder="$t('contactUs.emailPlaceholder')"
      :error="errors.email"
    />

    <!-- Message Field -->
    <TextField
      id="message"
      v-model="formData.message"
      :label="$t('contactUs.messageLabel')"
      type="textarea"
      :placeholder="$t('contactUs.messagePlaceholder')"
      :error="errors.message"
    />

    <!-- Submit Button -->
    <CustomButton class-name="w-full" variant="primary">
      {{ $t('contactUs.sendMessageCTA') }}
    </CustomButton>
  </form>
</template>
