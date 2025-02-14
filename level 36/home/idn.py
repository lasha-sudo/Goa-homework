#1
def solution(string):
    return string[::-1]


#2

def main (verb, noun):
    return verb + noun

#3
def area_or_perimeter(l , w):
    if l == w:
        tot = l * w
    else:
        tot = l * 2 + w * 2
    return tot

#4
def make_negative( number ):
    if number >0:
        return number * -1
    else:
        return number * 1

#5

def opposite(number):
    return number * -1