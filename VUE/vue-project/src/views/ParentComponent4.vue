<template>
  <div>
    <child-component @send-message="sendMessage" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent4";

export default {
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log(data);
    },
  },
};
</script>

<style></style>
