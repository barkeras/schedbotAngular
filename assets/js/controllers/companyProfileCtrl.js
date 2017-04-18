'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('CompanyProfileCtrl', ["$scope", "flowFactory", function ($scope, flowFactory) {
    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();
    
    $scope.companyInfo = {
        "id": 1,
        "companyName": "Chipotle Mexican Grill",
        "hqAddressStreet": "1401 Wynkoop St. Ste. 500",
        "hqAddressCity": "Denver",
        "hqAddressState": "CO",
        "hqAddressZip": "80202",
        "industry": "Fast Food",
        "joinDate": "4/20/2017",
        "endDate": "7/5/2019",
        "url": "http://www.chipotle.com/",
        "phone": "303-595-4000",
        "logo": "assets/images/chipotleLogo.jpg",
        twitter: 'https://twitter.com/ChipotleTweets',
        facebook: 'https://www.facebook.com/chipotle/',
        email: null
        
    }

    $scope.userInfo = {
        firstName: 'Andrew',
        lastName: 'Barker',
        url: 'www.example.com',
        email: 'Andrew@example.com',
        phone: '(641)-734-4763',
        gender: 'male',
        zipCode: '12345',
        city: 'London (UK)',
        avatar: 'assets/images/andrewavatar.jpg',
        twitter: '',
        github: '',
        facebook: '',
        linkedin: '',
        google: '',
        skype: 'AndrewBarker82'
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
}]);