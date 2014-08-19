(function () {
	var device = new Phaser.Device(),
		gameDimensions = {
			height: 700,
			width: 750 // ex borders
		};

	// Calculate ratio for proper scaling
	gameDimensions.ratio = (gameDimensions.width / gameDimensions.height);

	// If the device has touch, we need to adjust the game size
	if (device.touch) {
		gameDimensions.width = window.innerWidth;
		gameDimensions.height = gameDimensions.width / gameDimensions.ratio;
	}

	// Create the game instance
	game = new Phaser.Game(gameDimensions.width, gameDimensions.height, Phaser.AUTO, 'game');

	console.log(states);

	// Add the states
	game.state.add('intro', states.intro);
	game.state.add('boot', states.boot);
	game.state.add('preloader', states.preloader);
	game.state.add('menu', states.menu);
	game.state.add('play', states.play);

	// Start the game!
	game.state.start('intro');
})();