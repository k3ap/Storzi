from jelka import Jelka


def init(jelka: Jelka):
    # Write code here that should be run only once at start
    pass


def callback(jelka: Jelka):
    # Write code here that should be run for every frame
    pass


def main():
    jelka = Jelka(60)
    jelka.run(callback, init)


main()
