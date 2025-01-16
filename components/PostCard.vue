<script setup>
import { useRouter } from 'vue-router';
import CustomButton from './CustomButton.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const getExcerpt = (text) => {
  return text.length > 100 ? text.substring(0, 100) + '...' : text;
};

const navigateToDetails = () => {
  router.push(`/posts/${props.post.id}`);
};
</script>

<template>
  <div
    class="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between gap-1"
  >
    <div>
      <h2 class="text-xl font-semibold mb-2 text-textDark">{{ post.title }}</h2>
      <p class="text-gray-600 mb-4 whitespace-pre-line">
        {{ getExcerpt(post.body) }}
        <span v-if="post.body.length > 100">
          <router-link
            :to="`/posts/${post.id}`"
            class="text-button hover:text-buttonHover font-medium"
            >{{ $t('home.readMoreCTA') }}</router-link
          >
        </span>
      </p>
    </div>
    <div>
      <CustomButton @click="navigateToDetails">
        {{ $t('home.viewDetailsCTA') }}
      </CustomButton>
    </div>
  </div>
</template>
