#1
list = [8 , 4 , 2 ,6] 
list.remove(2)
print(len(list)+ list.count(6))
#ეს გამოიტანს 4 რადგან remove ფუნქციით წავშლით პირველ 2იანს ხოლო ჩვენ len ვიგებთ თუ რამდენი რამეა შეტანილი ცხრილში 3 
# ხოლო 3ს დავუმატებთ რამდენი 6 იანი გვაქ ანუ 1 პასუხი:4


#2
queue = ["jonh" , "amy" , "bob" , "adam"]

add_name = input("Enter another name: ") #მომხმარებელს ვაძლევთ რომ თვოთონ აარჩიოს დამატებული სახელი

queue.append(add_name) # queu append-ით ვუმატებთ ჩვენ შექმნილ ცვლადს სადაც მომხმარებელი ირჩევს სახელს

print(queue)