class Animal{
  constructor(spices,color,height,name) {
    this.spices = spices;
    this.color = color
    this.height = height;
    this.name = name;
  };
  walking(){
    console.log(this.name+" is walking...");
  };
  eating(){
    console.log(this.name+" is eating...");
  };
};

class Human extends Animal{
  constructor(color,height,name,religion,country){
    super("human",color,height,name);
    this.religion = religion;
    this.country = country;
  };
  talking(){
    console.log("Hi my name is "+this.name);
  };
  counting(range){
    for(let i = 1;i <= range;i++){
      console.log(i);
    };
    return "done"
  };
}

let tom = new Animal("Dog","red",0.5,"Tom");
let rakib = new Human("brown",2.2,"Rakib","Islam","Bangladesh");
console.log(tom.eating());
console.log(rakib.spices);
console.log(rakib.counting(50));