fun shippingCost(amount: Double, international: Boolean): Double {
    var bill: Double = 0.0
    if(international == false){
        if(amount > 75){
            bill = 0.0
            return  bill
        }
        bill = amount * 0.1
        return bill
    }
    else{
        bill = amount * 0.15
        if(bill >= 50){
            bill = 50.0
            return bill
        }
        return bill
    }
}
fun main(args: Array<String>) {
    val total = readLine()!!.toDouble()
    val international = readLine()!!.toBoolean()    
    println(shippingCost(total, international))
}