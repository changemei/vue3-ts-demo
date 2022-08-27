<template>
  <div class="footer">
    <div
      class="qq-btn"
      @click="jumpService"
    >
      <!-- <img class="qq" src="../../static/" /> -->
      <span> QQ咨询</span>
    </div>
    <div
      class="zhiding"
      @click="zhiding()"
    >
      <!-- <img src="../../static/" /> -->
    </div>
    <div class="copy">
      <div class="desc">copyright 内容</div>
      <p @click="footBar">ICP证号&nbsp;:&nbsp; 证号</p>
    </div>
  </div>
</template>
<script  lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    const footBar=()=>{

      window.location.href = "http://beian.miit.gov.cn";
    };
    const zhiding= ()=>{
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    };
    const jumpService=()=>{

      location.href = "tencent://message/?uin=123123123";
    }
    return {
      zhiding,
      footBar,
      jumpService
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
