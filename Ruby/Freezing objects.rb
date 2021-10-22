class Box
  def initialize(w,h)
     @width, @height = w, h
  end
  def getWidth
     @width
  end
  def getHeight
     @height
  end
  def setWidth=(value)
     @width = value
  end
  def setHeight=(value)
     @height = value
  end
end

box = Box.new(10, 20)
box.freeze
if( box.frozen? )
  puts "Box object is frozen object"
else
  puts "Box object is normal object"
end