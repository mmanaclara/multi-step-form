<template>
  <div class="home--container">
    <div class="wrapper">
      <aside>
        <img
          alt="Sidebar background image"
          src="@/assets/images/bg-sidebar-desktop.svg"
        />
        <div class="sidebar--info">
          <nav v-for="item in stepsInfo" :key="item.id">
            <RouterLink :to="item.link">
              <StepMenuItem
                :step="item.step"
                :subtitle="item.subtitle"
                :title="item.title"
              />
            </RouterLink>
          </nav>
        </div>
      </aside>

      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import StepMenuItem from "./components/ItemStepMenu.vue";

// eslint-disable-next-line no-unused-vars

const stepsInfo = [
  {
    id: 1,
    step: 1,
    subtitle: "Step 1",
    title: "Your info",
    link: "/",
  },
  {
    id: 2,
    step: 2,
    subtitle: "Step 2",
    title: "Select plan",
    link: "/selectyourplan",
  },
  {
    id: 3,
    step: 3,
    subtitle: "Step 3",
    title: "Add-ons",
    link: "/pickaddons",
  },
  {
    id: 4,
    step: 4,
    subtitle: "Step 4",
    title: "Summary",
    link: "/finishingup",
  },
];
</script>

<style lang="css" scoped>
.home--container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}

.wrapper {
  width: 58.75rem;
  display: grid;
  grid-template-columns: 266px 1fr;
  margin-inline: auto;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  min-height: 540px;
}

aside {
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  margin-right: 0;
  position: relative;
}

aside img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  /* display: none; */
}

.sidebar--info {
  position: absolute;
  z-index: 4;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
