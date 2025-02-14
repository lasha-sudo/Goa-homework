
#1
def between(a,b):
    n = []
    for i in range(a, b + 1):
        n.append(i)
    return n



#2
def solution(string):
    return string[::-1]
#3
def boolean_to_string(b):
    return str(b)
#4
def create_array(n):
    res=[]
    i=1
    while i<=n:
        res+=[i]
        i+= 1


#5

def quarter_of(month):
    if month <= 3:
        return 1
        
    # Second Quarter
    elif month <=6 and month > 3:
        return 2
        
    
    elif month <=9 and month > 6:
        return 3
    
    else:
        return 4