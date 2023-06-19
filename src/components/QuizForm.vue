<template>

</template>

<script>
export default {
  name: "QuizForm",

  data () {
    return {
      quiz: [],
      titleField: '',
      difficultyField: '',
      themeField: '',
      questionField: '',
    }
  },
  methods: {

    getAllQuiz() {
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
      }))
}
  }
}
</script>

<style scoped>

</style>