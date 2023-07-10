<template>
    <head>

    </head>
    <body>

    <h1 class="headline">Quizzes</h1>

    <table id="quiz">
        <tr>
            <th>Title</th>
            <th>Theme</th>
            <th>Difficulty</th>
        </tr>
        <tr v-for="q in quiz" :key="q.id">
            <td><router-link :to="'/quiz/' + q.id + '/answer'">{{ q.title }}</router-link> </td>
            <td>{{ q.theme }}</td>
            <td>{{ q.difficulty }}</td>
        </tr>

    </table>

    </body>
</template>

<style>
#quiz {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#quiz td, #quiz th {
    border: 1px solid #ffffff;
    padding: 8px;
    color: #ffffff;
}



#quiz tr:hover {background-color: #a2a2a2;}

#quiz th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #727272;
    color: #ffffff;
}

body{
    background-color: #424242;

}

.headline{
    color: #ffffff;
    text-align: center;
}

</style>

<script >
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