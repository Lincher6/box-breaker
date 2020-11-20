import shootSound from 'assets/shot.wav'
import missSound from 'assets/miss.ogg'
import timeDownSound from 'assets/timeDown.wav'

export const soundManager = {
    shoot: new Audio(shootSound),
    miss: new Audio(missSound),
    timeDown: new Audio(timeDownSound),

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
    }

}

soundManager.shoot.preload = 'auto'
soundManager.shoot.volume = .3