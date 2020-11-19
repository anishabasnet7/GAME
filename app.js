var scores,roundScore,activePlayer,gamePlaying;
roundScore=0;
activePlayer=0;
gamePlaying=true;
scores=[0,0];

document.getElementById('score--0').textContent="0";
document.getElementById('score--1').textContent="0";
document.getElementById('current--0').textContent="0";
document.getElementById('current--1').textContent="0";
document.getElementById('name--0').textContent="Player 1";
document.getElementById('name--1').textContent="Player 2";

document.querySelector('.btn--new').addEventListener('click', function () {
	roundScore=0;
	activePlayer=0;
	gamePlaying=true;
	scores=[0,0];

	document.getElementById('score--0').textContent="0";
	document.getElementById('score--1').textContent="0";
	document.getElementById('current--0').textContent="0";
	document.getElementById('current--1').textContent="0";
	document.getElementById('name--0').textContent="Player 1";
	document.getElementById('name--1').textContent="Player 2";
});
document.querySelector('.btn--roll').addEventListener('click', function () {
	if(gamePlaying){
	var dice0=Math.floor(Math.random()*6)+1;
	var diceDom0 = document.querySelector('.dice0');
	diceDom0.style.display='block';
	diceDom0.src='dice-'+dice0+'.png';
	console.log(dice0);

	var dice1=Math.floor(Math.random()*6)+1;
	var diceDom1 = document.querySelector('.dice1');
	diceDom1.style.display='block';
	diceDom1.src='dice-'+dice1+'.png';
	console.log(dice1);

	if(dice0!==dice1){
	roundScore=roundScore+dice0+dice1;
	document.querySelector('#current--'+activePlayer).textContent=roundScore;
	} 
	else{
		nextPlayer();
	}

	}
});

document.querySelector('.btn--hold').addEventListener('click', function () {
	if(gamePlaying){
		scores[activePlayer] += roundScore;
		
		document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer];
		
		if(scores[activePlayer]>=20){
			gamePlaying=false;
			document.querySelector('#name--' + activePlayer).textContent="WINNER!";
			document.querySelector('.dice0').style.display="none";
			document.querySelector('.dice1').style.display="none";
			document.querySelector('.player--'+activePlayer+'--panel').classList.add('winner');
			document.querySelector('.player--'+activePlayer+'--panel').classList.remove('active');

		}
		else{
			nextPlayer();
		}
	}
});

function nextPlayer(){

	activePlayer===0?activePlayer=1 :activePlayer=0;
	roundScore=0;		
	document.getElementById('current--0').textContent="0";
	document.getElementById('current--1').textContent="0";
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

}