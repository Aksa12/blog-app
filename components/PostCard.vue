<template>
  <div
    class="p-6 rounded-lg bg-card shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between gap-1"
  >
    <div>
      <h2 class="text-xl font-semibold mb-2 text-textDark">{{ post.title }}</h2>
      <p class="text-gray-600 mb-4 whitespace-pre-line">
        {{ getExcerpt(post.body) }}
        <span v-if="post.body.length > 100">
          <router-link
            :to="`/posts/${post.id}`"
            class="text-button hover:text-buttonHover font-medium"
            >Read More</router-link
          >
        </span>
      </p>
    </div>
    <div>
      <CustomButton :on-click="() => $router.push(`/posts/${post.id}`)">
        View Details
      </CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'

export default {
  components: {
    CustomButton,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getExcerpt(text) {
      return text.length > 100 ? text.substring(0, 100) + '...' : text
    },
  },
}
</script>
