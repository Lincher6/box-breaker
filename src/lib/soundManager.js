import shootSound from 'assets/shot.wav'
import missSound from 'assets/miss.wav'
import timeDownSound from 'assets/timeDown.wav'
import armorHitSound from 'assets/armorHit.wav'

export const soundManager = {
    shoot: new Audio(shootSound),
    miss: new Audio(missSound),
    timeDown: new Audio(timeDownSound),
    armorHit: new Audio(armorHitSound),

    playShoot: function() {
        this.shoot.currentTime = 0
        this.shoot.play()
    },

    playMiss: function() {
        this.miss.currentTime = 0
        this.miss.play()
    },

    playTimeDown: function () {
        this.timeDown.currentTime = 0
        this.timeDown.play()
    },

    playArmorHit: function () {
        this.armorHit.currentTime = 0
        this.armorHit.play()
    }

}

soundManager.shoot.preload = 'auto'
soundManager.shoot.volume = .3
soundManager.miss.volume = .4
soundManager.armorHit.volume = .5
soundManager.timeDown.volume = .5