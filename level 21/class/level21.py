#რადგან remove ფუნქციით წავშლით პირველ 2 იანს,ამის შემდეგ დავპრინტავთ რიცხვების რაოდენობას დამატებული რამდენი 6-ანიც არის გამოიტანს 4


list = [8 , 4 , 2 , 6]

list.remove(2)
print(len(list) + list.count(6))
#სწორი ვიყავი


#რადგან  4 ანს და 2იანს შორის ჩაისმევა 3-იანი remove-თ წავშლით პირველ ცხრიანს ხოლო  ბოლო ინსერთით პირველ რიცხვამდე ჩაისმევა ციფრი,გამოიტანს 4

nums = [2 , 4 , 8 , 9 , 5]

nums.insert(1 , 3)

nums.remove(9)

nums.insert(0 , nums.count(8))


print(nums[3])



queu = ["jonh" , "amy" , "bob" , "adam" ]

queu.append(input())

print(queu)



