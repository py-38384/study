age = 19

case age
when 0..14
  puts "Child"
when 15..24
  puts "Young"
when 25..64
  puts "Adult"
else 65..100
  puts "Senior"
end