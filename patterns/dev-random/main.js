import { initializeJelka } from 'jelka'
import { basic, colors, lights } from 'jelka/interface'

initializeJelka()

basic.onFrame(function (frameNumber, timeSinceStart) {
  if (Math.floor(frameNumber / lights.countLights()) % 2 === 0) {
    lights.setLights(frameNumber % lights.countLights(), colors.randomColor())
  } else {
    lights.setLights(frameNumber % lights.countLights(), colors.rgbColor(0, 0, 0))
  }
})
