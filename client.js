$(document).ready(readyNow)

function readyNow(){
  $('#submitButton').on('click', inputSubmitted)
  // $('#submitButton').on('click', totalSalary)

}//end of ready now

const employees = []

class Employee{
  constructor (firstname ,lastname ,employeeid ,employeetitle ,annualsalary, monthlysalary){
    this.firstname = firstname;
    this.lastname = lastname;
    this.employeeid = employeeid;
    this.employeetitle = employeetitle;
    this.annualsalary = annualsalary;
    // this.monthlysalary = monthlysalary;
  }//end of constructor
}//end of class
//Makes inputs and appends them to DOM
function inputSubmitted(){
if($('#firstName').val()=== '' || $('#lastName').val() === '' || $('#employeeNumber').val() === ''|| $('#employeeTitle').val()=== '' ||
$('#annualSalary').val() === ''){
alert('All Fields Not Enter Please Try Again');
return 'in inputSubmitted'
}
  let isEmployee = new Employee(
    $('#firstName').val(),
    $('#lastName').val(),
    $('#employeeNumber').val(),
    $('#employeeTitle').val(),
    $('#annualSalary').val()
  )//end of input variable
  employees.push(isEmployee);
  $('#content').append(`<tr>
    <td>${isEmployee.firstname}</td>
    <td>${isEmployee.lastname}</td>
    <td>${isEmployee.employeeid}</td>
    <td>${isEmployee.employeetitle}</td>
    <td>${isEmployee.annualsalary}</td></tr>`
  )//end of appending
  for(employee of employees){
  let monthlyTotal = Math.round(employee.annualsalary/12)
$('#container').append(`<li>Total Monthly Salary = ${monthlyTotal}`)
}
}//end of input submitted
