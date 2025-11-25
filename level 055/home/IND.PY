#1
#def small_enough(array, limit):
    #for num in array:
        #if num > limit:
            #return False
    #return True

#2
#def sum_two_smallest_numbers(numbers):
    #a=min(numbers)
    #numbers.remove(a)
    #b=min(numbers)
    #return a+b


#3
#def is_square(n):    
    #if n>=0:
        #if int(n**.5)**2 == n:
           #return True
    #return False

#4
#def password(stg):
    #return (
        #len(stg) > 7
        #and any(c.isupper() for c in stg)
        #and any(c.islower() for c in stg)
        #and any(c.isdigit() for c in stg)
    #)
#5
#def get_size(w, h, d):
    #area = 2*(w*h + h*d + w*d)
    #volume = w*h*d
    #return [area, volume]