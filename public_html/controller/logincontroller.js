define(['angular'],function(Angular){
 Angular.module('App.loginctrl',[])   
.controller('loginctrl',function($scope,$http,$state, $controller){
    $scope.loginservice=function(ClinicID,username,password){
            localStorage.setItem('RoundingSessionId',"");
            localStorage.setItem('userId',0);
            localStorage.setItem('RoleId',0);
            localStorage.setItem('FirstName',"");
            localStorage.setItem('LastName',"");
            localStorage.setItem('userName',"");
            localStorage.setItem('ProviderId',0);
            localStorage.setItem('Initials',"");
            localStorage.setItem('isGlobalUser',false);
            localStorage.setItem('ClinicId',parseInt(ClinicID)); 
            localStorage.setItem('ClinicName',"");
            localStorage.setItem('isFirst',false);
            localStorage.removeItem('selectedDate');
         var WebDateTime = $scope.getWebDateTime(new Date());
            var AuthenticateInputParam={
                sUserName: username, 
                sPassword: password,
                iClinicId: parseInt(ClinicID),
                sLoginTime:WebDateTime,
                btSoftwareType:13
            };
            $http({
             method:'POST',
            url:global.rootUrl+'login',
            data:angular.toJson(AuthenticateInputParam)
           })
           .then(function successcallBack(data,model,text){
               if(data !== ''){
                        if(data.iserror === true){
                           // $that.AppendError("Invalid User");
                        }
                        else{
                           // $that.populateClinicNameandId();
                            if(data.sSessionId !== "0"){
                                try {
                                    //$that.populateClinicNameandId();
                                    var dataid=data.data.iRoleId;
                                    localStorage.setItem('RoundingSessionId',data.data.sSessionId);
                                    localStorage.setItem('userId',data.data.iUserId);
                                    localStorage.setItem('RoleId',data.data.iRoleId);
                                    localStorage.setItem('FirstName',data.data.sFirstName);
                                    localStorage.setItem('LastName',data.data.sLastName);
                                    localStorage.setItem('userName',data.data.sLastName+","+data.data.sFirstName);
                                    localStorage.setItem('ProviderId',data.data.iProviderId);
                                    localStorage.setItem('Initials',data.data.sInitials);
                                    localStorage.setItem('isGlobalUser',data.data.globalUser);
                                    localStorage.setItem('ClinicId',data.data.iClinicId);
                                   // localStorage.setItem('ClinicName',$that.$("#ClinicName").val());
                                    localStorage.setItem('isFirst',true);
                                    $state.go('Pqrsreport');
                                   // var testCtrl1ViewModel = $controller('Pqrscontrl');
                                   // testCtrl1ViewModel.loadvisits();
                                    
                                   // roundingCache.cacheDetails();
                                }
                                catch(e){
                                    window.location.hash="error";
                                }
                            }   
                            else{
                                window.location.hash="logout";
                            }
                        }
                    }
                

            },
            function errorCallBack(jqXHR,exception,options,element){
               var text=exception.getResponseHeader('internalErrors');
                    if (jqXHR.status === 0) {
                        $scope.AppendError("Network down. Cannot connect.");
                    } else if (jqXHR.status === 204) { //2 .code changed to handle apache error code handling.
                        $scope.AppendError("Invalid credentials");
                    } else if (jqXHR.status === 404) {
                        $scope.AppendError("Requested page not found. [404]");
                    } else if (jqXHR.status === 500) {
                        $scope.AppendError("Internal Server Error [500].");
                    } else if (exception.status === 6) {
                        $scope.AppendError("Authentication failed");
                    } else if (exception.status === 61) {
                        $scope.AppendError("Invalid Clinic");
                    } else if (parseInt(exception.responseText) === 6) {
                        $scope.AppendError("Authentication failed");
                    } else if (parseInt(exception.responseText) === 61) {
                        $scope.AppendError("Invalid Clinic");
                    }else if (exception === 'parsererror') {
                        $scope.AppendError("Requested JSON parse failed.");
                    } else if (exception === 'timeout') {
                        $scope.AppendError("Time out error.");
                    } else if (exception === 'abort') {
                        $scope.AppendError("Ajax request aborted.");
                    } else if (exception.responseText === '40') {
                        $scope.AppendError("Inactive User");
                    } else {
                        $scope.AppendError("Network error !");
                    }

            });
    },
    $scope.getWebDateTime=function(Date){
            var d = Date,
            dformat = [ d.getFullYear(),
                        $scope.padLeft((d.getMonth()+1)),
                        $scope.padLeft(d.getDate()),
                        
                    
                    ].join('-')+
                    ' ' +
                  [ $scope.padLeft(d.getHours()),
                    $scope.padLeft(d.getMinutes()),
                    $scope.padLeft(d.getSeconds())].join(':');
                return dformat;
        },
       $scope.padLeft= function(val){
            var  len = (String(10).length - String(val).length)+1;
            return len > 0? new Array(len).join('0')+val : val;
        }
});

});

