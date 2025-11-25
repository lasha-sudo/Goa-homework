#1
name = input("enter your name: " )
last_name = input("enter your last name: ")
age = int(input("enter your age: "))
country = input("enter your country: ")
city = input("enter your city: ")
fav_color = input("enter your fav_color:")
fav_car =input("enter your fav_car: ")
print("My name is " + name + " " + "my last name is " + last_name + " " + "i am " + str(age) +  "years old " + " " + "i am from " + country + "i live in " + city + " " + "my fav color is " + fav_color + " " + "my favorite car is " + fav_car)


#2
num_1 = int(input("enter your first number: "))
num_2 = int(input("enter your second number: "))

print(num_1 + num_2)
print(num_1 - num_2)
print(num_1 * num_2)

if num_2 == 0:
    print("Eror")
elif num_2 != 0:
    print(num_1 // num_2)
