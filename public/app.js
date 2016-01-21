(function() {
    //start of function
  var app = angular.module('filescanner', []);

app.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){

	$scope.fileScan = function(){
		console.log($("#fileUpload").val());
	    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt|.tsv)$/;
        if (regex.test($("#fileUpload").val().toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                
					var formData = new FormData();

					// HTML file input, chosen by user
					formData.append("userfile", $("#fileUpload")[0].files[0]);
					var request = new XMLHttpRequest();
					request.open("POST", $window.location.href);
					request.send(formData);
//					var reader = new FileReader();
//	             	reader.onload = function (e) {
//					console.log(e.target.result);
//					var table = $("<table></table>");
//					var rows = e.target.result.split("\n");
//					for (var i = 0; i < rows.length; i++) {
//						var row = $("<tr />");
//						row.html(rows[i]);
//						table.append(row);
//					}
//                    $("#editor").html('');
//                    $("#editor").append(table);
//                }
//               reader.readAsText($("#fileUpload")[0].files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
	}
	
	
}]);//end of controller
  //end of function
})();
