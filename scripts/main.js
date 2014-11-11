var Board = require('board.js'),
	Game = require('game.js'),
	View = require('view.js'),
	Player = require('player.js');


var MainPage = {

	game : null,

	initialize : function() {
		this.addListeners();
		
		var board = Board.initialize(8,6);
		var view = View.initialize(document, 'board', 'playerList', 'gameStatus');

		this.game = Game.initialize(board, view);
	},

	startGameHandler : function(e) {
		this.game.start();
	},

	resetGameHandler : function(e) {
		this.game.reset();
	},

	makeMoveHandler : function(e) {
		var id = e.target.getAttribute('id');
		var x = e.target.getAttribute('data-x');
		var y = e.target.getAttribute('data-y');
		if (x && y) {
			this.game.playMove(x, y);
		}
	},

	addPlayerHandler : function(e, isAI) {
		this.game.addPlayer(isAI);
	},

	traceHandler : function(traceOn) {
		this.game.toggleTrace(traceOn);
	},

	addListeners : function() {

		document.getElementById('addPlayer').addEventListener('click', function(e) {
			MainPage.addPlayerHandler(e, false);
		});

		document.getElementById('addAI').addEventListener('click', function(e) {
			MainPage.addPlayerHandler(e, true);
		});		

		document.getElementById('startGame').addEventListener('click', function(e) {
			MainPage.startGameHandler(e);
		});

		document.getElementById('resetGame').addEventListener('click', function(e) {
			MainPage.resetGameHandler(e);
		});		

		document.getElementById('board').addEventListener('click', function(e) {
			MainPage.makeMoveHandler(e);
		});

		document.getElementById('traceOn').addEventListener('click', function(e) {
			MainPage.traceHandler(e.target.checked);
		});
		

	}
};

MainPage.initialize();