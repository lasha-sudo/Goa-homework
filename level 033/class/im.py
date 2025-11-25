#1
msg = input() #შევქმენით ცვლადი 

print(msg.replace('#', ' ')) #ჩავანაცვლეთ # გამოტოვებით



#2

name = input("enter your name: ")
age = input("enter your age: ")

print(f"Hello, {name}! You are {age}years old.")


x = [input("enter your name: ") , input("enter your age:")]

your_info = "Hello, {0}! You are {1} years old.".format(x[0] , x[1])

print(your_info)



#3

list_is = ["Python", "is", "fun"]

new_list = ' '.join(list_is)

print(new_list)


#4

sentence = input("enter your sentence: ")

spilt_sentence = sentence.split()

print(spilt_sentence)


#5

xy = input("enter your sentence: ")
xl = input("enter which word do you want to replace: ")
xo = input("enter what word you want to replace: ")

print(xy.replace(xl , xo))

