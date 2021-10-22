class Box
  def initialize(w,h)
     @width, @height = w, h
  end
  def getArea
     @width * @height
  end
end


# create an object using new/initialize
box1 = Box.new(10, 20)
# create another object using allocate
box2 = Box.allocate
box1.getArea
#box2.getArea   this statement will create an error