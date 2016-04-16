var serviceURL = "http://skrishnateja.xyz/phonegaptest/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	//$('#title').html("loading");
	getEmployeeList();
});

function getEmployeeList() {
	// $.getJSON(serviceURL + 'getemployees.php', function(data,status) {
	// 	$('#title').html(status);
	// 	$('#employeeList li').remove();
	// 	employees = data.items;
	// 	$.each(employees, function(index, employee) {
	// 		$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
	// 				'<img src="pics/' + employee.picture + '"/>' +
	// 				'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
	// 				//'<p>' + employee.title + '</p>' +
	// 				'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
	// 	});
	// 	$('#employeeList').listview('refresh');
	// });
}