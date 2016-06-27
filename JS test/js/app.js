(function (window) {

    'use strict';

    var data = {
            animals: window.animals,
            food: window.food
        },
        animalsToShow = [9, 32, 2, 10, 8, 5],
        showAnimal = [];


    fomShowAnimalsArray();
    drawAnimalTable();


    function fomShowAnimalsArray () {
        $.each(animalsToShow, function (index, animalId) {
            findAnimalById(animalId);
            });
        // console.log(showAnimal);
    }

    function findAnimalById(animalId) {

        //TODO Write JS code to find animal by id and return searched animal

        $.each(animals, function(indexAnimal, animalsValue) {
          if (animalsValue.id===animalId) {
            // console.log(data.animals[indexAnimal]);
            showAnimal.push(data.animals[indexAnimal]);
          }
        });
    }


    function drawAnimalTable() {
        var table = $('<table></table>').appendTo($(window.containerForTable).html(''));


        $('<tr></tr>').appendTo($('<thead></thead>').appendTo(table))
            .append('<th>Animal</th>')
            .append('<th>Count of Animals</th>')
            .append('<th>Food Type Eat</th>')
            .append('<th>Cost to Zoo by Day</th>');

        table = $('<tbody></tbody>').appendTo(table);

        $.each(showAnimal, function (index, animal) {
            $('<tr></tr>').appendTo(table)
                .append('<td>'+ animal.name +'</td>')
                .append('<td>'+ animal.count +'</td>')
                .append('<td>'+ foodPerAnimal() +'</td>') // TODO Find this animal food and place here food type
                //powinno wypisac: oat, meat, grass, oat, oat, mouse
                .append('<td>Calculate me</td>'); // TODO Calculate how many cost this animal to zoo per day. Formula: animal.count * animal.eatPerDay * food.cost
                // console.log(food[animal.foodId]);
              function foodPerAnimal() {
                $.each(food, function (indexFood, valueFood) {
                  if (valueFood.id === animal.foodId) {
                    console.log(food[indexFood].foodType); //tu sobie sprawdzam i w konsoli wypisuje jak trzeba
                    return food[indexFood].foodType; //a nie wypisuje w tabelke (53)
                  }
                });
              }
        });

        $('<tr></tr>').appendTo($('<tfoot></tfoot>').appendTo(table.parent()))
            .append('<td colspan="3">All Animals cost per Day</td>')
            .append('<td>Calculate me too</td>'); //TODO Find sum of all animals costs per day
    }

})(window);
