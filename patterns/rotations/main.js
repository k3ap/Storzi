import { initializeJelka } from 'jelka'
import { basic, colors, lights, shapes } from 'jelka/interface'
import { Relation } from 'jelka/types'

initializeJelka()

basic.onFrame(function (frameNumber, timeSinceStart) {
  lights.setLights(
    shapes.planeRelation(0, 0, 50, 0, frameNumber, Relation.Greater),
    colors.hsvColor(frameNumber / 5, 100, 100),
  )
  lights.setLights(
    shapes.planeRelation(0, 0, 50, 0, frameNumber, Relation.Less),
    colors.hsvColor(frameNumber / 5 + 120, 100, 100),
  )
  lights.setLights(
    shapes.plane(0, 0, 50, 0, frameNumber, (1 + Math.sin(frameNumber / 30)) * 50),
    colors.hsvColor(frameNumber / 5 + 240, 100, 100),
  )
})
