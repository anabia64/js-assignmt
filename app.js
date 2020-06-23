// ...... Chapter 21-25 .......
// Question1
// var firstName=prompt("Enter your First name");
// var secondName=prompt("Enter your Second name");
// var fullName=firstName+" "+secondName;
// alert("Good Morning! "+fullName);



//Question2
// var favMob=prompt("Enter your favourite mobile phone model");
// document.write("My favourite phone is: "+favMob+"<br>");
// document.write("Length of string: "+favMob.length);



//Question3
// var count="Pakistani";
// document.write("String: "+count+"<br>");
// var indexN=count.indexOf("n")
// document.write("Index of 'n': "+indexN);



//Question4
// var world="Hello world"
// document.write("String: "+world+"<br>");
// var indexl=world.lastIndexOf("l");
// document.write("Last index of 'l: "+indexl)



//Question5
// var count1="Pakistani";
// document.write("String: "+count1+"<br>");
// var char3rd=count1.charAt(3);
// document.write("Character at index 3: "+char3rd);




//Question6
// var firstName=prompt("Enter your First name");
// var secondName=prompt("Enter your Second name");
// var fullName=firstName.concat(" "+secondName);
// alert("Good Morning! "+fullName);




//Question7
// var city="Hyderabad";
// document.write("City: "+city+"<br>");
// var rep=city.slice(5);
// document.write("After replacement:  Islam"+rep);




//Question8   Method 1
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var firstChar = message.indexOf("and");
//  if (firstChar !== -1) {
//  message = message.slice(0, firstChar) + "&" + message.slice(firstChar + 3);
// }
// var secondChar=message.lastIndexOf("and");
// if(secondChar!==-1){
//     message=message.slice(0,secondChar)+ "&" + message.slice(secondChar +3 );
//     document.write(message);
// }




//Question8   Method 2
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var repl = message.replace(/and/g,"&");
// document.write(repl);



//Question 9
// var strng="472";
// var num=parseInt(strng);
// document.write("value: "+strng+ "<br>Type: String<br>");
// document.write("value: "+num+"<br>Type: Number");



//Question 10
// var userInput=prompt("Enter any word I will show it in uppercase");
// var upper=userInput.toUpperCase();
// document.write("User Input: "+userInput+"<br>")
// document.write("Upper Case: "+upper);




//Question 11
// var userInput2=prompt("Enter any word I will Capitalize it");
// var userRep=userInput2.slice(0,1);
// var upper2=userRep.toUpperCase();
// document.write("User Input: "+userInput2+"<br>")
// document.write("Upper Case: "+upper2+userInput2.slice(1));




//Question 13
// var username=prompt("Enter username");
// var userInput2=username.length
// for(var i=0; i<username.length; i++){
//     if(username.slice(0,i+1)=="!",username.slice(0,i+1)==",",username.slice(0,i+1)==".",username.slice(0,i+1)=="@"){
//         alert("Please enter a valid username");
//     }
// }




//Question14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery=prompt("Welcome to our bakery what do you want to order");
// bakery=bakery.toLowerCase();
// var bakeryItems=A.indexOf(bakery);
// if(bakeryItems!=-1){
//     alert(bakery+" is available at index "+bakeryItems+" in our bakery");
// }else{
//     alert("We are sorryn " +bakery+" is not available in our Bakery");
// }




//Question16
// var university = "University of Karachi";
// var strng=university.split("");
// document.write(strng);




//Question17
// var user=prompt("Enter any word");
// var lastChar=user.length;
// document.write("User input: "+user+"<br>");
// document.write("Last Character of input: "+user.charAt(lastChar-1) );




//Question18
//  var sent="the quick brown fox jumps over the lazy dog";
//  var count=(sent.split("the").length - 1);
//  document.write("Text: "+sent+"<br>")
//  document.write("There are "+count+"occurrence(s) of word 'the'")





// ...... Chapter 26-30 .......
// Question1 part(a)
// var number=prompt("Enter any positive number");
// var rounded=Math.round(number)
// document.write("Number: "+number+"<br>");



// //Question1 part(b)
// document.write("Round off value: "+rounded+"<br>");



// //Question1 part(c)
// document.write("Floor value: "+Math.floor(number)+"<br>");



// //Question1 part(d)
// document.write("Ceil value: "+Math.ceil(number));





//Question2 part(a)
// var num2=prompt("Enter any negative number");
// var rounded=Math.round(num2)
// document.write("Number: "+num2+"<br>");



// //Question2 part(b)
// document.write("Round off value: "+rounded+"<br>");



// //Question2 part(c)
// document.write("Floor value: "+Math.floor(num2)+"<br>");



// //Question2 part(d)
// document.write("Ceil value: "+Math.ceil(num2));





//Question3
// var val=prompt("Enter any number I will show you its absolute value");
// document.write("The absolute value of "+val+" is "+Math.abs(val));




//Question4
// var user1=prompt("Press ok to simulates a dice");
// var simulated=Math.random()*6;
// document.write("Random dice value: "+Math.ceil(simulated)+"<br>");




//Question5
// var user1=prompt("Enter 2 for heads");
// var user2=prompt("Enter 1 number for tails");
// var toss=Math.random()*2;
// var floor=Math.floor(toss);
// if(floor==0){
//     document.write(user1+"<br> random coin value: Heads" );
// }else if(floor==1){
//     document.write(user2+"<br> random coin value: Tails");
// }




//Question6
// var randomNum=Math.random()*100;
// document.write("Random number between 1 and 100: "+ Math.floor (randomNum));




//Question7
// var weight=prompt("Enter you weight in kilograms");
// var intWeight=parseFloat(weight);
// document.write("The weight of user is: "+intWeight+" kilograms");




//Question8
// var secNum=Math.random()*10;
// var secNumb=Math.round(secNum);
// var userNum=prompt("Enter a number betwen 1 and 10");
// if(userNum==secNumb){
//     alert("Conratulations your number match the secret number");
// }
// else{
//     alert("Try Again!");
// }





// ...... Chapter 31-34 .......
// Question1
// var d= new Date();
// document.write(d);




// Question2
// var m=["January","Febrary","March","April","May","June","July","Aughust","September","Octuber","November","December" ];
// var today=new Date();
// var month=today.getMonth();
// alert("Cuttent Month: "+m[month]);




// Question3
// var dayName=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var today=new Date();
// var day=today.getDay();
// alert("Today is "+dayName[day]);




//Question4
// var today=new Date();
// var daySS=today.getDay();
// if(daySS==0||daySS==6){
//      alert("It's Fun day");
//  }




//Question5
// var today=new Date();
// var date=today.getDate();
// if(date<16){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month.")
// }





//Question6
// var today=new Date();
// var millis=today.getTime();
// var mins=millis/(1000*60);
// document.write("Current Date: "+today+"<br>" );
// document.write("Elapsed milliseconds since january 1, 1970: "+millis+"<br>");
// document.write("Elapsed minutes since january 1, 1970: "+mins);





//Question7
// var today=new Date();
// var time=today.getHours();
// if(time>12){
//     alert("It's PM");
// }else{
//     alert("It's AM")
// }




//Question8
// var laterDate=new Date("December 31, 2020");
// alert(laterDate);




//Question9
// var ramzan=new Date("June 18, 2015");
// var today=new Date();
// var Diff=today.getTime()-ramzan.getTime();
// var diffDays=Diff/(1000*60*60*24);
// var accu=Math.floor(diffDays)
// alert(accu+" days have been passed since 1st Ramadan, 2015")




//Question10
// var refDate=new Date("December 5, 2015");
// var refSec=refDate.getTime();
// var today= new Date();
// var todaySec =today.getTime();
// var diff=todaySec-refSec;
// var accuSec=diff/1000;
// document.write("On reference date "+refDate+",<br>"+Math.floor(accuSec)+" seconds had passed since today")



//Question11
// var curDate=new Date();
// document.write("Current date: "+curDate+"<br>");
// curDate.setHours(13);
// document.write("1 hour ago, it was :"+curDate)




//Question12
// var todayDate=new Date();
// document.write("Current date: "+todayDate+"<br>");
// todayDate.setFullYear(todayDate.getFullYear()-100);
// document.write("100 years back, it was: "+todayDate);




//Question13
// var age=prompt("Enter your age");
// document.write("Your age is "+age+"<br>");
// var today=new Date;
// var curYear=today.getFullYear();
// var dob=curYear-age;
// document.write("Your birth year is: "+dob);



// //Question14 Part(a)
// var cusName=prompt("Enter your name");


// //Question14 Part(b)
// var curMonth=prompt("Enter current month");


// //Question14 Part(c)
// var units=prompt("Enter number of units");


// //Question14 Part(d)
// var charUnit=16;


// //Question14 Part(e)
// var netAmount=units*charUnit;


// //Question14 Part(f)
// var latePay=350;


// //Question14 Part(g)
// var grossAmount=netAmount+latePay;

// document.write("<h1>K-Electric Bill</h1>Customer Name: "+cusName+"<br>Month: "+curMonth+"<br>Number of units: "+units
// +"<br>Charges per unit: "+charUnit+"<br>Net Amount Payable (within Due Date): "+netAmount+"<br>Late Payment Surcharge: "+latePay+"<br>Gross Amount Payable (after Due Date): "+grossAmount)




// ...... Chapter 35-38 .......
//Question1
// function Date_time(){
//     var curDate=new Date();
//     document.write(curDate);
// }
// Date_time();




//Question2
// function greeting(){
//     var first_name=prompt("Enter you First Name");
//     var second_name=prompt("Enter you Second Name");
//     document.write(first_name+" "+second_name+" Good Evening!");

// }
// greeting();




//Question3
// function add(){
//     var num_1=parseInt(prompt("Enter first number"));
//     var num_2=parseInt(prompt("Enter second number"));
//     return num_1+num_2
// }

// document.write(add());




//Question4
// function cal(num1,opr,num2){
//     if(opr==="+"){
//         return num1+num2;
//     }
//     else if(opr==="-"){
//         return num1-num2;
//     }
//     else if(opr==="*"){
//         return num1*num2;
//     }
//     else if(opr==="/"){
//         return num1/num2;
//     }
// }
// var num1=parseInt(prompt("Enter first value"));
// var opr=prompt("Enter operator");
// var num2=parseInt(prompt("Enter second value"));
// document.write(num1+" "+ opr+" "+num2+" = "+ cal(num1,opr,num2));




//Question5
// function sqr(a){
//     return a*a;
// }
// document.write( sqr(prompt("Enter any number for its square")));




//Question6
// function fact(f){
//     var ans=1;
//     if(f==0||f==1){
//         return ans;
//     }else{
//         for(i=f; i>=1; i--){
//             ans=ans*i
//         }
//         return ans;
        
//     }

//     }
//     document.write(fact(prompt("Enter any number to find its factorial")))
    




//Question7
// function count(){
//     var startNum=prompt("Enter starting number");
//     var endNum=prompt("Enter ending number");
//     for(a=startNum; a<=endNum; a++){
//          document.write(a)
//     }  
// }
// count();




//Question8
// function hypo(){
//     var base=parseInt(prompt("Enter value of base"));
//     var perp=parseInt(prompt("Enter value of perpendicular"));
//     var plus=base+perp;
//     function hypotenuse(){
//        var ans= base*base+perp*perp;
//         return ans;
//     }
//     document.write (hypotenuse()+"<br>");
//     document.write("plus is "+plus);        
// }
// hypo();




// //Question9 part1
// function rectangleArea(width,height){
//     return width*height;
// }
// document.write ("Area of rectangle is "+rectangleArea(3,4));





//Question10
function palindrome(str){
    var str= prompt("Enter text");
    var re=/[^A-Zz-z0-9]/g;
    str=str.toLowerCase().replace(re);
    var len=str.length;
    for(var i=0; i<len/2; i++){
        if(str[i]!==str[len - 1 -i]){
            document.write("Not a palindrome");
        }
        else{
            document.write("palindrome");
        }
    }

}
palindrome();