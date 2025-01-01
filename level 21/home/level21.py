list = ["apple" , "banana" , "cherry" , "date" , "elderberry"  ]

print(list)

print([list[0] , list[-1]])

list.append("fig")

list.remove("banana")

list[1] = "blueberry"


print(len(list))


#2
x = [10, 20, 30, 40, 50, 60, 70, 80, 90]
x.append(100)
x.insert(0 , 5)
x.remove(30)
x.reverse()
x.index(50)
x.count(20)

#3

nums = (1 , 2, 3, 4 , 5 , 6 ,7, 8 ,9 ,10)

firs_half = nums[0:5]
second_half = nums[5:10]
squares = [1 , 4 , 9 , 16 , 25 , 36 , 49 , 64 , 81 , 100]
print(firs_half)
print(second_half)
print(squares)

#4
temperature = [72 , 68 , 75 , 70 , 78 ,  74 , 71]
print(max(temperature))
print(min(temperature))
print(sum(temperature))

