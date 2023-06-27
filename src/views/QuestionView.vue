<template>
  <div class="question">
    <table>
      <thead>
      <tr>
        <th>Question</th>
        <th>Answers</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in question" :key="item.id">
        <td>{{ item.text }}</td>
        <td>
          <ul>
            <li v-for="answer in item.answers" :key="answer.id">
              {{ answer.answerText }}
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
      question: [],
      textField: '',
      answerField: '',
    }
  },
  mounted() {
    const endpoint = 'http://localhost:8080/question/get-all';
    fetch(endpoint)
        .then(response => response.json())
        .then(result => {
          this.question = result;
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Question-Daten:', error);
        });
  }
}
</script>

<style scoped>

</style>
