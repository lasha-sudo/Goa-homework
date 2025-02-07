#1
name = input("enter your name: ")
age = input("enter your age: ")

together = "hello my name is {0} and i am {1} years old".format(name , age)
print(together)

#2

listx = ["Python", "is", "fun"]
seperate = " ".join(listx)
print(seperate)

#3

sent = input("enter your sentence: ")
new_sen = sent.split()
print(new_sen)

#4

sentencee = input("enter your sentence: ")
xl = input("enter which word do you want to replace: ")
xo = input("enter what word you want to replace: ")

print(sentencee.replace(xl , xo))

#5
mixed_case= "PyTHon iS FUn"
lower = mixed_case.lower()
print(lower)

mixede_case= "PyTHon iS FUn"
upper = mixede_case.upper()
print(upper)