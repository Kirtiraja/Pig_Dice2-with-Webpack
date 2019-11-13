import { Player } from './pig-dice';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  var player1 = new Player(true);
  var player2 = new Player(false);
  var easyComp = new Player(false);
  var hardComp = new Player(false);

  //select mode buttons

  $("button#2humans").click(function(event){
    event.preventDefault();
    $("div#humanvshuman").show();
    $("div#select-mode").hide();
  })
  $("button#vsEasyComputer").click(function(event){
    event.preventDefault();
    $("div#humanVsEasyComputer").show();
    $("div#select-mode").hide();
  })
  $("button#vsHardComputer").click(function(event) {
    event.preventDefault();
    $("div#humanVsHardComputer").show();
    $("div#select-mode").hide();
  })

  //human vs human

  $("button#roll-button").click(function(event) {
    event.preventDefault();
    player1.throwDice();
    player2.throwDice();
    player1.checkRoll(player2);
    player2.checkRoll(player1);
    $("span#player1roll").text(player1.roll);
    $("span#player1turntotal").text(player1.turnScore);
    $("span#player2roll").text(player2.roll);
    $("span#player2turntotal").text(player2.turnScore);
  });
  $("button#hold-button").click(function(event) {
    event.preventDefault();
    player1.hold(player2);
    $("span#player1Total").text(player1.totalScore);
    $("span#player2Total").text(player2.totalScore);
    $("span#player1turntotal").empty();
    $("span#player2turntotal").empty();
    alert("your turn is over. others Players turn");
    player1.winner("player 1");
    player2.winner("player 2");
  });

  // Easy Computer

  $("button#roll-button1").click(function(event) {
    event.preventDefault();
    player1.throwDice();
    player1.checkRoll(easyComp);
    $("span#player1roll").text(player1.roll);
    $("span#player1turntotal").text(player1.turnScore);
    $("span#easyComproll").text(easyComp.roll);
    $("span#easyCompturntotal").text(easyComp.turnScore);
  });
  $("button#hold-button1").click(function(event) {
    event.preventDefault();
    player1.hold(easyComp);
    easyComp.throwDice();
    easyComp.computerEasy(player1);
    $("span#player1Total").text(player1.totalScore);
    $("span#easyCompTotal").text(easyComp.totalScore);
    $("ul#easyCompRolls").append(easyComp.turnScore)
    $("span#player1turntotal").empty();
    $("span#easyCompturntotal").empty();
    alert("your turn is over. others Players turn");

    player1.winner("player 1");
    easyComp.winner("EASY COMPUTER HAS BEATEN YOU! PATHETIC HUMAN");
  });
});
