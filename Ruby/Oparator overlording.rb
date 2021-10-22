class shape{
  attr_accessor :h :w
  def initialize(h, w)
    self.h = h
    self.w = w
  end

  def +(other)
    shape new(self.h+other.h,self.w+other.h)
  end
end

a = shape.new(5,6)
b = shape.new(7,5)
c = a + b
puts c.h
puts c.w