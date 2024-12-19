import { initializeJelka } from 'jelka'
import { basic, colors, lights, shapes } from 'jelka/interface'

initializeJelka()

basic.setFrameRate(50)

let barva1 = colors.rgbColor(255, 0, 255)
let barva2 = colors.rgbColor(0, 255, 100)

basic.onFrame(function (frameNumber, timeSinceStart) {
  lights.setLights(lights.getLights(), barva1)
  for (let indeks = 0; indeks <= 5; indeks++) {
    lights.setLights(shapes.sphere(0, 0, 50, ((frameNumber - indeks * 40) % 200) / 2, 10), barva2)
  }
})
