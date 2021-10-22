class cat
 attr_accessor :name :age
 include Comparable
 def initialize(n,a)
    self.name = n
    self.age = a
 end
 def <=>(other)
    self.age <=> other.age
 end
end

c1 = Cat.new("Tom",8)
c2 = cat.new("Oggy",9)

puts c1 < c2