hash = Hash.new
while true
  puts "Enter the key/-"
  k = get
  if k == 0
     break
  end
  puts "Enter the value/_"
  v = get
  hash.[k] = value
end
puts "------------"
while true
  puts "Enter the key of value/-"
  k = get
  if k == 0
     break
  end
  puts hash.[k]
end