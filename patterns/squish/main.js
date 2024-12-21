import { initializeJelka } from 'jelka'
import { basic, colors, lights, shapes } from 'jelka/interface'

initializeJelka({ initialColor: { red: 255, green: 0, blue: 0 } })

basic.onFrame(function (frameNumber, timeSinceStart) {
  lights.setLights(
    shapes.plane(0, 0, 51 * (Math.sin(frameNumber / 10) + 1), frameNumber, 135, 14),
    colors.hslColor(frameNumber, 100, 50),
  )
})
