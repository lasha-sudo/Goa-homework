
def mouth_size(animal): 
    animal2 = animal.lower()
    if animal2 == 'alligator':
        return 'small'
    else:
        return 'wide'



#2
def past(h, m, s):
    return (3600h + 60m + s) * 1000