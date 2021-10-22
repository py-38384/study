fun addNumbers(n1: Double, n2: Double): Int {
    val sum = n1 + n2
    return sum
}
fun main(args: Array<String>) {
    val number1 = 12.2
    val number2 = 3.4
    val result: Double
    result = addNumbers(number1, number2)
    println("result = $result")
}