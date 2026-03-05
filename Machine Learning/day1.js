/* today we will learn about these topics
Browser
DOM
Crud in DOM
Event listeners
*/
// Browser: A browser is a software application used to access information on the World Wide Web.
// It allows users to view and interact with web pages, which are typically written in HTML, CSS, and JavaScript.
// Examples of browsers include Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari.

// DOM: The Document Object Model (DOM) is a programming interface for web documents.
// It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages.
// The DOM provides a way to access and modify the elements of a web page, such as text, images, and links.
// The DOM is created by the browser when a web page is loaded, and it can be manipulated using JavaScript.

// CRUD in DOM: CRUD stands for Create, Read, Update, and Delete.
// In the context of the DOM, these operations allow developers to manipulate web page elements dynamically.
// - Create: Adding new elements to the DOM.
// - Read: Accessing and retrieving information from the DOM.
// - Update: Modifying existing elements in the DOM.
// - Delete: Removing elements from the DOM.

// Event Listeners: Event listeners are functions that wait for specific events to occur on a web page, such as clicks, key presses, or mouse movements.
// When an event occurs, the event listener is triggered, allowing developers to execute code in response to that event.
// Event listeners are commonly used to add interactivity to web pages, such as responding to user actions or updating the content dynamically.
// Example of CRUD operations in the DOM using JavaScript:
// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'Hello, World!';
// Append the new element to the body
document.body.appendChild(newElement);
// Read the content of the new element
const content = newElement.textContent;
console.log(content); // Output: Hello, World!
// Update the content of the new element
newElement.textContent = 'Hello, Universe!';
console.log(newElement.textContent); // Output: Hello, Universe!
// Delete the new element from the DOM
document.body.removeChild(newElement);
// Example of adding an event listener
const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);
// Add an event listener to the button
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

/*
 for DOm Manipulations we can use the following methods 
1-GetElementById
2-GetElementsByClassName
3-GetElementsByTagName
4-QuerySelector
5-QuerySelectorAll
6-CreateElement
7-AppendChild
8-RemoveChild
9-ReplaceChild
10-SetAttribute
11-GetAttribute
12-RemoveAttribute
13-InnerHTML
14-TextContent
15-Style
16-AddEventListener
17-RemoveEventListener

These methods allow developers to interact with the DOM effectively, enabling dynamic content updates and user interactions.
// Example of using some of these methods
// Get an element by ID
const elementById = document.getElementById('myElement');
// Get elements by class name
const elementsByClassName = document.getElementsByClassName('myClass');
// Get elements by tag name
const elementsByTagName = document.getElementsByTagName('div');
// Query selector for a single element
const singleElement = document.querySelector('.myClass');
// Query selector for all elements matching a selector
const allElements = document.querySelectorAll('div.myClass');
// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
// Append the new element to the body
document.body.appendChild(newDiv);
// Remove an element
const elementToRemove = document.getElementById('elementToRemove');
if (elementToRemove) {
    document.body.removeChild(elementToRemove);
}
// Replace an element
const oldElement = document.getElementById('oldElement');
const newElement = document.createElement('div');
newElement.textContent = 'This is a new element';
if (oldElement) {
    document.body.replaceChild(newElement, oldElement);
}
// Set an attribute on an element
const elementToSetAttribute = document.getElementById('elementToSet');
if (elementToSetAttribute) {
    elementToSetAttribute.setAttribute('data-custom', 'value');
}
// Get an attribute from an element
const elementToGetAttribute = document.getElementById('elementToGet');
if (elementToGetAttribute) {
    const customValue = elementToGetAttribute.getAttribute('data-custom');
    console.log(customValue); // Output: value
}   
e
// 
exercise:
Write a program in JavaScript to do the below-mentioned task:

Fix the list of elements by adding the missing element using DOM methods like querySelectorAll and insertBefore.


Note:

Add the missing number to the list without changing the HTML part of the code.<!DOCTYPE html>
<html>
<!-- Please NOTE that the link to assets (like images) need to be set in global context.
For example:
To access an image from assets folder correct way to set src attribute is 

src = 'profile.png'

instead of 

src = './assets/profile.png'
-->

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

</body>

<script>
    // Write your JS program here ====
</script>

</html> 
*/
<script>
    // Select all list items
    const listItems = document.querySelectorAll('ul li');
    
    // Find the missing number
    let missingNumber;
    for (let i = 1; i <= 10; i++) {
        if (![...listItems].some(item => item.textContent == i)) {
            missingNumber = i;
            break;
        }
    }
    
    // Create a new list item for the missing number
    const newItem = document.createElement('li');
    newItem.textContent = missingNumber;
    
    // Insert the new item before the last item in the list
    const lastItem = listItems[listItems.length - 1];
    lastItem.parentNode.insertBefore(newItem, lastItem);
</script>

const listItem = dociument.qyerySelectorAll('ul li');
let missingNumber = null;

for( let i=0;i<listItem.length;i++)
{
    if(!)
}