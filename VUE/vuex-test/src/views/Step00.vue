<template>
  <div class="text-center">
    <h2>당신이 좋아하는 파트를 선택하세요</h2>
    <result :total="count" />
    <!-- addtotcount 이벤트가 발생하면 "addTotalCount" 함수를 실행-->
    <subject v-on:addtotcount="addTotalCount" title="코딩"></subject>
    <subject v-on:addtotcount="addTotalCount" title="알고리즘"></subject>
  </div>
</template>

<script>
import Result from "../components/step00/Result.vue";
import Subject from "../components/step00/Subject.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Result,
    Subject,
  },
  methods: {
    addTotalCount() {
      this.count += 1;
    },
  },
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
</style>
