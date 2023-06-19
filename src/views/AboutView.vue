<template>
  <div class="about">
    <h1>This is an Quiz page</h1>
  </div>
  <div>
    <table>
      <thead>
      <tr>
        <th>Title</th>
        <th>Difficulty</th>
        <th>Theme</th>
        <th>Question</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="quiz.length === 0">
        <td colspan="2">No quiz yet</td>
      </tr>
      <tr>
        <td>{{quiz.titleField}}</td>
        <td>{{quiz.difficultyField}}</td>
        <td>{{quiz.themeField}}</td>
      </tr>
      <tr>
        <td>{{ titleField }}</td>
        <td>{{ difficultyField }}</td>
        <td>{{themeField}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import QuizFrom from "@/components/QuizForm.vue";
export default {
  data () {
    return {
      quiz: [],
      titleField: '',
      difficultyField: '',
      themeField: '',
      questionField: '',
    }
  },
  getQuizq(){
    console.log("Yeer!!!")
    const endpoint = 'http://localhost:8080/quiz/get-all'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    console.log("check")
    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(quizzes => {
          this.quiz.push(quizzes)
        }));
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
