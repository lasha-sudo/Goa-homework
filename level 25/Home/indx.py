secret = 15
guess = int(input("be careful you have one try: "))

if guess > secret:
    print("lower")
elif guess < secret:
    print("higher")
elif guess ==secret:
    print("thats right")



    