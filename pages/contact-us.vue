<template>
  <div>
    <ContactForm @submit-success="showSnackbar" />

    <!-- Snackbar Notification -->
    <transition name="fade">
      <div
        v-if="snackbarVisible"
        class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Your message has been sent!
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm,
  },
  setup() {
    const snackbarVisible = ref(false)

    const showSnackbar = () => {
      snackbarVisible.value = true
      setTimeout(() => {
        snackbarVisible.value = false
      }, 3000) // Snackbar disappears after 3 seconds
    }

    return {
      snackbarVisible,
      showSnackbar,
    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
