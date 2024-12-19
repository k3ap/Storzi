import math

from jelka import Jelka
from jelka.types import Color


def callback(jelka: Jelka):
    for light, position in jelka.positions_normalized.items():
        jelka.set_light(
            light,
            Color(
                ((position[2] * 10) * jelka.elapsed_time * 1) % 256,
                ((position[2] * 10) * jelka.elapsed_time * 4) % 256,
                ((position[2] * 10) * jelka.elapsed_time * 2) % 256
                
                #position[0] * 255 + math.sin((jelka.elapsed_time + 1) / 4) * 255 + 256) % 256,
                
            )
        )


def main():
    jelka = Jelka(60)
    jelka.run(callback)


main()
