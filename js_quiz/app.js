const quiz = [
  {
    question:"ゲーム史上、最も売れたゲーム機は次のうちどれ？",
    answers:[
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct:"ニンテンドーDS"
  },{
    question:"糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers:[
      "MOTHER2",
      "スーパーマリオブラザーズ３",
      "スーパードンキーコング",
      "星のカービー"
    ],
    correct:"MOTHER2"
  },{
    question:"ファイナルファンタジーⅣの主人公の名前は？",
    answers:[
      "フリオニール",
      "クラウド",
      "ティーダ",
      "セシル"
    ],
    correct:"セシル"
  }
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0





const $button = document.getElementsByTagName("button")
let buttonLength = $button.length

//クイズの問題文、選択肢を定義
const setupQuiz=()=>{

  document.getElementById("js-question").textContent=quiz[quizIndex].question;

  for(let buttonIndex = 0 ; buttonIndex < buttonLength ; buttonIndex++){
    $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
  }
}
setupQuiz();

//ボタンをクリックしたら正誤判定
const clickHandler = (e)=>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解！");
  }

  quizIndex++
  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert(`終了！あなたは${quizLength}問中${score}問正解しました！`);
  }
}


for(let handlerIndex = 0 ; handlerIndex < buttonLength ; handlerIndex++){
  $button[handlerIndex].addEventListener("click",(e)=>{
    clickHandler(e);
  });
}


// $button[0].addEventListener("click",(e)=>{
//   clickHandler(e);
// });

// $button[1].addEventListener("click",(e)=>{
//   clickHandler(e);
// });

// $button[2].addEventListener("click",(e)=>{
//   clickHandler(e);
// });

// $button[3].addEventListener("click",(e)=>{
//   clickHandler(e);
// });


//console.log(document.getElementsByTagName("button")[0].textContent);

// document.getElementsByTagName("button")[0].addEventListener("click",()=>{
//   window.alert("Hwllo World");
// });