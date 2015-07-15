describe('Effects.Flanger', function() {

	it('Should override default options', function() {
		var options = {
			time: 0.008,
			speed: 0.9,
			depth: 0.001,
			feedback: 0.6,
			mix: 0.5
		};
		var flanger = new Pizzicato.Effects.Flanger(options);

		expect(flanger.time).toBe(options.time);
		expect(flanger.speed).toBe(options.speed);
		expect(flanger.depth).toBe(options.depth);
		expect(flanger.feedback).toBe(options.feedback);
		expect(flanger.mix).toBe(options.mix);
	});


	it('Should modify the delay node time when changing the time', function() {
		var initialTime = 0.002;
		var newTime = 0.003;

		var flanger = new Pizzicato.Effects.Flanger({ time: initialTime })

		expect(flanger.delayNode.delayTime.value).toBeCloseTo(initialTime);

		flanger.time = newTime;

		expect(flanger.delayNode.delayTime.value).toBeCloseTo(newTime);
	});


	it('Should modify the oscillator frequency when modifying the speed', function() {
		var initialSpeed = 0.6;
		var newSpeed = 0.7;

		var flanger = new Pizzicato.Effects.Flanger({ speed: initialSpeed })

		expect(flanger.oscillatorNode.frequency.value).toBeCloseTo(initialSpeed);

		flanger.speed = newSpeed;

		expect(flanger.oscillatorNode.frequency.value).toBeCloseTo(newSpeed);
	});


	it('Should modify the gain node when modifying the depth', function() {
		var initialDepth = 0.002;
		var newDepth = 0.003;

		var flanger = new Pizzicato.Effects.Flanger({ depth: initialDepth })

		expect(flanger.gainNode.gain.value).toBeCloseTo(initialDepth);

		flanger.depth = newDepth;

		expect(flanger.gainNode.gain.value).toBeCloseTo(newDepth);
	});


	it('Should modify the feedback node when modifying the feedback', function() {
		var initialFeedback = 0.1;
		var newFeedback = 0.3;

		var flanger = new Pizzicato.Effects.Flanger({ feedback: initialFeedback })

		expect(flanger.feedbackNode.gain.value).toBeCloseTo(initialFeedback);

		flanger.feedback = newFeedback;

		expect(flanger.feedbackNode.gain.value).toBeCloseTo(newFeedback);
	});

	it('Should change the gain node values when changing the mix', function() {
		var initialMix = 0;
		var newMix = 0.5;
		var flanger = new Pizzicato.Effects.Flanger({ mix: initialMix });

		expect(flanger.dryGainNode.gain.value).toBeCloseTo(Pz.Util.getDryLevel(initialMix));
		expect(flanger.wetGainNode.gain.value).toBeCloseTo(Pz.Util.getWetLevel(initialMix));

		flanger.mix = newMix;

		expect(flanger.dryGainNode.gain.value).toBeCloseTo(Pz.Util.getDryLevel(newMix));
		expect(flanger.wetGainNode.gain.value).toBeCloseTo(Pz.Util.getWetLevel(newMix));
	});

});