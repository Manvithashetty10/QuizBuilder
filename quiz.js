let questions = [];
function addQuestion() {
    let question = document.getElementById("question").value;
    let options = document.querySelectorAll(".options")
    let CorrectOption = document.getElementById("correct").value;
    let option = [];
    options.forEach(opt => {
        option.push(opt.value);
    });
    console.log(option)
    questions.push({
        ques: question,
        optio: option,
        correct: CorrectOption
    });
    alert("question added!");
    document.getElementById("question").value = "";
    options.forEach(option => option.value = "");
    document.getElementById("correct").value = "";
}
function generateQuestion(){
    let quizPreview = document.getElementById("Pre");
    quizPreview.innerHTML = "";
    questions.forEach((que,index)=>{
        let div =document.createElement("div");
        div.className="Hello";
        div.innerHTML=`<h1>${que.ques}</h1>`
        console.log(que)
        que.optio.forEach((op,i) => {
            div.innerHTML += `
            <label>${que.optio[i]}</lablel>
            <input type="radio" name="que" id="">
            </br>
            
            `
        })
        // div.innerHTML=`<h1>${que.ques}</h1>`
        quizPreview.appendChild(div);
    })
}