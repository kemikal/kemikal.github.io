console.log("Circle cirlcle nothing to see here!");

var planet1 = document.getElementById("planet1");
var planet2 = document.getElementById("planet2");
var planet3 = document.getElementById("planet3");
var planet4 = document.getElementById("planet4");
var planet5 = document.getElementById("planet5");
var sat = document.getElementById("sat");

planet1.addEventListener("click", function() {
    
    var planetSound = new Pizzicato.Sound('./sound/planet1.wav', function() {
        var delay = new Pizzicato.Effects.Delay({
            feedback: 0.6,
            time: 0.4,
            mix: 0.5
        });
        
        planetSound.addEffect(delay);
        planetSound.play();
    });

    

  
});

planet2.addEventListener("click", function() {
    
    var planetSound = new Pizzicato.Sound('./sound/planet2.wav', function() {
        var delay = new Pizzicato.Effects.Delay({
            feedback: 0.6,
            time: 0.4,
            mix: 0.5
        });
        
        planetSound.addEffect(delay);
        planetSound.play();
    });

});

planet3.addEventListener("click", function() {
    var planetSound = new Pizzicato.Sound('./sound/planet3.wav', function() {
        var delay = new Pizzicato.Effects.Delay({
            feedback: 0.6,
            time: 0.4,
            mix: 0.5
        });
        
        planetSound.addEffect(delay);
        planetSound.play();
    });
});

planet4.addEventListener("click", function() {
    var planetSound = new Pizzicato.Sound('./sound/planet4.wav', function() {
        var delay = new Pizzicato.Effects.Delay({
            feedback: 0.6,
            time: 0.4,
            mix: 0.5
        });
        
        planetSound.addEffect(delay);
        planetSound.play();
    });
});

planet5.addEventListener("click", function() {
    var planetSound = new Pizzicato.Sound('./sound/planet5.wav', function() {
        var delay = new Pizzicato.Effects.Delay({
            feedback: 0.6,
            time: 0.4,
            mix: 0.5
        });
        
        planetSound.addEffect(delay);
        planetSound.play();
    });
});

sat.addEventListener("click", function() {

    document.getElementById("satelite").setAttribute('src', '/img/sat.png');

    var sawtoothWave = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'triangle',
            frequency: 140,
            volume: 0
        }
    });
  console.log("Sound on");
    sawtoothWave.play();
});

