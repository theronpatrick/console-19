<template>
  <div class="jar">
    <!-- <Note
      v-for="note in notes"
      :key="note.message"
      :message="note.message"
      :date="note.date"
    ></Note> -->

    <Note
      :message="'test'"
      class="test"
      :class="{ foo: test }"
      @click.native="handleClick"
    />
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
  data: function() {
    return {
      test: false,
    };
  },
  methods: {
    handleClick: function() {
      console.log("foobar");
      this.test = !this.test;
    },
  },
};
</script>

<style lang="scss">
.test {
  transition: all 800ms ease-in-out;
  transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0);

  position: absolute;
  top: 50%;
  left: 50%;
}
.foo {
  transform: translate3d(0, 400px, 50px) rotate3d(1, 0, 0, 1turn);
}
</style>
