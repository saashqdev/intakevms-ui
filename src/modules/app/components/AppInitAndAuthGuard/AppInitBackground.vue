<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'AppInitBackground' })
</script>

<template>
  <div class="login_background v-theme--darkBlue">
    <div class="w-100 h-screen d-flex flex-column align-center justify-center">
      <slot />
    </div>
  </div>
</template>

<style>
.formkit-form#login_form .formkit-outer .formkit-messages {
  display: none;
}
.login_background {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
