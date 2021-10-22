package main
import "fmt"
func mars_age(n int)int{
     var age = (n*365)/687
     return age
}
func main() {
    var age int
    fmt.Scanln(&age)

    mars := mars_age(age)
    fmt.Println(mars)
}