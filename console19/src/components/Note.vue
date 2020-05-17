<template>
  <div class="note">
    <span class="date">{{ date }}</span>
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    message: String,
    date: String,
  },
};
</script>

<style scoped lang="scss">
.note {
  display: inline-block;
  position: relative;

  min-width: 100px;

  border: 1px solid black;
  padding: 30px 10px 10px 10px;

  background: #e64a92;
}

.date {
  position: absolute;
  top: 5px;
  left: 5px;
}

.message {
}
</style>
