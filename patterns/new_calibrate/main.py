import time
d = {
        "G" : "00ff00",
        "B" : "0000ff",
        "R" : "ff0000",
        "P" : "ff00ff"
}
n = set()
with open("codes.txt") as f:
    l = f.readlines()

print("#" + "ff0000"*500)
time.sleep(1)
for i in range(len(l[0])-1):
    print("#" + ''.join([d[l[x][i]] for x in range(500)]))
    time.sleep(1)
