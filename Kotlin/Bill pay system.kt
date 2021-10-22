fun main(args: Array<String>) {
    var hours = readLine()!!.toDouble()
    var total: Double = 0.0
    var value: Double = 0.0
    var flag: Double = 0.0
    if(hours <= 5.0){
        total = hours
    }
    if(hours > 5.0 && hours < 24){
        total = 5.0
        hours -= 5.0
        total += 0.5*hours
    }
    else if(hours > 24){
        flag = hours % 24.0
        hours -= flag
        total += 15 * (hours/24.0)
        total += 0.5 * flag
        
    }
    println(total)
}