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

  if($('#firstName').val()=== '' || $('#lastName').val() === '' || $('#employeeNumber').val() === ''|| $('#employeeTitle').val()=== '' ||
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
  <td>${parseInt(isEmployee.annualsalary)}</td>
  <td><button class = "${isEmployee.employeeid}">Delete</button></td>
  </tr>`
)//end of appending
updateMonthly();
//Getting the total monthly salary
function updateMonthly(){
  for(let employee of employees){
    console.log(typeof monthlyTotal);
    monthlyTotal +=(parseFloat(employee.annualsalary/12));
    monthlyTotal = parseInt(monthlyTotal.toFixed(2));
    console.log(monthlyTotal);
    if(monthlyTotal > 20000){
      $('#monthlySalary').addClass('.red');
    }//end of if
  }//end of loop
  $('#container').empty();
  console.log(monthlyTotal);
  $('#container').append(`<li id ="monthlySalary">Total Monthly Salary = ${monthlyTotal}</li>`)

}//end of monthly update
//Delete button logic
$(`.${isEmployee.employeeid}`).on('click' , inputRemoved)
function inputRemoved(){
  // for(let employee of employees){
  //   if(parseInt(employee.employeeid) == isEmployee.employeeid){
  //     employees.splice(employee , 1)
  let salaryNumber = parseFloat(isEmployee.annualsalary);
  $('#monthlySalary').text(`${monthlyTotal - (salaryNumber/12).toFixed(2)}`)
  console.log(typeof salaryNumber);
//end of if
$(`.${isEmployee.employeeid}`).remove();
//loop ends
}//end of inputRemoved
}//end of input submitted
