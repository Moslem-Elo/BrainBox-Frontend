<template>
  <div class="about">
    <h1>This is an Quiz page</h1>
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
        <td>{{ q.difficulty}}</td>
        <td>{{ q.theme }}</td>
        <td>{{ q.question }}</td>
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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

table {
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
}
</style>

