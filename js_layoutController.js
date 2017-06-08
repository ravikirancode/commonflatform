mainApp.controller("layoutController", function($scope,$filter,$sce) {
$scope.submenuhtml ='';
$scope.$watch("menudata", function(){
       // console.log($scope.menudata);
    });

$scope.displaySubmenu = function(catid){
   $scope.submenudata = $filter('filter')($scope.menudata, {CATEGORY_PARENT_ID:catid});
   $scope.submenuhtml ='';
   if($scope.submenudata.length >0){
       
       $scope.submenuhtml = '<div class="row">';   
       $scope.submenucnt =1;
       angular.forEach($scope.submenudata,function(value,index){
           if($scope.submenucnt ==1){
               $scope.submenuhtml += '<div class="col1"><div class="h_nav"><ul>';
           }
           $scope.submenuhtml +='<li><a href="/">'+value.CATEGORY_NAME+'</a></li></li>';
           $scope.submenucnt++;
           if($scope.submenucnt ==10){
               $scope.submenuhtml += '</ul></div></div>';
               $scope.submenucnt =1;
           }
       });
       if($scope.submenucnt%10 != 0){
           $scope.submenuhtml += '</ul></div></div>';
       }
       $scope.submenuhtml += '</div>';	
       //console.log($scope.submenuhtml);
       //return $sce.trustAsHtml($scope.submenuhtml);      
        //return htmlString("<h1>" + 'hai' + "</h1>");
   }else{
       return '';
   }
   //console.log($scope.marvel);
   //return false;
}

});