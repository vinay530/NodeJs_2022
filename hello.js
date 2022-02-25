console.log("Welcome to the new class!!");
 
    // var no = 2;
    // var length = 10;
    // for (let i = 1; i <= length; i++) {
    //     var abc =  i*no;
    //     console.log(abc);
    // }
    // function range(start, end) {
    //     if(start === end) return [start];
    //     return [start, ...range(start + 1, end)];
    // }
    var numbers = Array.from(Array(10).keys());
    //var numbers = [...range(1, 10)];

    //console.log(numbers);
    var newarray = numbers.map((num) =>  num*2);
    console.log(newarray);