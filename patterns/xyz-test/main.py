print('#{"version": 0, "led_count": 500, "fps": 60}')
lucke = []

with open("/app/positions.csv") as f:
    for line in f.readlines():
        line = line.strip().split(",")
        lucke.append([int(line[0]), float(line[1]), float(line[2]), float(line[3])])
state = ["000000"] * 500
while True:
    state = ["000000"] * 500
    print("#" + "".join(state), flush=True)
    for lucka in sorted(lucke, key=lambda x: x[1]):
        state[lucka[0]] = "ff0000"
        print("#" + "".join(state), flush=True)
    state = ["000000"] * 500
    print("#" + "".join(state), flush=True)
    for lucka in sorted(lucke, key=lambda y: y[2]):
        state[lucka[0]] = "00ff00"
        print("#" + "".join(state), flush=True)
    state = ["000000"] * 500
    print("#" + "".join(state), flush=True)
    for lucka in sorted(lucke, key=lambda z: z[3]):
        state[lucka[0]] = "0000ff"
        print("#" + "".join(state), flush=True)
