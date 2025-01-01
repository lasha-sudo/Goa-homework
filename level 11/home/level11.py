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


price = int(input("enter your price: "))

if price >= 50:
    price("10% sale")
elif price > 20 and price < 50:
    price("5% sale")
elif price < 20:
    print("0% sale")
































