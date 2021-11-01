//doesnt work with $(() => {}) I cant see anything in conosole?????
//so this is nice becausse with a funciton contrutor we can put the functions on the prototype and not in the object itself to save memory but regular objects or factory functions you need to put them inside each and every function.

function UiRender(firstName, lastName, city, street, buildingNumber) {
    this.firstName = firstName
    this.lastName = lastName
    this.city = city
    this.street = street
    this.buildingNumber = buildingNumber
}

UiRender.prototype.renderReadPerson = function() {
    return this.firstName + ' ' + this.lastName
}

UiRender.prototype.renderReadAddress = function() {
    return this.city + ' ' + this.street + ' ' + this.buildingNumber
}

UiRender.prototype.renderReadItem = function() {
    console.log('hi')
    console.log('$("#items").val()', $("#items").val())
    return $('#items').val()
}

UiRender.prototype.renderReadAll = function() {

}

UiRender.prototype.addpropertyNotMethod = true;




let jackRender = new UiRender('Jack', 'Amsterdam', 'New York', 'Rotchild', 78)
let zviRender = new UiRender('Zvi', 'Amali', 'Los Angeles', 'Park Ave', 37)

// document.getElementById('test').innerHTML = 'my father ' + jackRender.renderReadPerson() + '  ' + 'is his name'
$('#test').html('my father ' + jackRender.renderReadPerson() + '  ' + 'is his name and his son is ' + zviRender.renderReadPerson() + ' and that is that')


// /////////////////////////////////////////
//factory function:
function UiRenderTest(firstName, lastName, city, street, buildingNumber) { //createPerson
    return {
        firstName,
        lastName,
        city,
        street,
        buildingNumber,
        renderReadPerson() { //this code repeates in memory so better to remove it! 
            return firstName + ' ' + lastName //works without this adn with this.
        },
        renderReadAddress,
    }
}
// this you need to put an obj inside it :
// function renderReadPerson(obj) {
//     return obj.firstName + ' ' + obj.lastName
// }

function renderReadAddress() {
    return this.city + ' ' + this.street + ' ' + this.buildingNumber
}

function renderReadItem() {
    console.log('hi')
    console.log('$("#items").val()', $("#items").val())
    return $('#items').val()
}

let jackUi = UiRenderTest('Jack', 'Amsterdam', 'New York', 'Rotchild', 78)
console.log('jackUi', jackUi)



// regular object: 
let jackUi = {
    firstName: 'jack',
    lastName: 'amsterdam',
    city: 'New York',
    street: 'Rotchild',
    buildingNumber: 78,
    renderReadPerson() {
        return this.firstName + ' ' + this.lastName
    },
    renderReadAddress: renderReadAddress
}

function renderReadAddress() {
    return this.city + ' ' + this.street + ' ' + this.buildingNumber
}

jackUi.renderReadPerson() // 'jack amsterdam'
jackUi.renderReadAddress() //'New York Rotchild 78'