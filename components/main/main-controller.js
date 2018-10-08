"use strict";
{
    angular.module('app')
     .controller('MainController', function(){
         const $ctrl = this;
        //  $ctrl.me = { name: 'Tai', number: '555-555-5555'}
         $ctrl.familyMembers = [
            {name: 'Brit', relation: 'wife', age: 29},
            {name: 'AJ', relation: 'brother', age: 13},
            {name: 'Shya', relation: 'sister', age: 19},
            {name: 'Layla', relation: 'dog', age: 4}
            ];
        
            

            $ctrl.changeName = function (name) {
            $ctrl.familyMembers.name = name;
        }
        $ctrl.addName = function() {
            $ctrl.familyMembers.name.push(newName);
        }
        

        });

     
}