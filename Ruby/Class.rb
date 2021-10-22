class Box
 def initialize(w,h)
   @width = w
   @height = h
 end
 def area
   return @width*@height
 end
end
obj = Box.new(5,4)
puts obj.area
#use self for static method,@@field is static field
#class Box < shape this is example of inheritance
#use super keyword for class base class method from drived class