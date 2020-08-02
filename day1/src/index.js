class ObjectUtilities {
  /* Your magic here */
  static mergeObjects = (obj1, obj2) => {
    //merge object one and two and save as new object
    return Object.assign(obj1, obj2);
  };

  //   static mergeObjects = (objA, objB) => Object.assign(objA, objB);

  static removePassword = (obj) => {
    // if object have password, then erase it
    if (obj.hasOwnProperty("password")) {
      delete obj.password;
    } else {
      return "There is no password in object";
    }
    return obj;
  };

  static freezeObj = (obj) => {
    // make object not changed
    return Object.freeze(obj);
  };
  //   static freezeObj = (obj) => Object.freeze(obj);

  static getOnlyValues = (obj) => {
    // show value of object
    return Object.values(obj);
  };

  static getOnlyProperties = (obj) => {
    // show properties of object
    return Object.getOwnPropertyNames(obj);
  };
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
