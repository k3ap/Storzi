import time

d = {"G": "00ff00", "B": "0000ff", "R": "ff0000", "P": "ff00ff"}
n = set()

with open("codes.txt") as f:
    lines = f.readlines()

print("#" + "ff0000" * 500)
time.sleep(1)

for i in range(len(lines[0]) - 1):
    print("#" + "".join([d[lines[x][i]] for x in range(500)]))
    time.sleep(1)
