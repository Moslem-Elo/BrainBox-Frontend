<template>
  <div class="about">
    <h3>All Quizzes</h3>
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
      <tr v-for="q in quiz" :key="q.id">
        <td>{{ q.title }}</td>
        <td>{{ q.difficulty }}</td>
        <td>{{ q.theme }}</td>
        <td>
          <ul>
            <li v-for="question in q.question" :key="question.id">
              {{ question.text }}
            </li>
          </ul>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quiz: [],
      titleField: '',
      difficultyField: '',
      themeField: '',
      questionField: '',
    }
  },
  mounted() {
    const endpoint = 'http://localhost:8080/quiz/get-all';
    fetch(endpoint)
        .then(response => response.json())
        .then(result => {
          this.quiz = result;
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Quizdaten:', error);
        });
  }
}
</script>

<style>


table {
  border-collapse: collapse;
  vertical-align: bottom;
}

th, td {
  border: 1px solid #ffffff;
  padding: 8px;
}
</style>


