<template>
  <div class="router--wrapper">
    <header>
      <h2 class="title">Personal info</h2>
      <span class="description"
        >Please provide your name, email, address and phone number.</span
      >
    </header>

    <main class="main--wrapper">
      <div class="input--box">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />
      </div>

      <div class="input--box">
        <label for="email">Email Address</label>
        <input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>

      <div class="input--box">
        <label for="phone">Phone Number</label>
        <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
      </div>

      <footer>
        <button class="next--button">Next Step</button>
      </footer>
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
