package main
import "fmt"

func main() {
    //your code goes here
    var i int;
    var num [5]int;
    for i = 0;i < 3;i++ {
        fmt.Scanln(&num[i])
    }
    for i = 0;i < 3;i++ {
        switch num[i]{
           case 0:fmt.Println("Zero")
           case 1:fmt.Println("One")
           case 2:fmt.Println("Two")
           case 3:fmt.Println("Three")
           case 4:fmt.Println("Four")
           case 5:fmt.Println("Five")
           case 6:fmt.Println("Six")
           case 7:fmt.Println("Seven")
           case 8:fmt.Println("Eight")
           case 9:fmt.Println("Nine")
           case 10:fmt.Println("Ten")
        }
    }
}