var EmployeeSalaries ={
  employee1:{
    name:'Пилип',
    salary:2300
  },
  employee2:{
    name:'Тарас',
    salary:4500
  },
  employee3:{
    name:'Петро',
    salary:9000
  }
};
function getValue(object){
  var total = 0,
      keys = Object.keys(object);
  for(var key of keys){
    if(!object) return 0;
    total += object[key].salary;
  }
  return total;
}
console.log(getValue(EmployeeSalaries));
