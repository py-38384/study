module Mymath
 PI = 3.1416
 def self.square(x)
     x*x
 end
 def self.negate(x)
     -x
 end
 def self.factorial(x)
     (1..x).inject(:*) || 1
 end
end

puts Mymath.square(7)
puts Mymath.factorial(5)