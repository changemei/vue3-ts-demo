<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="home-content">
      <div style=" width:200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          router
        >
        <!-- router 开启路由模式，根据index 标记路由地址 -->
          <el-menu-item :index="item.path" v-for="item in routerList" :key="item.path">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>{{item.meta.title}}</span>
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
import { useRouter } from "vue-router"

export default defineComponent({
  name: "Home",
  components: {
    TopNav,
    FooterNav,
  },

  setup() {
    const router = useRouter()
    const routerList = router.getRoutes().filter(item=>item.meta.isShow)
    console.log(routerList,"router")
    const navData = reactive(new leftNavData())
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return { handleOpen, handleClose,...toRefs(navData),routerList };
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
