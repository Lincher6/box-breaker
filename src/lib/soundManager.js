import shootSound from 'assets/shot.wav';
import missSound from 'assets/miss.wav';
import timeDownSound from 'assets/timeDown.wav';
import armorHitSound from 'assets/armorHit.wav';

export const soundManager = {
    shoot: new Audio(shootSound),
    miss: new Audio(missSound),
    timeDown: new Audio(timeDownSound),
    armorHit: new Audio(armorHitSound),

    playShoot: function() {
        play(this.shoot);
    },

    playMiss: function() {
        play(this.miss);
    },

    playTimeDown: function () {
        play(this.timeDown);
    },

    playArmorHit: function () {
        play(this.armorHit);
    }
}

function play(audio) {
    audio.currentTime = 0;
    audio.play();
}

soundManager.shoot.preload = 'auto';
soundManager.shoot.volume = .3;
soundManager.miss.volume = .4;
soundManager.armorHit.volume = .5;
soundManager.timeDown.volume = .5;