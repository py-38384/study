var num = 10
if num < 10{
  print("Number is less then 10")
}else if num == 10{
  print("Number is 10")
}else{
  print("Number is greater then 10")
}
num = 20
switch num {
  case 5:
       print("Number is \(num)")
  case 10:
       print("Number is\(num)")
  case 20:
       print("Number is\(num)")
  case 50:
       print("Number is\(num)")
  default:
       print("Error!")
}