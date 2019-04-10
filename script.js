let person = {
    name: 'John',
    yearofBirth: 1989,
    calcAge: function(){
        console.log(this);
        console.log(this.yearofBirth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

person.calcAge();
