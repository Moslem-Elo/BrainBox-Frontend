<template>
  <div class="About">
    <h1>This is an Quiz page</h1>
  </div>
</template>
<script>
import Quiz from "@/libs/quiz";
export default {
  mounted(){
    console.log("schritt 1");
    Quiz.getAllQuiz();
  }
}

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
