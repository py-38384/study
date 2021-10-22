package main
import "fmt"
func add(x,y int)(int){
    return x+y
}
func main(){
  var num1,num2 int
  fmt.Println("Enter 1st number:")
  fmt.Scanln(&num1)
  fmt.Println("Enter 2nd number:")
  fmt.Scanln(&num2)
  result := add(num1,num2)
  fmt.Println(result)
}