import time

print('#{"version": 0, "led_count": 500, "fps": 60}')

green = "#" + "00ff00" * 500
red = "#" + "ff0000" * 500

print(red, flush=True)
time.sleep(0.1)

for i in range(500):
    print(green, flush=True)
    time.sleep(0.1)

    cur = "#" + "000000" * i + "ffffff" + "000000" * (500 - 1 - i)
    print(cur, flush=True)
    time.sleep(0.1)

time.sleep(0.1)
