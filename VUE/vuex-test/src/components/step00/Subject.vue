<template>
  <button v-on:click="addCount">{{ title }} - {{ count }}</button>
</template>

<script>
export default {
  name: "Subject",
  props: ["title"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount: function() {
      this.count += 1;
      // "addtotcount" 이벤트를 발생시킴
      this.$emit("addtotcount");
    },
  },
};
</script>

<style></style>
