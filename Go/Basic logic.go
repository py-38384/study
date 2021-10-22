//Basic logic useing go
package main
import "fmt"
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
	if choice == 1{
	fmt.Println(num1+num2)
	}
	if choice == 2{
	fmt.Println(num1-num2)
    }
    if choice == 3{
    fmt.Println(num1*num2)
    }
    if choice == 4{
    fmt.Println(num1/num2)
}