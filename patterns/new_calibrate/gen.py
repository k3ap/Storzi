from random import choice
d = {
        "G" : "00ff00",
        "B" : "0000ff",
        "R" : "ff0000",
        "P" : "ff00ff"
}
n = set()
with open("codes.txt", mode="w") as f:
    for i in range(500):
        c = [choice(list(d.keys())) for i in range(10)]
        while ''.join(c) in n:
            c = [choice(list(d.keys())) for i in range(10)]
        n.add(''.join(c))
        f.write(''.join(c)+"\n")
