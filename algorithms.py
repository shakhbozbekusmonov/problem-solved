""" Problem solved by Shakhbozbek Usmonov (Miracle)!
 solved url: https://github.com/shakhbozbekusmonov/problem-solved
 CodingBat.com Warmup 1 started """
 
#  Warmupt 1 started
 
#  Warmup 1.1
# def sleep_in(week_day, vacation):
#      if (not week_day and not vacation) or (not week_day and vacation):
#         return True
#      else:
#         return False

def sleep_in(week_day, vacation):
    return (not week_day and not vacation) or (not week_day and vacation)

print(sleep_in(False, False))


# warmupt 1.2
# def monkey_trouble(aSmile, bSmile):
#     if (aSmile and bSmile) or (not aSmile and not bSmile):
#         return True;
#     else:
#         return False;

def monkey_trouble(aSmile, bSmile):
    return (aSmile and bSmile) or (not aSmile and not bSmile)

print(monkey_trouble(True, True));

# Warmup 1.3
def sum_double(a, b):
    if (a == b):
        return (a + b) * 2
    else:
        return (a + b)
    
print(sum_double(3, 3))