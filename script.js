// JavaScript
console.log('Hello world!');
const drawButton=document.querySelector('#drawButton');
const resultDisplay=document.querySelector('#resultDisplay');

// ボタンがクリックされたら、動作させる
drawButton.addEventListener('click',()=>{

    //0から1未満のランダムな数字を生成する
    const randomNumber=Math.random();
    console.log(randomNumber);//コンソールに表示(確認用)

    //既存のクラスを削除
    document.body.classList.remove('daikichi','chuukichi','shoukichi','kichi','kyou');

    //0.1未満だったら
    if(randomNumber<0.1){
    resultDisplay.textContent='大吉';
    documenrt.body.classList.add('daikichi');

    //0.3未満だったら
    } else if(randomNumber<0.3){
        resultDisplay.textContent='中吉';
        document.body.classList.add('chuukichi');

    } else if(randomNumber<0.5){   
        resultDisplay.textContent='小吉';
        document.body.classList.add('shoukichi');

    } else if(randomNumber<0.9){
        resultDisplay.textContent='吉';
        document.body.classList.add('kichi');

        //どちらでもない場合
    } else {
        resultDisplay.textContent='凶';
        document.body.classList.add('kyou');
    }

});
