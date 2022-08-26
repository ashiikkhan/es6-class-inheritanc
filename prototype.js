/**@title : prototype inheritance
 * prototypical inheritance refers to the ability to access object properties from another object. We use a javascript prototype to add new properties and methods to an existing object constructor.
 *
 * @title : Prototype Chain :
 * Prototypical inheritance uses the concept of prototype chaining. Let's explore that concept. Every object created contains [[Prototype]], which points either another object or null. Envision an object C with a prototype property that points to object B. Object B's [[Prototype]] propterties points to prototype object A. This continues onward, forming a king of chain called prototype chain.
 * This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if it not found, it is searched for on that object's prototype, and so on. Thus the entire prototype chain is traversed until the property  is found or null is reached.
 */
