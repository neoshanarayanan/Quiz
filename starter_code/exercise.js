var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------


    return 'Hello!';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------

    var arr = [1,2,3,4,5];
    return arr;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------
    var obj = {name: 'neosha', age: '19'};
    return obj;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var length = 5; // modify this to change number of objects
    var arr = new Array();
    for(var i = 0; i<length;i++){
        arr.push(new Object());
    }
    return arr;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    someObject.name = 'galileo';
    return someObject;
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------

    var element3 = someArray[2];
    return element3;
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    // probably good to do a check that they're all strings,but I see they're not, so probably fine in this case
    var concat = string1 + string2 + string3;
    return concat;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------

    const result = someNumbers.filter(number => number > 6);
    return result;
};

exercise.getNames = function(people){
    // ----------------------------------------
    //   QUESTION 09
    //   Return a new array with
    //   the "name" property values.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', age:18},
    //         {name:'bruce', age:22},
    //         {name:'clark', age:25},
    //         {name:'diana', age:29}
    //   ];
    //
    //   You should return
    //     ['peter','bruce','clark','diana']
    // ----------------------------------------

    var names = [];
    people.forEach(function(item){
        names.push(item.name);
    });
    return names;
};

exercise.getSalaryTotal = function(people){
    // ----------------------------------------
    //   QUESTION 10
    //   Return the sum of all the
    //   salaries in array.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', salary:1000},
    //         {name:'bruce', salary:2000},
    //         {name:'clark', salary:3000},
    //         {name:'diana', salary:4000}
    //     ];
    //
    //   you should return
    //     10000
    // ----------------------------------------

    var salaries = [];
    people.forEach(function(item){
        salaries.push(item.salary);
    });
    
    var sum = salaries.reduce((total, current) => total + current);
    
    return sum;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descending.
    // ----------------------------------------

    someNumbers.sort();

    var opposite = someNumbers.reverse();

    return someNumbers;
};

exercise.executeCallback = function(callback){
    
    callback();

};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------

    var personjob = [];
    payroll.forEach(function(item){
        var person = item[1];
        var job = item[2];
        var tuple = [person, job];
        personjob.push(tuple);

        // could also have been done as
        // personjob.push([item[1], item[2]]);
    });

    return personjob;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------
    // I am assuming that this just means the total of all of their salaries, which are the fourth element (3rd index) of the arrays

    var salaries = [];
    payroll.forEach(function(item){
        salaries.push(parseInt(item[3],10)); // parseInt converts from string to int, and giving argument 10 means base 10
    });

    const total = salaries.reduce((total, current) => total + current);

    return total;
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------

    // from question 14: 
    var salaries = []; // should be an array of salaries as integers
    payroll.forEach(function(item){
        salaries.push(parseInt(item[3],10)); // parseInt converts from string to int, and giving argument 10 means base 10
    });

    const filtered = salaries.filter(salary => salary > target);

    return filtered;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------
   
    // just gets the zip codes
    var zips = [];
    payroll.forEach(function(item){
        zips.push(item[4]);
    });



    // just gets the ones with num in them, using .includes() function
    const filteredzips = zips.filter(function(item){
        if (item.includes(num)){
            return true;
        }else{
            return false;
        }
    });


    var numzips = filteredzips.length;
    return numzips;
};


module.exports = exercise;
