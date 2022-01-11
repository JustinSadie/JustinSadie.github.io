import random

# teamA = [1,2,3,4,5,6,7,8,9,10,11,12]
# teamB = [13,14,15,16,17,18,19,20,21,22,23,24]
# teamC = [25,26,27,28,29,30,31,32,33,34,35,36]
# teamD = [37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]

Rand1 = random.sample(range(1,13), 12)
Rand2 = random.sample(range(13,25), 12)
Rand3 = random.sample(range(25,37), 12)
Rand4 = random.sample(range(37,55), 18)

#print(Rand1)
# print(Rand2)
# print(Rand3)
# print(Rand4)

zoneA = []
zoneB = []
zoneC = []
zoneD = []
zoneE = []
zoneF = []


zones = [zoneA,zoneB,zoneC,zoneD,zoneE, zoneF]
rando = [Rand1, Rand2, Rand3]

x=0
for i in zones:
    for j in rando: 
        i.append(j[x])
        i.append(j[x+1])
    x+=2

y=0
for k in zones:
   k.append(Rand4[y]) 
   k.append(Rand4[y+1])
   k.append(Rand4[y+2])
   y+=3


zone1 = []
zone2 = []
zone3 = []
zone4 = []
zone5 = []
zone6 = []
zoneNum = [zone1, zone2, zone3, zone4, zone5, zone6]

RandSeq =  random.sample(range(0,9), 9)
# print(RandSeq)
for i in RandSeq:
    zone1.append(zoneA[i])
    zone2.append(zoneB[i])
    zone3.append(zoneC[i])
    zone4.append(zoneD[i])
    zone5.append(zoneE[i])
    zone6.append(zoneF[i])


print("Zone A: " + str(zone1))
print("Zone B: " + str(zone2))
print("Zone C: " + str(zone3))
print("Zone D: " + str(zone4))
print("Zone E: " + str(zone5))
print("Zone F: " + str(zone6))
