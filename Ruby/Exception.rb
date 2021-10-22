begin
 puts "I am before the raise"
 raise "An exception has occurred"
 puts "I am after the raise"
rescue
 puts "I am rescued"
ensure
 puts "I am going to execute no matter what happened"
end
puts "I am after the begin block"