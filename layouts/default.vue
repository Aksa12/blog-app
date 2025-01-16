<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, setLocale, availableLocales } = useI18n();

// Locale display names
const localeNames = {
  en: 'English',
  de: 'German',
};

const mobileMenuOpen = ref(false);

function changeLanguage(event) {
  setLocale(event.target.value);
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background">
    <!-- Header -->
    <header class="bg-gray-800 text-white shadow-md sticky top-0 z-20">
      <nav class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <h1 class="text-2xl font-bold tracking-tight">
          {{ $t('header.title') }}
        </h1>
        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          @click="toggleMobileMenu"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Navigation and Language Selector -->
        <div class="hidden lg:flex lg:items-center lg:space-x-6">
          <!-- Navigation Links -->
          <ul class="flex space-x-6">
            <li>
              <a href="/" class="hover:underline">{{ $t('header.home') }}</a>
            </li>
            <li>
              <a href="/contact-us" class="hover:underline">{{
                $t('header.contact')
              }}</a>
            </li>
          </ul>
          <!-- Language Dropdown -->
          <div class="relative">
            <label for="language-selector" class="sr-only">{{
              $t('header.language')
            }}</label>
            <select
              id="language-selector"
              v-model="locale"
              class="appearance-none bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600 transition-all pr-8"
              @change="changeLanguage"
            >
              <option
                v-for="currentLocale in availableLocales"
                :key="currentLocale"
                :value="currentLocale"
              >
                {{ localeNames[currentLocale] }}
              </option>
            </select>
            <!-- Dropdown Icon -->
            <span
              class="absolute right-3 top-2.5 pointer-events-none text-gray-400"
            >
              ▼
            </span>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div class="lg:hidden" :class="mobileMenuOpen ? 'block' : 'hidden'">
        <ul class="flex flex-col bg-gray-700 text-white space-y-4 px-4 py-4">
          <li>
            <a href="/" class="block hover:underline">{{
              $t('header.home')
            }}</a>
          </li>
          <li>
            <a href="/contact-us" class="block hover:underline">{{
              $t('header.contact')
            }}</a>
          </li>
          <li class="relative">
            <label for="mobile-language-selector" class="sr-only">{{
              $t('header.language')
            }}</label>
            <select
              id="mobile-language-selector"
              v-model="locale"
              class="appearance-none bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-600 transition-all w-full"
              @change="changeLanguage"
            >
              <option
                v-for="currentLocale in availableLocales"
                :key="currentLocale"
                :value="currentLocale"
              >
                {{ localeNames[currentLocale] }}
              </option>
            </select>
            <!-- Dropdown Icon -->
            <span
              class="absolute right-3 top-2.5 pointer-events-none text-gray-400"
            >
              ▼
            </span>
          </li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-6">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center p-4">
      <p>{{ $t('footer.copyright') }}</p>
    </footer>
  </div>
</template>
