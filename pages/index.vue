<script setup>
import { ref, computed, onMounted } from 'vue';
import debounce from 'lodash/debounce';
import PostCard from '~/components/PostCard.vue';
import SearchInput from '~/components/SearchInput.vue';

const posts = ref([]);
const loading = ref(true);
const error = ref(false);
const searchQuery = ref('');

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    posts.value = await response.json();
  } catch (err) {
    console.error('Error fetching posts:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const filteredPosts = computed(() => {
  if (!searchQuery.value.trim()) {
    return posts.value; // Return all posts if the search query is empty
  }
  const query = searchQuery.value.toLowerCase();
  return posts.value.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.body.toLowerCase().includes(query),
  );
});

// Debounced Search
const debouncedUpdateQuery = debounce((value) => {
  searchQuery.value = value;
}, 300);

onMounted(fetchPosts);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8 text-center text-textDark">
      {{ $t('home.title') }}
    </h1>
    <SearchInput
      :value="searchQuery"
      :placeholder="$t('home.searchPlaceholder')"
      @update:value="debouncedUpdateQuery"
    />
    <div
      v-if="error"
      class="bg-red-100 text-red-700 border border-red-500 p-4 rounded mb-6"
    >
      <p>{{ $t('common.errorMsg') }}</p>
    </div>
    <!-- Skeleton Loader -->
    <div
      v-if="loading && !error"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="p-4 rounded-lg bg-background animate-pulse"
      >
        <div class="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div class="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
    <div
      v-else-if="filteredPosts.length === 0 && !loading"
      class="text-center text-gray-500 mt-8"
    >
      <p>{{ $t('home.postsEmptyText') }}</p>
    </div>
    <div
      v-else-if="!loading && !error"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
