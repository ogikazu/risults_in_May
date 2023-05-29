const quiz = [
  {
    question: "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  },{
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ"
    ],
    correct: "MOTHER2"
  },{
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: [
      "フリニオール",
      "クラウド",
      "ティーダ",
      "セシル"
    ],
    correct: "セシル"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

let score = 0;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // アラートに問題文を表示


  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  // ボタンに選択肢を表示
  let buttonIndex = 0;  
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }  
};

setupQuiz();

const clickHandler = (e) => {
  if(e.target.textContent === quiz[quizIndex].correct){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else(
    window.alert(`終了！ あなたは${quizLength}問中、${score}問正解しました！`)
  )
}

let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].addEventListener("click",(e) => {
    clickHandler(e)
  })      
  buttonIndex++;
}  



