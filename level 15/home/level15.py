number = 100

while number > 0:
    if number % 2==0:
        
            print(number % number)
    number -=1


#დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს რიცხვს და დაბეჭდავს ეს რიცხვი დადებითია, უარყოფითია თუ 0-ია
რიცხვი = int(input("enter your number: "))

if რიცხვი > 0:
    print("it is possitive")
elif რიცხვი==0:
    print("it equals zero")
elif რიცხვი < 0:
    print("it is negative")



#დაწერეთ პროგრამა, რომელიც მომხარებელს შემოატანინებს წელს და გაიგებს არის თუ არა ის ნაკიანი(წელი როდესაც თებერვალში 29 დღე გვაქვს). ნაკიანი არის წელი თუ ის იყოფა 4-ზე და არ იყოფა 100-ზე ან იყოფა 400-ზე.(გამოიყენეთ and და or ოპერატორები)

year = int(input("enter your year: "))
ნაკიანი =""
tries=5

while year == year % 4 and tries > 5:
    print("this year has 29 febuarys")
    ნაკიანი = ("enter your year you have " + ""  + str(tries) + " tries left:  ")
    tries -=1
 

#მომხმარებელს შემოატანინეთ რიცხვი 1-დან 100-ის ჩათვლით(ეს იქნება მისი ქულა). თუ მაგალითად 90-დან 100-ის ჩათვლით ექნება ქულა გამოუტანეთ "Your grade is A", თუ 80-დან 90-მდე, გამოუტანეთ "Your grade is B", თუ 70-დან 80-მდე გამოუტანეთ "Your grade is C", სხვა შემთხვევაში გამოუტანეთ "Your grade is D"

point = int(input("enter your point: " ))

if point > 90 and point <= 100:
    print("your grade is A")
elif point > 80 and point <= 90:
    print("YOUR GRADE IS B")
elif point > 70 and point <= 80:
    print("YOUR GRADE IS C")
else:
    print("YOUR GRADE IS D") 



