from jelka import Jelka
from jelka.types import Color, Position
import sys
from math import sqrt, exp


wait_time: float = 5
boom_time: float = 0.3
color: Color = Color.random().vivid()
framerate: int = 60

max_radius: float = 300

center: Position = Position(0,0,80)

phase_times = [3, 0.4, 0.4, 0.4]
start_times = [0, phase_times[0], phase_times[0]+0.2, phase_times[0]+0.4]
colors = [Color(0,0,0), Color(255,50,45), Color(255,130,46), Color(187,176,158)]


def init(jelka: Jelka):
    for i, __ in jelka.positions_raw.items():
        jelka.set_light(i, colors[-1])


def callback(jelka: Jelka):
    global wait_time, boom_time, after_time, color, center

    for phase in range(len(phase_times)):
        if start_times[phase] > jelka.elapsed_time:
            break

        phase_radius = max_radius * ((jelka.elapsed_time - start_times[phase]) / phase_times[phase])**2
        if phase == 0:
            phase_radius = max_radius - phase_radius - 50

        for i,p in jelka.positions_raw.items():
            x = p - center
            if phase > 0 and x.dot(x) < phase_radius * phase_radius:
                jelka.set_light(i, colors[phase])
            elif phase == 0 and x.dot(x) > phase_radius * phase_radius:
                jelka.set_light(i, colors[phase])


def main():
    global framerate
    jelka = Jelka(framerate)
    jelka.run(callback, init)


main()
