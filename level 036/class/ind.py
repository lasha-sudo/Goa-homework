#1
def bool_to_word(b):
    if b:
        return "Yes"
    else:
        return "No"

#2
def grow(arr):
	product = 1
	for i in arr:
		product *= i
	return product