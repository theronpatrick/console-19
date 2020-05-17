<template>
  <div class="jar">
    <Note
      v-for="note in notes"
      :key="note.message"
      :message="note.message"
      :date="note.date"
    ></Note>
  </div>
</template>

<script>
import Note from "@/components/Note";
export default {
  name: "Jar",
  props: {
    notes: Array,
  },
  components: { Note },
};
</script>

<style scoped lang="scss"></style>
