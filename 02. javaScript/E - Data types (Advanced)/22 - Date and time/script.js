//Date() => built in Object, to print or create a date and time.
//Creation
//Syntax    => new Date()
let date = new Date();
console.log(date); //Outputs => Day Month Date Year Time(hours:minutes:seconds)

//new Date(milliseconds) the parameter is called timestamp.
date = new Date(0);
console.log(date); //Outputs => Thu Jan 1 1970
//new Date(timestamp)
date = new Date(24 * 3600 * 1000); //Here the parameter is in milliseconds for precision.
console.log(date); //24 hours, 60minutes and 60seconds, so 3600 seconds, and 1000 milliseconds in every second.

//getTime() method
console.log(date.getTime());

//new Date(dateString)
//Syntax
//new Date(year, month, date, hours, minutes, seconds, milliseconds)
//Year => 4 digits, month => 0 to 11(0: jan, 11: dec), date => day of the month(default 1),
let dateOne = new Date(2017, 3, 9, 10, 23, 9, 789);
console.log(dateOne);
console.log(dateOne.getTime());
//-----------------------------------------------------------------------------------------
//Accessing Date object (date methods)-----------------------------------------------------
//getFullYear()  4digits
//getMonth()  0 to 11
//getDate()   day of the month 1 to 31
//getHours()
//getMinutes()
//getSeconds()
//getMilliseconds()
//getDay()    day of the week (0: sunday to 6: saturday)
//getTime()
//getTimezoneOffset()

let dateTwo = new Date(2023, 4, 1);
console.log(dateTwo);
//getFullYear()
console.log(dateTwo.getFullYear()); //2023
//getMonth()
console.log(dateTwo.getMonth()); //4
//getDate()
console.log(dateTwo.getDate()); //1
//getHours()
console.log(dateTwo.getHours());
//getMinutes()
console.log(dateTwo.getMinutes());
//getMilliseconds()
console.log(dateTwo.getMilliseconds());
//getDay()
console.log(dateTwo.getDay()); //current day, Monday( 1)
//getTime()
console.log(dateTwo.getTime()); //outputs time in milliseconds starts from jan 1 , 1970 , 00:00:00:0000
//getTimezoneOffset
console.log(dateTwo.getTimezoneOffset()); //returns difference between UTC and local time in Minutes.

//---------------------------------------------------------------------------------------------
//Setting Date objects------------------------------------------------------------------------
//Setting or changing the existing date components
//setFullYear(year, [month], [date])
//setMonth(month, [date])
//setDate(date)
//setHours(hours, [minutes], [seconds], [milliseconds])
//setMinutes(minutes, [seconds], [milliseconds])
//setSeconds(seconds, [milliseconds])
//setMilliseconds(milliseconds)
//setTime(milliseconds)   => set whole day by milliseconds, since 1.1.1970

let dateThree = new Date();
console.log(dateThree);
//setFullYear()
dateThree.setFullYear(2022);
console.log(dateThree); //change only the year to 2022.

//---------------------------------------------------------------------------------------------
//AutoCorrection-------------------------------------------------------------------------------
//We can add out of the range numbers to date, time, seconds, it will autocorrect itself.
//example:
dateThree.setHours(dateThree.getHours() + 56); //as per the input the date and time changed.
console.log(dateThree);
dateThree.setMonth(dateThree.getMonth() + 14);
console.log(dateThree);

//Date to number conversion,
//when we convert Date object  into numbers, the result shows the milliseconds
console.log(+dateThree);

//Date.now()
let present = Date.now();
console.log(present); //outputs the milliseconds since 1970 upto current milliseconds.

//------------------------------------------------------------------------------------------
//Date.parse("YYYY-MM-DDTHH:mm:ss.sssZ")
//converts date string to dates.
//YYYY -year,
//MM - month,
//DD - date,
//T - delimiter,
//HH - hours, mm - minutes, ss - seconds
//If all the input format is correct, the output will be milliseconds, if not, returns NaN.

let today = Date.parse("2023-04-01T10:35:10.984");
console.log(today);
