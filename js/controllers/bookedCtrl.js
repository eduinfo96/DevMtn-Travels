angular.module( 'devmtnTravel' ).controller( 'bookedCtrl', function($scope, mainSrv, $stateParams ){
    $scope.travelInfo = mainSrv.travelInfo;
    var booked = function() {
        for(var i = 0; i < mainSrv.travelInfo.length; i++) {
          if( mainSrv.travelInfo[i].id.toString() === $stateParams.id ) {
            $scope.location = mainSrv.travelInfo[i]
            break;
          }
        }
    }
    booked();


} )
