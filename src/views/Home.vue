<template>
  <div class="home">
    <top-nav></top-nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TopNav from "@/components/TopNav.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopNav,
  },
});
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-grow: 1;
}
</style> 
