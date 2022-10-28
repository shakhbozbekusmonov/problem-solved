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
    