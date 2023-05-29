(()=>{
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]")
  const $content = $tab.querySelectorAll("[data-content]")
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;

  //初期化
  const init = ()=>{
    $content[0].style.display = 'block';
  }

  init();

  //クリックしたら起こるイベント
  const handleClick = (e)=>{
    // ↓aタグをクリックした際、ページを移動するのを阻止する（.preventDefault()）
    e.preventDefault();
    
    // 以下二行でクリックされたnavとそのdataを取得
    const $this =e.target;
    // dataset.属性名 でデータ属性の値がとれる。
    const targetVal = $this.dataset.nav;

    // 対象外のnav,contentをすべて一旦リセットする
    let index = 0;
    while(index < navLen){
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    } 

    console.log("targetVal",targetVal);

    // 対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content = "' +targetVal+ '"]')[0].style.display = "block";
    $nav[targetVal].classList.add(ACTIVE_CLASS)
    
  }

  // 全nav要素に対して関数を適応・発火
  let index = 0;
    while(index < navLen){
    $nav[index].addEventListener("click",(e)=>handleClick(e));
    index++;
  }
  

  

})();

