import { initializeJelka } from 'jelka'
import { basic, colors, lights } from 'jelka/interface'

initializeJelka()

basic.setFrameRate(1 / 0.5)

basic.onFrame(function (frameNumber, timeSinceStart) {
  if (frameNumber % 6 === 0) {
    for (let index = 0; index < 30; index++) {
      lights.setLights(lights.randomLight(), colors.rgbColor(0, 0, 255))
    }
  }
  if (frameNumber % 6 === 1) {
    for (let index = 0; index < 30; index++) {
      lights.setLights(lights.randomLight(), colors.rgbColor(0, 255, 0))
    }
  }
  if (frameNumber % 6 === 3) {
    for (let index = 0; index < 30; index++) {
      lights.setLights(lights.randomLight(), colors.rgbColor(255, 0, 0))
    }
  }
  if (frameNumber % 6 === 4) {
    for (let index = 0; index < 30; index++) {
      lights.setLights(lights.randomLight(), colors.rgbColor(255, 0, 255))
    }
  }
  if (frameNumber % 6 === 5) {
    for (let index = 0; index < 30; index++) {
      lights.setLights(lights.randomLight(), colors.rgbColor(255, 255, 0))
    }
  }
  if (frameNumber % 6 === 6) {
    for (let index = 0; index < 30; index++) {
      lights.setLights(lights.randomLight(), colors.rgbColor(0, 255, 255))
    }
  }
})
