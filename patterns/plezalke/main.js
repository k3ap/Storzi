import { initializeJelka } from 'jelka'
import { basic, colors, lights, shapes } from 'jelka/interface'

initializeJelka({ initialColor: { red: 204, green: 0, blue: 255 } })

let visina = 0

basic.onFrame(function (frameNumber, timeSinceStart) {
  lights.setLights(shapes.ball(14, 14, visina % 100, 15), colors.rgbColor(0, 255, 255))
  visina = visina + 1
  if (visina > 100) {
    visina = 0
    lights.setLights(lights.getLights(), colors.rgbColor(204, 0, 255))
  }
})
