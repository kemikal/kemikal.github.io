console.log("Circle cirlcle nothing to see here!");

var sawtoothWave = new Pizzicato.Sound({ 
    source: 'wave',
    options: {
        type: 'sine',
        frequency: 440
    }
});

var delay = new Pizzicato.Effects.Delay();
sawtoothWave.addEffect(delay);

sawtoothWave.play();