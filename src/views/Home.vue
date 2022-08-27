<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="home-content">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import FooterNav from "@/components/FooterNav.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopNav,
    FooterNav
  },
});
</script>
<style lang="scss" scoped>
.home {
}
.home-content{
  min-height: 80vh;
}
</style> 
