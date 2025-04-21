#1
def openOrSenior(data):
    res = []
    for i in data:
      if i[0] >= 55 and i[1] > 7:
        res.append("Senior")
      else:
        res.append("Open")
    return res

#2

def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1)**2
    return -1

#3

def row_sum_odd_numbers(n):
    return n*n*n

#4
def nb_year(p0, percent, aug, p):
    t = 0
    while p0 < p:
        p0 = int(p0*(1 + percent/100)) + aug  
        t += 1
    return t

#5
def printer_error(s):
    errors = 0
    count = len(s)
    for i in s:
        if i > "m":
            errors += 1
    return str(errors) + "/" + str(count)