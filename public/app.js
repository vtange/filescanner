(function() {
    //start of function
  var app = angular.module('filescanner', []);

app.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){

	$scope.fileScan = function(){

		var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.wav|.mp3|.ogg|.flac|.wma)$/;
        if (regex.test(_.fileupload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
				
				//PREPARE DATA AND SEND
					var formData = new FormData();

					// HTML file input, chosen by user
					formData.append("userfile", $("#fileUpload")[0].files[0]);
					var request = new XMLHttpRequest();
					request.open("POST", window.location.href);
					request.send(formData);
				
            }
			else {
                alert("This browser does not support HTML5.");
            }
        }
		else {
            alert("Please upload a valid CSV file.");
		}
	}
	
	
}]);//end of controller
  //end of function
})();
