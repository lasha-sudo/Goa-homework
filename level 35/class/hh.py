#1
distance = 7425
plane_hour = 550

total_our=distance / plane_hour

print(total_our)


#2

bill = float(input("enter: "))
tipp = 20
whole = bill * tipp //100
whole_bill = bill + whole
print(whole_bill)

#3
weight = float(input("enter your kilograms: "))
height = float(input("enter your height: "))
bmi = weight / (height ** 2)
print(bmi)








#4

sentence = input("enter your sentence: ")
word = input("enter guessing word: ")



if sentence !=word :
    print(" not found")
else:
    print("found")



