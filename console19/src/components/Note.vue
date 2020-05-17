<template>
  <div class="note">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    message: String,
  },
};
</script>

<style scoped lang="scss">
.note {
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
}
</style>
