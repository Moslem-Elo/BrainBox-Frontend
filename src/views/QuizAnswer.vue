<template>
    <div>
        <h2>{{ quiz.title }}</h2>

        <form @submit="submitQuiz">
            <div v-for="question in quiz.questions" :key="question.id">
                <h3>{{ question.text }}</h3>

                <ul>
                    <li v-for="answer in question.answers" :key="answer.id">
                        <label>
                            <input type="checkbox" v-model="selectedAnswers[question.id]" :value="answer.id">
                            {{ answer.answerText }}
                        </label>
                    </li>
                </ul>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quiz: {}, // Das Quiz-Objekt mit Fragen und Antworten
            selectedAnswers: {} // Speichert die ausgewählten Antworten pro Frage
        }
    },
    methods: {
        submitQuiz() {
            // Hier kannst du die Logik zum Auswerten der Antworten und zum Speichern der Ergebnisse implementieren

            // Beispiel: Iteriere über die ausgewählten Antworten und vergleiche sie mit den korrekten Antworten

            for (const questionId in this.selectedAnswers) {
                const selectedAnswerIds = this.selectedAnswers[questionId];
                const question = this.quiz.questions.find(question => question.id === questionId);

                const correctAnswerIds = question.answers
                    .filter(answer => answer.correct)
                    .map(answer => answer.id);

                const isAnswerCorrect = selectedAnswerIds.length === correctAnswerIds.length
                    && selectedAnswerIds.every(answerId => correctAnswerIds.includes(answerId));

                if (isAnswerCorrect) {
                    // Aktionen für korrekte Antwort durchführen
                } else {
                    // Aktionen für falsche Antwort durchführen
                }


                // Hier kannst du die weiteren Aktionen basierend auf der Korrektheit der Antwort durchführen
                // Zum Beispiel Punkte berechnen, Ergebnis speichern, usw.
            }

            // Beispiel: Zurücksetzen der ausgewählten Antworten
            this.selectedAnswers = {};
        }
    }
}
</script>

