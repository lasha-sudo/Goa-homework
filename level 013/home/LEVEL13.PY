#შექმნით რიცხვის გამოცნობის თამაში while ციკლით, რომელიც მომხმარებელს შეეკითხება რიცხვს 1-დან 10-მდე, სანამ მომხმარებელი არ შეიყვანს თქვენთვის სასურველ რიცხვს


number = int(input("enter your number between 1-10: "))

while number > 2:
    print("wrong")
    number = int(input("enter your number between 1-10: "))

print("you are right")



#while ციკლის საშვალებით გამოიტანეთ 1-იდან 100-მდე ყველა 5-ის ჯერადი რიცხვი

count=100

while count > 0:
    if count % 5 ==0:
        print(count)
    count -= 1


#while ციკლისა და input-ის საშვალებით მომხარებელს შემოატანინეთ პაროლი სანამ არ იქნება ის "group55"-ის ტოლი
secret_password = "group55"
user_pass = ""
tries= 3

while tries > 0 and user_pass != secret_password:
    user_pass= input("enter your password you have " + ""  + str(tries) + " tries left:  ")
    tries -= 1



    


    


