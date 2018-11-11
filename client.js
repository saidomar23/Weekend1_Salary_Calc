$(document).ready(readyNow)
function readyNow(){
  $('#submitButton').on('click', inputSubmitted)
}//end of ready now
const employees = []
let monthlyTotal = 0;
class Employee{
  constructor (firstname ,lastname ,employeeid ,employeetitle ,annualsalary, monthlysalary){
    this.firstname = firstname;
    this.lastname = lastname;
    this.employeeid = employeeid;
    this.employeetitle = employeetitle;
    this.annualsalary = annualsalary;
  }//end of constructor
}//end of class
//Makes inputs and appends them to DOM
function inputSubmitted(){
  if($('#firstName').val()=== '' ||
  $('#lastName').val() === '' ||
  $('#employeeNumber').val() === ''||
  $('#employeeTitle').val()=== '' ||
  $('#annualSalary').val() === ''){
    alert('All Fields Not Enter Please Try Again');
    return 'in inputSubmitted'
  }//end of if statement
  let isEmployee = new Employee(
    $('#firstName').val(),
    $('#lastName').val(),
    $('#employeeNumber').val(),
    $('#employeeTitle').val(),
    $('#annualSalary').val()
  )//end of input variable
  //Appending on table DOM
  employees.push(isEmployee);
  $('#content').append(`<tr class= "${isEmployee.employeeid}">
  <td>${isEmployee.firstname}</td>
  <td>${isEmployee.lastname}</td>
  <td>${isEmployee.employeeid}</td>
  <td>${isEmployee.employeetitle}</td>
  <td>${parseFloat(isEmployee.annualsalary)}</td>
  <td><button class = "${isEmployee.employeeid}">Delete</button></td>
  </tr>`
)//end of appending
updateMonthly();
//Getting the total monthly salary
function updateMonthly(){
  monthlyTotal +=(isEmployee.annualsalary/12);
  monthlyTotal = parseFloat(monthlyTotal.toFixed(2));
  $('#container').empty();
  $('#container').append(`<li id ="monthlySalary">Total Monthly Salary = ${monthlyTotal.toFixed(2)}</li>`)
  console.log(monthlyTotal);
  if(monthlyTotal > 20000){
    $('#container').css("background-color:" , "red");
  }//end of if
}//end of monthly update
//Delete button logic and remvoing monthly salary logic
$(`.${isEmployee.employeeid}`).on('click' , inputRemoved)
function inputRemoved(){
  for(let employee of employees){
    if(employee.employeeid == isEmployee.employeeid){
      monthlyTotal -= (isEmployee.annualsalary/12);
      employees.splice(employee , 1)
      $('#monthlySalary').text(`Total Monthly Salary = ${monthlyTotal.toFixed(2)}`);
      $(`.${isEmployee.employeeid}`).remove();
      if(monthlyTotal < 20000){
        $('#monthlySalary').css('color: red')
      }//end of if
    }//end of if
  }//end of for
}//end of inputRemoved
}//end of input submitted
