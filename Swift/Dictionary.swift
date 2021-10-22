var months = Dictionary<Int,String>()
months = [1:"January",2:"February",3:"March",4:"April",5:"May"]
print(months[1])
for (key,value) in months{
 print("\(key) : \(value)")
}