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
  vertical-align: top;

  width: 200px;

  border: 1px solid black;
  padding: 30px 10px 10px 10px;
  margin-right: 10px;
  margin-bottom: 15px;

  background: #e64a92;
}

.date {
  position: absolute;
  top: 5px;
  left: 10px;
}

.message {
}
</style>
