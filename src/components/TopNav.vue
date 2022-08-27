<template>
   <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <el-menu-item index="0"><h2>后台管理系统</h2></el-menu-item>
    <div class="flex-grow" />
    <span style="line-height: 58px;margin-right: 10px;">
      <el-popconfirm title="确定要退出?"
                     confirmButtonText="退出"
                     cancelButtonText="取消"
                     @confirm="handleExit">
        <template #reference>
          <el-button type="primary" link>
            退出登录
          </el-button>
        </template>
      </el-popconfirm>
    </span>
  </el-menu>
</template>
<script lang="ts">
import {defineComponent, reactive,toRefs} from 'vue'
import {TopNav,TopData } from "@/type/topNav"
import router from '@/router'
export  default defineComponent({
  setup(){
    const top_data = reactive(new TopData())
    const handleRouter= ()=>{
      router.push('Login')
    }
return {
      ...toRefs(top_data),
      handleRouter
}
  }
})
</script>
<style lang="scss" scoped>
.el-menu-demo{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
  .flex-grow {
    flex-grow: 1;
        display: flex;
    justify-content: space-between;
  }
</style>