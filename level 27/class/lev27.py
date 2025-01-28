#1
def multiply(a, b):
    return a * b
#2
def simple_multiplication(number) :
    if number % 2==0:
        return number * 8
    else:
        return number * 9
#3
def get_grade(s1, s2, s3):
    score = (s1+s2+s3)/3
    if 90 <= score <= 100:
        return 'A'
    elif 80 <= score < 90:
        return 'B'
    elif 70 <= score < 80:
        return 'C'
    elif 60 <= score < 70:
        return 'D'
    return "F"