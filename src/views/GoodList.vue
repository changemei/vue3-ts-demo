<template>
  <div>

    <el-table
      :data="dataList.computList"
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="id"
        width="150"
      />
      <el-table-column
        prop="title"
        label="title"
        width="120"
      />
      <el-table-column
        prop="introduce"
        label="内容"
        width="520"
      />
      <el-table-column
        prop="userId"
        label="City"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="Operations"
        width="120"
      >
        <template #default>
          <el-button
            link
            type="primary"
            size="small"
          >Detail</el-button>
          <el-button
            link
            type="primary"
            size="small"
          >Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="selectInit.count"
    />
  </div>
</template>
<script  lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { goodListData } from "@/type/goodList";
import { getGoodList } from "@/request/api";
export default defineComponent({
  setup() {
    const data = reactive(new goodListData());
    getGoodList().then((res) => {
      console.log(res, "daad");
      data.listData = res.data;
      data.selectInit.count = res.data.length;
    });
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`);
    };

    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`);
    };
    const dataList = reactive({
      computList: computed(() => {
        return data.listData.slice(
          (data.selectInit.page - 1) * data.selectInit.pageSize,
          data.selectInit.page * data.selectInit.pageSize
        );
      }),
    });
    return {
      dataList,
      handleSizeChange,
      handleCurrentChange,

      ...toRefs(data),
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
