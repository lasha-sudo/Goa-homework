x = [10, 20, 30, 40, 50, 60, 70, 80, 90]
x.append(100)
x.insert(0 , 5)
x.remove(30)
x.reverse()
x.index(50)
x.count(20)



nums = (1 , 2, 3, 4 , 5 , 6 ,7, 8 ,9 ,10)

firs_half = nums[0:5]
second_half = nums[5:10]
squares = [1 , 4 , 9 , 16 , 25 , 36 , 49 , 64 , 81 , 100]
print(firs_half)
print(second_half)
print(squares)


temperature = [72 , 68 , 75 , 70 , 78 ,  74 , 71]
print(max(temperature))
print(min(temperature))
print(sum(temperature))


point = int(input("enter your point: " ))

if point > 90:
    print("A")
elif point > 80 and point < 89:
    print("B")
elif point > 70 and point < 79:
    print("C")
elif point > 60 and point < 69:
    print("D")
elif point < 60:
    print("F") 


age = int(input("enter your age:"))


if age > 0 and age < 12:
    print("you are child")
elif age > 12 and age < 18:
    print("you are teenager")
elif age > 17 and age < 120:
    print("you are adult")


number = int(input("enter your number:"))

if age > 0:
    print("it is positive")
elif age < 0:
    print("it is negative")
elif age == 0:
    print("it equals 0")



print("HeLLo".lower())

print("Good".upper())

print("clAASWOrk".capitalize())

x = "hello how are you"
y = x.find(input("enter your letter: "))

print(y)