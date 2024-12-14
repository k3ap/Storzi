import { initializeJelka } from 'jelka'
import { basic, colors, lights } from 'jelka/interface'
import { Axis, Relation } from 'jelka/types'

initializeJelka()

let index = true

basic.setFrameRate(1)

basic.onFrame(function (frameNumber, timeSinceStart) {
  if (index === true) {
    lights.setLights(
      lights.lightsWhere(Axis.Z, Relation.Greater, 50, lights.getLights()),
      colors.rgbColor(255, 0, 0),
    )
    lights.setLights(
      lights.lightsWhere(Axis.Z, Relation.Less, 50, lights.getLights()),
      colors.rgbColor(0, 255, 0),
    )
  }
  if (index === false) {
    lights.setLights(
      lights.lightsWhere(Axis.Z, Relation.Greater, 50, lights.getLights()),
      colors.rgbColor(0, 255, 0),
    )
    lights.setLights(
      lights.lightsWhere(Axis.Z, Relation.Less, 50, lights.getLights()),
      colors.rgbColor(255, 0, 0),
    )
  }
  index = !index
})
