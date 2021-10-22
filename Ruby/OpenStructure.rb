require "ostruct"

Person = OpenStruct.new
Person.name = "Piyal Hossain"
Person.age = 19
Person.address = "Bangladesh,natore"

puts Person.name
=begin
you can initialize like this
Person = OpenStruct.new(name:"Piyal Hossain",age:19,addresss:"Bangladesh")
=end 