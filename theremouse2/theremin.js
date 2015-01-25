function Theremin(audioCtx){
	this.pitch;
	this.volume;
	this.gainNode = this.makeGainNode(audioCtx);
	this.oscillator = this.makeOscillator(audioCtx);
}

Theremin.prototype.makeOscillator = function(audioCtx) {
	var oscillator = audioCtx.createOscillator();
	oscillator.connect(this.gainNode);
	oscillator.type = 'square';
	oscillator.detune.value = 10 // value in cents
	oscillator.start();
	return oscillator;
}

Theremin.prototype.makeGainNode = function(audioCtx) {
	var gainNode = audioCtx.createGain();
	gainNode.connect(audioCtx.destination);
	return gainNode;
}

Theremin.prototype.update = function(xCoord, yCoord){
	this.updatePitch(xCoord);
	this.updateVolume(yCoord);
	this.updateOscillator();
}

Theremin.prototype.updatePitch = function(xCoord){
	this.pitch = xCoord / window.innerWidth;
}

Theremin.prototype.updateVolume = function(yCoord){
	this.volume = 1 - (yCoord / window.innerHeight);
}


Theremin.prototype.updateOscillator = function(){
	this.oscillator.detune.value =  this.pitch * 5000
	this.gainNode.gain.value = this.volume
}
