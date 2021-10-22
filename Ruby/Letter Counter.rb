text = "I am learning Ruby and it's fun to learn"
text.dewncase!
freqs = {}
freqs.default = 0

text.each_char { |char| freqs[char] += 1}

("a".."z").each {|x| puts "#{x} : #{freqs[x]}"}
