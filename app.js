//doesnt work with $(() => {}) I cant see anything in console?????

//Make Address entity
function Address(city, street, buildingNumber) {
    this.city = city;
    this.street = street;
    this.buildingNumber = buildingNumber;
}
//Make Person entity
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
//So we can use this - we set Person.protoype on Customer protoype
//Make Person getFullName function on the Person prototype:
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// 3.Make a Customer entity that inherits Person and binds Address properties to it
function Customer(city, street, buildingNumber, firstName, lastName) {
    Address.call(this, city, street, buildingNumber)
    Person.call(this, firstName, lastName)
}

Customer.prototype = Object.create(Person.prototype) //Set the prototype of Customer to be Person

// 4. Make an Item entity:
function Item(itemName, itemId, itemPrice) {
    this.itemName = itemName;
    this.itemId = itemId;
    this.itemPrice = itemPrice;
}

// 5. Make a Order entity:
function Order(orderId, customerDetails) {
    this.orderId = orderId;
    this.items = [] //new Item()
    this.customerDetails = customerDetails
}

Order.prototype.addItemToOrder = function(itemName, itemId, itemPrice) {
    //do i need this.itemPrice = itemPrice???????????????????
    let newItem = new Item(itemName, itemId, itemPrice)

    // let newItem = {
    //     itemPrice,
    //     itemName,
    //     ItemId
    // }
    this.items.push(newItem)
}

Order.prototype.getTotalPrice = function() {
    let total = 0
    for (let item of items) {
        total += item.itemPrice
    }
}


let jackCustomer = new Customer('Tel Aviv', 'yehuda levi', 79, 'Jack', 'Amsterdam')
jackCustomer.getFullName() //'Jack Amsterdam'
let newOrder = new Order('55238243', jackCustomer)
newOrder.addItemToOrder('the item name', 777, 35)
    //############################################################################################ PART 2 ######################################################################


function UiRender(firstName, lastName, city, street, buildingNumber) {
    this.firstName = firstName
    this.lastName = lastName
    this.city = city
    this.street = street
    this.buildingNumber = buildingNumber
}

UiRender.prototype.renderReadPerson = function() {
    let fN = $('<input>').attr({
        type: 'text',
        id: 'firstName',
        name: 'firstName'
    });
    let lN = $('<input>').attr({
        type: 'text',
        id: 'lastName',
        name: 'lastName'
    });
    let addPersonBtn = $('<input>').attr({
        type: 'button',
        id: 'addPerson',
        innerHTML: 'Add Person',
        class: 'btn-styled',
        click: function() {
            console.log($('#firstName').val() + ' ' + $('#lastName').val())
        }
    });

    $("body").append(fN, lN, addPersonBtn); // Append the new elements

}

// UiRender.prototype.renderReadPerson = function() {
//     // return this.firstName + ' ' + this.lastName
//     $("<p></p>").text("Text.");

// function appendText() {
//     var txt1 = "<p>Text.</p>";               // Create element with HTML 
//     var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
//     var txt3 = document.createElement("p");  // Create with DOM
//     txt3.innerHTML = "Text.";
//     $("body").append(txt1, txt2, txt3);      // Append the new elements
//   }

// }

UiRender.prototype.renderReadAddress = function() {
    return this.city + ' ' + this.street + ' ' + this.buildingNumber
}

UiRender.prototype.renderReadItem = function() {
    console.log('hi')
    console.log('$("#items").val()', $("#items").val())
    return $('#items').val()
}

UiRender.prototype.renderReadAll = function() {
    // let $saveBtn = $('<button>')
    $('#container').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Save',
            class: 'btn-styled',
            click: function() {
                // this.order ??????
                // this.item ????
            }
        })
    );

    // $(document).ready(function() {
    //     $('#container').append('<button class="btn-styled" type="button">Save</button>');
    // });

    return {
        fullName: this.renderReadPerson(),
        address: this.renderReadAddress(),
        item: this.renderReadItem()
    }


}

UiRender.prototype.addpropertyNotMethod = true;




let jackRender = new UiRender('Jack', 'Amsterdam', 'New York', 'Rotchild', 78)
let zviRender = new UiRender('Zvi', 'Amali', 'Los Angeles', 'Park Ave', 37)

// document.getElementById('test').innerHTML = 'my father ' + jackRender.renderReadPerson() + '  ' + 'is his name'
$('#test').html('my father ' + jackRender.renderReadPerson() + '  ' + 'is his name and his son is ' + zviRender.renderReadPerson() + ' and that is that')


$('#test2').html('this is what got returned from select: ' + '<strong>' + jackRender.renderReadItem() + '</strong>' + ' yep thats what you got')


$('#test3').html('this is what got returned from select: ' + '<strong>' + $('#items').val() + '</strong>' + ' yep thats what you got')









// notes: 
// function appendText() {
//     var txt1 = "<p>Text.</p>";               // Create element with HTML 
//     var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
//     var txt3 = document.createElement("p");  // Create with DOM
//     txt3.innerHTML = "Text.";
//     $("body").append(txt1, txt2, txt3);      // Append the new elements
//   }