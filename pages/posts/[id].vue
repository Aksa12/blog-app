<template>
  <div class="p-6 max-w-4xl mx-auto">
    <!-- Back Button -->
    <CustomButton :on-click="goBack" class="mb-6">
      <span>&larr;</span> Back
    </CustomButton>

    <!-- Skeleton Loader -->
    <div
      v-if="loading"
      class="p-4 rounded-lg bg-background shadow-card animate-pulse"
    >
      <div class="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div class="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div class="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div class="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
    </div>

    <!-- Error Message -->
    <div
      v-if="error"
      class="bg-red-100 text-red-700 border border-red-500 p-4 rounded mb-6"
    >
      <p>An error occurred while loading the post. Please try again later.</p>
    </div>

    <!-- Post Content -->
    <div v-if="!loading && !error" class="p-6 rounded-lg bg-card shadow-card">
      <h1 class="text-3xl font-bold text-textDark mb-4">{{ post.title }}</h1>
      <p class="text-gray-700 whitespace-pre-line">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CustomButton from '~/components/CustomButton.vue'

export default {
  components: {
    CustomButton,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const post = ref(null)
    const loading = ref(true)
    const error = ref(false)

    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        post.value = await response.json()
      } catch (err) {
        console.error('Error fetching post:', err)
        error.value = true
      } finally {
        loading.value = false
      }
    }

    const goBack = () => {
      if (window.history.length > 1) {
        router.go(-1) // Go back to the previous page
      } else {
        router.push('/') // Fallback to homepage if no history exists
      }
    }

    onMounted(fetchPost)

    return {
      post,
      loading,
      error,
      goBack,
    }
  },
}
</script>
