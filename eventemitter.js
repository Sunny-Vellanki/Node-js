const EvenEmitter=require("events");
class Emitter extends EvenEmitter{

}
const MyEm=new Emitter();
MyEm.on("sunny",()=>{
    console.log("An Event Occured 1")
});
MyEm.on("sunny",()=>{
    console.log("An Event Occured 2")
});
MyEm.on("sunny",(x)=>{
    console.log("An Event Occured with variable")
    console.log(x)
});
MyEm.once("bunny",()=>{
    console.log("An Event Occured once")
});

MyEm.emit("sunny");
MyEm.emit("sunny","Ha")
MyEm.emit("bunny")
MyEm.emit("bunny")
