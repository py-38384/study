module Animal
 class cat
  def speak
    puts "Meow!"
  end
 end
 class dog
  def speak
    puts "Woof!"
  end
 end
end

c = Animal::Cat.new
d = Animal::dog.new

c.speak
d.speak