const questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für das Styling von Webseiten verwendet?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "JavaScript",
        "answer_4": "Python",
        "right_answer": 2
    },
    {
        "question": "Welche Programmiersprache ermöglicht die Interaktion auf Webseiten?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "JavaScript",
        "answer_4": "Java",
        "right_answer": 3
    },
    {
        "question": "Wofür steht CSS in der Webentwicklung?",
        "answer_1": "Cascading Style Sheets",
        "answer_2": "Creative Scripting System",
        "answer_3": "Computer Style Software",
        "answer_4": "Coding Style Standard",
        "right_answer": 1
    },
    {
        "question": "Welche der folgenden ist keine gültige JavaScript-Variablennamen?",
        "answer_1": "myVariable",
        "answer_2": "3rdVariable",
        "answer_3": "user_name",
        "answer_4": "varName",
        "right_answer": 2
    },
    {
        "question": "Welche Funktion wird in JavaScript verwendet, um Elemente auf einer Webseite zu selektieren?",
        "answer_1": "getElementById()",
        "answer_2": "selectElement()",
        "answer_3": "findElement()",
        "answer_4": "chooseElement()",
        "right_answer": 1
    },
    {
        "question": "Wie fügt man in CSS einen roten Hintergrund zu einem HTML-Element hinzu?",
        "answer_1": "background-color: red;",
        "answer_2": "color: red;",
        "answer_3": "border: red;",
        "answer_4": "text-color: red;",
        "right_answer": 1
    },
    {
        "question": "Welche Programmiersprache wird verwendet, um Logik und Interaktivität auf Webseiten hinzuzufügen?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "JavaScript",
        "answer_4": "SQL",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptfunktion von JavaScript?",
        "answer_1": "Audioverarbeitung",
        "answer_2": "Serverkommunikation",
        "answer_3": "Bildbearbeitung",
        "answer_4": "Interaktion auf Webseiten",
        "right_answer": 4
    },
    {
        "question": "Was ist der Zweck von JavaScript-Frameworks wie React oder Angular?",
        "answer_1": "Serververwaltung",
        "answer_2": "Datenbankdesign",
        "answer_3": "Webseiten-Styling",
        "answer_4": "Entwicklung von benutzerfreundlichen UIs",
        "right_answer": 4
    },
    {
        "question": "Welche CSS-Eigenschaft wird verwendet, um den Abstand zwischen den Elementen zu kontrollieren?",
        "answer_1": "padding",
        "answer_2": "margin",
        "answer_3": "border",
        "answer_4": "spacing",
        "right_answer": 2
    },
    {
        "question": "Welche Methode wird in JavaScript verwendet, um Text in Großbuchstaben umzuwandeln?",
        "answer_1": "toUpperCase()",
        "answer_2": "toLowerCase()",
        "answer_3": "capitalize()",
        "answer_4": "formatText()",
        "right_answer": 1
    },
    {
        "question": "Was ist die Funktion von CSS-Pseudoklassen wie ':hover'?",
        "answer_1": "Text in fett anzeigen",
        "answer_2": "Elemente beim Klicken verstecken",
        "answer_3": "Styling bei Mausinteraktion ändern",
        "answer_4": "Automatisch scrollen lasse",
        "right_answer": 3
    },
    {
        "question": "Welche JavaScript-Methode wird verwendet, um ein Element aus dem DOM zu entfernen?",
        "answer_1": "deleteElement()",
        "answer_2": "removeChild()",
        "answer_3": "hideElement()",
        "answer_4": "excludeElement()",
        "right_answer": 2
    },
    {
        "question": "Was ist das Ergebnis von '10' + 20 in JavaScript?",
        "answer_1": "1020",
        "answer_2": "30",
        "answer_3": "102",
        "answer_4": "Fehlermeldung",
        "right_answer": 1
    },
    {
        "question": "Welche Programmiersprache wird oft für serverseitige Webentwicklung verwendet?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "JavaScript",
        "answer_4": "PHP",
        "right_answer": 4
    },
    {
        "question": "Was ist der Zweck von Media Queries in CSS?",
        "answer_1": "Bildbearbeitung",
        "answer_2": "Serverkommunikation",
        "answer_3": "Anpassung des Layouts basierend auf dem Bildschirmgerät",
        "answer_4": "Textformatierung",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet 'DOM' in Bezug auf Webentwicklung?",
        "answer_1": "Digital Object Model",
        "answer_2": "Document Object Model",
        "answer_3": "Dynamic Order Mechanism",
        "answer_4": "Data Over Management",
        "right_answer": 2
    },
    {
        "question": "Welche Art von Daten können in JavaScript-Arrays gespeichert werden?",
        "answer_1": "Nur Zahlen",
        "answer_2": "Nur Text",
        "answer_3": "Verschiedene Datentypen",
        "answer_4": "Nur Boolesche Werte",
        "right_answer": 3
    },
    {
        "question": "Was ist der Zweck von 'localStorage' in JavaScript?",
        "answer_1": "Zur Kommunikation mit einem Server",
        "answer_2": "Zum temporären Speichern von Daten im Browser",
        "answer_3": "Zur Verschlüsselung von Daten",
        "answer_4": "Zur Ausführung von Animationen",
        "right_answer": 2
    },
    {
        "question": "Welche Methode wird in JavaScript verwendet, um einen Wert in eine ganze Zahl (Integer) umzuwandeln?",
        "answer_1": "parseInt()",
        "answer_2": "convertToInteger()",
        "answer_3": "toFloat()",
        "answer_4": "roundNumber()",
        "right_answer": 1
    },
    {
        "question": "Was ist der Unterschied zwischen '==' und '===' in JavaScript?",
        "answer_1": "Es gibt keinen Unterschied, sie sind austauschbar.",
        "answer_2": "'==' vergleicht den Wert, '===' vergleicht den Wert und den Datentyp.",
        "answer_3": "'==' vergleicht den Datentyp, '===' vergleicht den Wert.",
        "answer_4": "'===' ist veraltet und sollte nicht verwendet werden.",
        "right_answer": 2
    },
    {
        "question": "Was ist ein 'Callback' in JavaScript?",
        "answer_1": "Ein besonderes HTML-Element",
        "answer_2": "Eine Art von Kommentar im Code",
        "answer_3": "Eine Funktion, die als Argument an eine andere Funktion übergeben wird",
        "answer_4": "Eine Methode zur Manipulation von Strings",
        "right_answer": 3
    },
    {
        "question": "Was ist das Ziel von Responsive Webdesign?",
        "answer_1": "Eine Website so schwer wie möglich zu machen",
        "answer_2": "Eine Website für Mobilgeräte anzupassen",
        "answer_3": "Eine Website für den Druck vorzubereiten",
        "answer_4": "Eine Website offline verfügbar zu machen",
        "right_answer": 2
    }
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    // Show End Screen
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('result-all-questions').innerHTML = questions.length;
        document.getElementById('result-right-questions').innerHTML = rightQuestions;
    } else { // Show question

        let percent = Math.round(currentQuestion / questions.length * 100);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
        console.log('Fortschritt: ', percent);

        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        console.log('Leider falsch...');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}