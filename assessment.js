'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子供をすべて削除．
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element){
   while(element.firstChild){ //子供の要素があれば削除する
     element.removeChild(element.firstChild);
     }
}

userNameInput.onkeydown = (event) =>{
    if(event.key === 'Enter'){
        assessmentButton.click();        
    }
}




assessmentButton.onclick = function(){
    const userName = userNameInput.value;
    if(userName.length === 0){
        return;
    }//ガード句：ifelse文を用いるとスコープの入れ子が深くなる．

     //診断結果エリアの作成
     removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

//TODOツイートエリアの作成
  removeAllChildren(tweetDivided);
};

const answers = [//const:再代入できない
'{userName}のいいところは声．{userName}．',
'{userName}のいいところはまなざし．{userName}．',
'{userName}のいいところは情熱．{userName}．',
'{userName}のいいところは厳しさ．{userName}．',
'{userName}のいいところは知恵．{userName}．',
'{userName}のいいところはユニークさ．{userName}．',
'{userName}のいいところは用心深さ．{userName}．',
'{userName}のいいところは見た目．{userName}．',
'{userName}のいいところは判断力．{userName}．',
'{userName}のいいところは思いやり．{userName}．',
'{userName}のいいところは感受性．{userName}．',
'{userName}のいいところは節度．{userName}．',
'{userName}のいいところは好奇心．{userName}．',
'{userName}のいいところは気配り．{userName}．',
'{userName}のいいところはそのすべて．{userName}．',
'{userName}のいいところは自制心．{userName}．',
'{userName}のいいところは{userName}．',
];
/**
 * 名前の文字列を入力すると診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    //与えられた全文字コード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for(let i = 0;i < userName.length;i++){
       sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    //(mod answerの要素の数)でsumOfCharCodeを分類iはletで定義したからif文の中でしか使えない．
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replace(/\{userName\}/g, userName);
    return result;
}
//テストコード
console.assert(assessment('太郎') === assessment('太郎'),'ダメ');
