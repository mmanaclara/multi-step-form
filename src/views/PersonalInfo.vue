<template>
  <div class="router--wrapper">
    <header>
      <h2 class="title">Personal info</h2>
      <span class="description">
        Please provide your name, email, address and phone number.
      </span>
    </header>

    <q-form
      class="main--wrapper row q-col-gutter-lg"
      @submit.prevent.stop="onSubmit"
    >
      <div class="input--box">
        <label for="name">Name</label>
        <q-input
          ref="nameRef"
          type="text"
          id="name"
          v-model="name"
          placeholder="e.g. Stephen King"
          lazy-rules
          :rules="nameRules"
        />
      </div>

      <div class="input--box">
        <label for="email">Email Address</label>
        <q-input
          ref="emailRef"
          type="text"
          id="email"
          v-model="email"
          placeholder="e.g. stephenking@lorem.com"
          lazy-rules
          :rules="emailRules"
        />
      </div>

      <div class="input--box">
        <label for="phone">Phone Number</label>
        <q-input
          ref="phoneRef"
          type="tel"
          id="phone"
          v-model="phone"
          placeholder="e.g. +1 234 567 890"
          mask="+# ### ### ###"
          unmasked-value=""
          lazy-rules
          :rules="phoneRules"
        />
      </div>

      <footer>
        <button type="submit" class="next--button">Next Step</button>
      </footer>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function onSubmit(query) {
  console.log("Formulário enviado!");

  router.push({
    name: "selectyourplan",
    query: {
      ...route.query,
      ...query,
    },
  });

  localStorage.name = name.value;
  localStorage.email = email.value;
  localStorage.phone = phone.value;

  if (name.value && email.value && phone.value) {
    nameRef.value.validate();
    emailRef.value.validate();
    phoneRef.value.validate();
  } else return;
}

const name = ref("");
const nameRef = ref(null);
const nameRules = [
  (val) => (val && val.length > 0) || "Name is required",
  (val) => val.length >= 3 || "Name must be valid",
];

const email = ref("");
const emailRef = ref(null);
const emailRules = [
  (val) => (val && val.length > 0) || "Email Address is required",
  isValidEmail(),
];

const phone = ref(null);
const phoneRef = ref(null);
const phoneRules = [
  (val) => (val !== null && val !== "") || "Phone Number is required",
  (val) => val.length === 10 || "Phone Number must be valid",
];

function isValidEmail() {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

  return emailPattern.test(email.value) || "Invalid email";
}

if (localStorage.name) {
  name.value = localStorage.name;
}
if (localStorage.email) {
  email.value = localStorage.email;
}
if (localStorage.phone) {
  phone.value = localStorage.phone;
}
</script>

<style scoped></style>

<!-- <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="e.g. Stephen King"
          @change="validateForm"
        /> -->
