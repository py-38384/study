class Student:
   'Common base class for all students'
   student_count=0

   def __init__(self, name, id):
      self.name = name
      self.id = id
      Student.student_count+=1

   def printStudentData(self):
      print ("Name : ", self.name, ", Id : ", self.id)

std1=Student("vishal",101)
std2=Student("Jignesh",102)
std3=Student("Ravi",103)
print("Total Student : ",Student.student_count)
print("Student.__doc__:", Student.__doc__)
print ("StudentStudent.__name__:", Student.__name__)
print ("Student.__module__:", Student.__module__)
print ("Student.__bases__:", Student.__bases__)
print ("Student.__dict__:", Student.__dict__ )