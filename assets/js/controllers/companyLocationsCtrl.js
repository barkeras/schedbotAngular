'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('CompanyLocationsCtrl', ["$scope", "$filter", "ngTableParams", "toaster", function ($scope, $filter, ngTableParams, toaster) {

    
    var data = [{
        "id": 1,
        "locationNumber": "00001",
        "locationAddressStreet": "1816 Trails End Road",
        "locationAddressCity": "Pompano Beach",
        "locationAddressState": "FL",
        "locationAddressZip": "33060",
        "phoneNumber": "954-366-1670",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 2,
        "locationNumber": "00002",
        "locationAddressStreet": "76 Whispering Pines Circle",
        "locationAddressCity": "Dallas",
        "locationAddressState": "TX",
        "locationAddressZip": "75287",
        "phoneNumber": "972-407-0977",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 3,
        "locationNumber": "00003",
        "locationAddressStreet": "2646 Mutton Town Road",
        "locationAddressCity": "Redmond",
        "locationAddressState": "WA",
        "locationAddressZip": "98052",
        "phoneNumber": "360-610-1715",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 4,
        "locationNumber": "00004",
        "locationAddressStreet": "175 Eden Drive",
        "locationAddressCity": "Richmond",
        "locationAddressState": "VA",
        "locationAddressZip": "33060",
        "phoneNumber": "804-921-7257",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 5,
        "locationNumber": "00005",
        "locationAddressStreet": "3896 Golden Street",
        "locationAddressCity": "Miami",
        "locationAddressState": "FL",
        "locationAddressZip": "33128",
        "phoneNumber": "305-679-2408",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 6,
        "locationNumber": "00006",
        "locationAddressStreet": "1198 Roosevelt Wilson Lane",
        "locationAddressCity": "Riverside",
        "locationAddressState": "CA",
        "locationAddressZip": "92516",
        "phoneNumber": "909-931-0793",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 7,
        "locationNumber": "00007",
        "locationAddressStreet": "2455 Oliver Street",
        "locationAddressCity": "Fort Worth",
        "locationAddressState": "TX",
        "locationAddressZip": "76102",
        "phoneNumber": "817-321-2425",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 8,
        "locationNumber": "00008",
        "locationAddressStreet": "1229 Memory Lane",
        "locationAddressCity": "Kankakee",
        "locationAddressState": "IL",
        "locationAddressZip": "60901",
        "phoneNumber": "815-929-7660",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 9,
        "locationNumber": "00008",
        "locationAddressStreet": "4987 Chipmunk Lane",
        "locationAddressCity": "Fort Kent",
        "locationAddressState": "ME",
        "locationAddressZip": "04743",
        "phoneNumber": "207-834-7500",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 10,
        "locationNumber": "00010",
        "locationAddressStreet": "4002 Cabell Avenue",
        "locationAddressCity": "Dulles",
        "locationAddressState": "VA",
        "locationAddressZip": "20166",
        "phoneNumber": "703-572-1059",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 11,
        "locationNumber": "00011",
        "locationAddressStreet": "3229 Parrill Court",
        "locationAddressCity": "Valparaiso",
        "locationAddressState": "IN",
        "locationAddressZip": "46383",
        "phoneNumber": "219-462-9085",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 12,
        "locationNumber": "00012",
        "locationAddressStreet": "4860 Renwick Drive",
        "locationAddressCity": "Fort Washington",
        "locationAddressState": "PA",
        "locationAddressZip": "19034",
        "phoneNumber": "484-278-0393",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 13,
        "locationNumber": "00013",
        "locationAddressStreet": "3010 Round Table Drive",
        "locationAddressCity": "West Chester",
        "locationAddressState": "OH",
        "locationAddressZip": "45069",
        "phoneNumber": "513-777-6885",
        "createDate": "4/20/2017",
        "endDate": ""
    }, {
        "id": 14,
        "locationNumber": "00014",
        "locationAddressStreet": "2262 Lake Rockwell Rd",
        "locationAddressCity": "Ravenna",
        "locationAddressState": "OH",
        "locationAddressZip": "44266",
        "phoneNumber": "614-555-0168",
        "createDate": "4/20/2017",
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