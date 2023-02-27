console.log("it works")

//1.A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

let chickens = 2

let cows = 4

let pigs = 4


function Howmanylegs(animal,animal2, animal3){
    console.log(animal+animal2+animal3)
}

console.log(Howmanylegs(chickens,cows,pigs));

//2.Define a function named findPerimeter that takes in length and width and finds the perimeter of a rectangle.

function findPerimeter(length,width){
    console.log(2*(length+width))
}

findPerimeter('5',10)

//3.Define a function named concatName. Given two strings, firstName and lastName, return a single string in the format "last, first".


function concatName(firstname,lastname){
    console.log(lastname + ','+ firstname)

}

concatName('Asia','Autrey');


//4.Write a function named triArea that takes in 2 inputs, the base and height of a triangle and return its area.

    function triArea(base,height){
        console.log((height * base)/2)

    }

    triArea(4,10)


//5.Define a function named lessThan100. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function  lessThan100(input1,input2){
        if(input1+input2 < 100)
            console.log(true)
        else
            console.log(false)
}

lessThan100(5,10)

//6.Write a function named makesTen that takes two inputs. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function makesTen(input1,input2){
        if(input1||input2 ===10|| input2+input1===10)
            console.log (true)
        else
            console.log(false)
}

makesTen(5,5)

//7.You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, create a function named points that will find the final points for the team and return that value.

let threepoint = 3
let twopoint =2
let amtshot;
function points(amtshots,pointamt) {
    return amtshots * pointamt
}

console.log(points(5,twopoint))

//8.Define a function named Convert that takes in minutes as an input and will converts those minutes into seconds.

function convert(min){
    console.log(min *60)
}


//9.Write a function named remained that takes two numbers as inputs. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remained(para1,para2){
    console.log(para1 %  para2)
}

remained(10,2)

//10.Write a function named getFirstValue that takes an array containing only numbers and return the first element.

function getFirstValue(array){
    console.log('the first element; ' + array[0])
}

getFirstValue()