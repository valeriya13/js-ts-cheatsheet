// app.js

// Create unique symbol for alerts
const ALERT_SYMBOL = Symbol('alert');

// Define two simple component objects
const component1 = { name: 'Component 1' };
const component2 = { name: 'Component 2' };

// Function to show alert on a component
function showAlert(component, message) {
  const alertObj = {
    message,
    timestamp: Date.now()
  };

  // Store alert object using Symbol as key
  component[ALERT_SYMBOL] = alertObj;

  console.log(`Alert on ${component.name}: ${message}`);
}

// Function to remove alert from a component
function removeAlert(component) {
  if (component[ALERT_SYMBOL]) {
    console.log(`Alert removed from ${component.name}: ${component[ALERT_SYMBOL].message}`);
    delete component[ALERT_SYMBOL];
  } else {
    console.log(`No alert to remove from ${component.name}`);
  }

  printObjectProperties(component);
}

function printObjectProperties(component){
    console.log(component.name + " component own properties : " + Object.getOwnPropertyNames(component) + " & symbols " +  Object.getOwnPropertySymbols(component).map(sym => sym.toString()));
}

function printComponentsProperties(){
    printObjectProperties(component1);
    printObjectProperties(component2);
}

// Example usage
printComponentsProperties();

showAlert(component1, 'Warning for Component 1');
showAlert(component2, 'Warning for Component 2');

printComponentsProperties();

setTimeout(() => removeAlert(component1), 2000);
setTimeout(() => removeAlert(component2), 4000);
