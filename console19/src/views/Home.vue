<template>
  <div class="home">
    <Jar :notes="notes" />
  </div>
</template>

<script>
import Jar from "@/components/Jar";
import { SPREADSHEET_ID } from "@/constants/constants";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSS4HFQ11ZPjz2moXciPyYg9WvsE2w8WZ-MPOVuI47243oXbXNkDvfQPcse5b-2ZanZ_7wJZLM9sY1m/pub?gid=0&single=true&output=csv`;

export default {
  name: "Home",
  components: { Jar },
  data: function() {
    return {
      notes: [],
    };
  },
  mounted() {
    this.buildMessages();
  },
  methods: {
    buildMessages: function() {
      fetch(SHEET_URL, {
        method: "GET",
      })
        .then((response) => response.text())
        .then((data) => {
          // Build object from csv.
          // Split on commas and white space, and remove return characters. I
          const csvArray = data.replace(/\r/g, "").split(/,|\n/);
          const csvObject = csvArray.forEach((value, index) => {
            if (index % 2 !== 0) {
              return;
            }
            // Invented custom encoding for commas because CSV will use that as delimiter. Now commas are ';;'
            this.notes.push({
              date: value,
              message: csvArray[index + 1].replace(/;;/g, ","),
            });
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
