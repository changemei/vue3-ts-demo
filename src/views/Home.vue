<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="home-content">
      <div style=" width:200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="navData.navIndex"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </div>
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import FooterNav from "@/components/FooterNav.vue";
import {leftNavData} from "@/type/leftNav"

export default defineComponent({
  name: "Home",
  components: {
    TopNav,
    FooterNav,
  },
  setup() {
    const navData = reactive(new leftNavData())
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return { handleOpen, handleClose,...toRefs(navData) };
  },
});
</script>
<style lang="scss" scoped>
.home {
}
.home-content {
  min-height: 80vh;
  display: flex;
  justify-content: flex-start;
}
.el-menu-vertical-demo {
  min-height: calc(100vh - 58px);
}
</style> 
