//basic switch in go
package main
import "frm"
func main(){
	var num1 float
	var num2 float
	fmt.Println("Enter number 1:")
	fmt.Scanln(&num1)
	fmt.Println("\nEnter number 2:")
	fmt.Scanln(&num2)
	fmt.Println("Enter 1 for + 2 for - 3 for * 4 for /")
	var choice int
    fmt.Scanln(&choice)
	switch choice{
	  case 1:
         fmt.Println(num1+num2)
      case 2:
         fmt.Println(num1-num2)
      case 3:
         fmt.Println(num1*num2)
      case 4:
         fmt.Println(num1/num2)
    }
}