<template>
  <div class="flex flex-col min-h-screen bg-background">
    <!-- Sticky Header -->
    <header class="bg-navigation text-white shadow-md sticky top-0 z-10">
      <nav class="container mx-auto flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold tracking-tight">My Blog</h1>
        <ul class="flex space-x-6">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/contact-us" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-6">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-navigation text-white text-center p-4">
      <p>&copy; 2025 My Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {}
</script>
