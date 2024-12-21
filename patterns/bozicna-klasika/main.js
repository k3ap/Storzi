import { initializeJelka } from 'jelka'
import { basic, colors, lights, shapes } from 'jelka/interface'

initializeJelka()

let z = 0
let razmik = 0

let fg = colors.rgbColor(255, 0, 0)
let bg = colors.rgbColor(34, 139, 34)

basic.onFrame(function (frameNumber, timeSinceStart) {
  lights.setLights(lights.getLights(), bg)
  razmik = 30
  z = (frameNumber / 2) % razmik
  while (z <= 100) {
    lights.setLights(shapes.plane(0, 0, z, 0, 90, 10), fg)
    z += razmik
  }
})
