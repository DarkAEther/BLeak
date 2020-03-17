import random
size = 10000000
data = list()
outfile = open("test_set_"+str(size)+".js","w")
print("var array=[",end="",file=outfile)
def filewrite(data):
    print(str(data)[1:-1],end="",file=outfile)

for i in range(1,size+1):
    data.append(random.randint(1,1000))
    if (i%100==0):
        if (i > 100):
            outfile.write(",")
        filewrite(data)
        data = []

if (data != []):
    filewrite(data)
    data = []
print("]\nmodule.exports.test"+str(size)+" = array",file=outfile)
outfile.close()   