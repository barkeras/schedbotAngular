'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('CompaniesCtrl', ["$scope", "$filter", "ngTableParams", "toaster", function ($scope, $filter, ngTableParams, toaster) {

    
    var data = [{
        "id": 1,
        "companyName": "Chipotle",
        "hqAddressStreet": "1401 Wynkoop St. Ste. 500",
        "hqAddressCity": "Denver",
        "hqAddressState": "CO",
        "hqAddressZip": "80202",
        "industry": "Fast Food",
        "joinDate": "4/20/2017",
        "endDate": "7/5/2019"
    }, {
        "id": 2,
        "companyName": "Kroger",
        "hqAddressStreet": "1014 Vine Street",
        "hqAddressCity": "Cincinnati",
        "hqAddressState": "OH",
        "hqAddressZip": "45202",
        "industry": "Retail",
        "joinDate": "5/24/2017",
        "endDate": ""
    }, {
        "id": 3,
        "companyName": "Pleasant Ridge Chili",
        "hqAddressStreet": "6032 Montgomery Rd.",
        "hqAddressCity": " Cincinnati",
        "hqAddressState": "OH",
        "hqAddressZip": "45213",
        "industry": "Restaurants",
        "joinDate": "5/26/2017",
        "endDate": ""
    }, {
        "id": 4,
        "companyName": "Home Depot",
        "hqAddressStreet": "2455 Paces Ferry Rd",
        "hqAddressCity": "Atlanta",
        "hqAddressState": "GA",
        "hqAddressZip": "30339",
        "industry": "Retail",
        "joinDate": "7/4/2017",
        "endDate": ""
    }, {
        "id": 5,
        "companyName": "3M",
        "hqAddressStreet": "3M Center",
        "hqAddressCity": "St. Paul",
        "hqAddressState": "MN",
        "hqAddressZip": "55144",
        "industry": "Manufacturing",
        "joinDate": "7/21/2017",
        "endDate": ""
    }, {
        "id": 6,
        "companyName": "Lexus",
        "hqAddressStreet": "19001 S Western Ave",
        "hqAddressCity": "Torrance",
        "hqAddressState": "CA",
        "hqAddressZip": "90501",
        "industry": "Automotive",
        "joinDate": "8/7/2017",
        "endDate": ""
    }, {
        "id": 7,
        "companyName": "Yum! Brands",
        "hqAddressStreet": "1900 Colonel Sanders Lane",
        "hqAddressCity": "Louisville",
        "hqAddressState": "KY",
        "hqAddressZip": "40213",
        "industry": "Fast Food",
        "joinDate": "8/18/2017",
        "endDate": ""
    }, {
        "id": 8,
        "companyName": "Walgreens",
        "hqAddressStreet": "200 Wilmot Rd",
        "hqAddressCity": "Deerfield",
        "hqAddressState": "IL",
        "hqAddressZip": "60015",
        "industry": "Retail",
        "joinDate": "9/6/2017",
        "endDate": ""
    }, {
        "id": 9,
        "companyName": "BW3",
        "hqAddressStreet": "5500 Wayzata Blvd. Suite 1600",
        "hqAddressCity": "Minneapolis",
        "hqAddressState": "MN",
        "hqAddressZip": "55416",
        "industry": "Restaurants",
        "joinDate": "9/9/2017",
        "endDate": ""
    }, {
        "id": 10,
        "companyName": "Verizon",
        "hqAddressStreet": "1095 Avenue of the Americas",
        "hqAddressCity": "New York City",
        "hqAddressState": "NY",
        "hqAddressZip": "10036",
        "industry": "Telecommunication",
        "joinDate": "9/11/2017",
        "endDate": ""
    }, {
        "id": 11,
        "companyName": "Skyline",
        "hqAddressStreet": "4180 Thunderbird Ln",
        "hqAddressCity": "Fairfield",
        "hqAddressState": "OH",
        "hqAddressZip": "45014",
        "industry": "Fast Food",
        "joinDate": "9/22/2017",
        "endDate": "11/24/2019"
    }, {
        "id": 12,
        "companyName": "Starbucks",
        "hqAddressStreet": "2401 Utah Avenue South",
        "hqAddressCity": "Seattle",
        "hqAddressState": "WA",
        "hqAddressZip": "98134",
        "industry": "Coffee",
        "joinDate": "11/23/2017",
        "endDate": ""
    }, {
        "id": 13,
        "companyName": "Best Buy",
        "hqAddressStreet": "7601 Penn Ave. South",
        "hqAddressCity": "Richfield",
        "hqAddressState": "MN",
        "hqAddressZip": "55423",
        "industry": "Retail",
        "joinDate": "2/18/2018",
        "endDate": ""
    }, {
        "id": 14,
        "companyName": "General Electric",
        "hqAddressStreet": "3135 Easton Turnpike",
        "hqAddressCity": "Fairfield",
        "hqAddressState": "CT",
        "hqAddressZip": "06828",
        "industry": "Conglomerate",
        "joinDate": "7/4/2018",
        "endDate": ""
    }];
    
    
    
    
    $scope.tableParams = new ngTableParams({
        page: 1,
        count: 10
    }, {
        total: data.length,
        getData: function ($defer, params) {
            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    $scope.editId = -1;

    $scope.setEditId = function (pid) {
        $scope.editId = pid;
    };
    
    $scope.saveCompanyInfo = function (id){
        toaster.pop("success", "Success!", "Company information successfully updated");
        $scope.setEditId(-1);
    }
    
    $scope.viewCompanyProfile = function (id){
        //attach to view btn on grid to pull the id and pass to next state
    }
    
    
    
}]);