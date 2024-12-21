import { initializeJelka } from 'jelka'
import { basic, colors, lights, shapes } from 'jelka/interface'
import { Axis, Relation } from 'jelka/types'

initializeJelka()

let radius = 0
let interval = 200

basic.setFrameRate(33)

basic.onFrame(function (frameNumber, timeSinceStart) {
  if (frameNumber % (2 * interval) > interval) {
    radius = 2 * interval - (frameNumber % (2 * interval))
  } else {
    radius = frameNumber % (2 * interval)
  }
  lights.setLights(
    lights.lightsWhere(Axis.Z, Relation.Greater, 30, lights.getLights()),
    colors.hslColor(314, 49, 55),
  )
  lights.setLights(
    lights.lightsWhere(Axis.X, Relation.Greater, radius, lights.getLights()),
    colors.hslColor(265, 49, 55),
  )
  lights.setLights(
    lights.lightsWhere(Axis.Z, Relation.Less, radius, lights.getLights()),
    colors.cmykColor(2, 43, 10, 0),
  )
  lights.setLights(shapes.ball(60, 50, 70, radius), colors.cmykColor(9, 30, 89, 0))
  lights.setLights(shapes.sphere(50, 100, 70, radius, 40), colors.cmykColor(10, 48, 26, 0))
  lights.setLights(shapes.sphere(-50, -50, 70, radius, 40), colors.cmykColor(74, 37, 26, 0))
})
