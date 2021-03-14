const questions = [{ question: "Q 1 - Which one of the following mountain peaks is popular as ‘Godwin Austin?’", ans1: "K - 2", ans2: "Kangchenjunga", ans3: "Nanga Parvat", ans4: "Gasherbrum", ans: "K - 2" ,res:""},
{ question: "Q 2 - ……………………… is the first Indian Woman Airline(commercial) Pilot.", ans1: "Avani Chaturvedi", ans2: "Bhawana Kanth", ans3: "Mohana Singh", ans4: "Durba Banerjee", ans: "Durba Banerjee",res:"" },
{ question: "Q 3 - Vishwa Mohan Bhatt is related to …", ans1: "Slide Guitar", ans2: "Violin", ans3: "Veena", ans4: "Rudra veena", ans: "Slide Guitar" ,res:""},
{ question: "Q 4 - In a Cricket World Cup match, who has scored the highest runs(individually) ?", ans1: "Sachin Tendulkar", ans2: "Ricky Ponting", ans3: "Virat Kohli", ans4: "AB de Villiers", ans: "Sachin Tendulkar" ,res:""},
{ question: "Q 5 - At what age, Prophet Muhammad had acquired the ‘vision of truth’ and became a prophet ?", ans1: "25 years", ans2: "40 years", ans3: "45 years", ans4: "35 years", ans: "40 years" ,res:""},
{ question: "Q 6 - The great Mauryan Empire Ashoka was the son of …", ans1: "Chandragupta", ans2: "Bindusara", ans3: "Bimbisara", ans4: "Devavarman", ans: "Bindusara" ,res:""},
{ question: "Q 7 - Atomic Energy Commission is located in …", ans1: "Banglore", ans2: "Mumbai", ans3: "Hyderabad", ans4: "Indore", ans: "Mumbai" ,res:""},
{ question: "Q 8 - The headquarters of International Atomic Energy Agency(IAEA) is located in …", ans1: "Lyons", ans2: "Geneva", ans3: "Vienna", ans4: "Gland", ans: "Vienna" ,res:""},
{ question: "Q 9 - Tata Institute of Fundamental Research is located in …", ans1: "Udhagamandalam", ans2: "Mumbai", ans3: "Hyderabad", ans4: "Kolkata", ans: "Mumbai",res:"" },
{ question: "Q 10 - What is the full form of docx ?", ans1: "Document copied and xeroxed", ans2: "Document extended", ans3: "Data extended", ans4: "Draft copied and xeroxed", ans: "Document extended" ,res:""}];

let total = 0;
let ques = 0;
const question = document.querySelector('#question');
const option1 = document.querySelector('#A');
const option2 = document.querySelector('#B');
const option3 = document.querySelector('#C');
const option4 = document.querySelector('#D');
const scoreboard = document.querySelector("#scoreboard");


const loadquestion = () => {
    if (ques < questions.length) {
        question.innerHTML = questions[ques].question;

        option1.innerHTML = questions[ques].ans1;
        option2.innerHTML = questions[ques].ans2;
        option3.innerHTML = questions[ques].ans3;
        option4.innerHTML = questions[ques].ans4;

    };
}

loadquestion();



function printID(e) {

    e = e || window.event;
    e = e.target || e.srcElement;
    if (ques <questions.length) {
        if (e.innerHTML == questions[ques].ans) {
            questions
            questions[ques].res=e.innerHTML;
            total++;
            ques++;
        }
        else {
            questions[ques].res=e.innerHTML;
            ques++;
        }
        
        loadquestion();
        console.log(ques, total);
    }
    
    if(ques==questions.length) {

        scoreboard.innerHTML =
            `
        <h1>Your Score is ${total}/${questions.length}</h1>
        <button class="play" onClick ="location.reload()">Play Again</button>
        
        `
            ;
        for (let i = 0; i < questions.length; i++) {

            scoreboard.innerHTML += questions[i].question + "<br>" + "correct Ans: " + questions[i].ans +"<br>"+"Your Response: "+questions[i].res + "<br>" + "<br>";



        };
        
        question.style.display = "none";
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        scoreboard.classList.remove("score");
    }



}












