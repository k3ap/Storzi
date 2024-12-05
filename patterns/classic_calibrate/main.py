import time

print('#{"version": 0, "led_count": 500, "fps": 60}')
green = "#" + "00ff00" * 500
red = "#" + "ff0000" * 500
normal = "000000" * 500
print(red)
time.sleep(0.1)
for i in range(500):
    print(green)
    time.sleep(0.1)
    cur = "#" + "000000"*i + "ffffff" + "000000"*(500-1-i)
    time.sleep(0.1)

time.sleep(0.1)
