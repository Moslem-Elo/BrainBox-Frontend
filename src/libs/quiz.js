export default class Quiz {

    static getAllQuiz() {
                    console.log("Yeer!!!")
                    const endpoint = 'http://localhost:8080/quiz/get-all'
                    const requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                    }
                    console.log("check")
                    fetch(endpoint, requestOptions)
                        .then(response => response.json())
                        .then(result => result.forEach(quiz => {
                            this.quizzes.push(quiz)
            }))
    }

}

