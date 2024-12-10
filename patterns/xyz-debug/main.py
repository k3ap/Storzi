import time

print('#{"version": 0, "led_count": 500, "fps": 60}')
lucke = []

with open("3Dlocs.csv") as f:
    for line in f.readlines():
        l = line.strip().split(",")
        lucke.append([int(l[0]), float(l[1]), float(l[2]), float(l[3])])
state = ["000000"]*500
while True:
    state = ["000000"]*500
    print("#" + ''.join(state), flush=True)
    for lucka in sorted(lucke, key= lambda x: x[1]):
       state[lucka[0]] = "ff0000"
       print("#" + ''.join(state), flush=True)
    state = ["000000"]*500
    print("#" + ''.join(state), flush=True)
    for lucka in sorted(lucke, key= lambda y: y[2]):
       state[lucka[0]] = "00ff00"
       print("#" + ''.join(state), flush=True)
    state = ["000000"]*500
    print("#" + ''.join(state), flush=True)
    for lucka in sorted(lucke, key= lambda z: z[3]):
       state[lucka[0]] = "0000ff"
       print("#" + ''.join(state), flush=True)
