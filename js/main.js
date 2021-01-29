'use strict';
window.onload=function(){
	class Tarot{
		constructor(num,name,text){
			this.num=num;
			this.name=name;
			this.text=text;
			this.front=`t${this.num<10?'0':''}${this.num}.jpg`;
		}
	};

	let names=[
		'愚者','魔術師','女教皇','女帝','皇帝','教皇','恋人','戦車','力','隠者','運命の輪','正義','吊るされた男','死神','節制','悪魔','塔','星','月','太陽','審判','世界'
	]
	let texts=[
	'夢想・愚行・極端・熱狂','意志・手腕・外交','秘密・神秘・英知','実り・行動・月日の長さ・未知','統治・堅固さ・防御・同盟','信条・社会性・恵みと有徳','魅力・愛美','援軍・摂理・勝利・復讐','力・勇気・寛大・名誉','深慮・忠告を受ける・崩壊','幸運・転機・向上','平等・正しさ・正当な判決','英知・慎重・試練・直観','停止・損失・死と再生','調整・中庸・倹約・管理','暴力・激烈・宿命・黒魔術','悲嘆・災難・不名誉・転落','希望と吉兆・瞑想・放棄','隠れた敵・幻想・欺瞞・失敗','物質的な幸福・幸運な結婚','復活・位置の変化・更新','完成・約束された成功・旅'
	]

	const tarots=[];
	for(let i=0;i<22;i++){
		let tarot=new Tarot(i,names[i],texts[i]);
		tarots.push(tarot);
	}

	//シャッフル
	let i=tarots.length
	function shuffle(){
		console.log('test');
		while(i){
			let index=Math.floor(Math.random()*i--);
			let temp=tarots[index];
			tarots[index]=tarots[i];
			tarots[i]=temp;
		}
	}

	shuffle();

	//ボタン
	const btn=document.getElementById('shuf');
	btn.addEventListener('click',shuffle);
	btn.addEventListener('click',function(){
		//console.log('ボタンおしたよ');
		location.reload();
	});
	console.log('sa');

	//カードを配置
	const tarotTable=document.getElementById('tarotTable');
	for(let i=0;i<3;i++){
			let div=document.createElement('div');
			let tempTarot=tarots[i];
			div.classList.add('tarot1','back');
			div.onclick=flip;
			div.num=tempTarot.num;
			div.name=tempTarot.name;
			div.text=tempTarot.text;
			div.style.backgroundImage=`url(images/${tempTarot.front})`;
			tarotTable.appendChild(div);
	}

	//カードを裏返す
	function flip(e){
		let div=e.target;
		div.classList.remove('back');
		div.classList.add('openWord');
	}
	//カードの説明
	const tarot=document.getElementsByClassName('tarot1');
	let msg=document.getElementById('msg')
	for(let i=0;i<tarot.length;i++){
		tarot[i].addEventListener('mouseover',function(e){
			msg.innerHTML=`<p>${e.target.name}</p><p>${e.target.text}</p>`;
			console.log('test2');
		});
	}

	//カードと文字の動き
	$(function(){
		$('.tarot1').on('mouseover',function(){
			$(this).stop(true).animate({width:'210px',height:'290px'},200);
		})
		.on('mouseout',function(){
			$(this).stop(true).animate({width:'200px',height:'280px'},200);
			$('#msg').stop(true).animate({opacity:0},100);
		})
		.on('click',function(){
			$('#msg').stop(true).animate({opacity:1},200);
		});
	});
};

