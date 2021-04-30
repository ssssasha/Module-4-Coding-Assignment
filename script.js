
const names = ["Ella", "John", "Emily", "Edward", "janny","john","Jacob", "liam","Thomas","James"];

for(i=0; i<names.length; i++){
    if(names[i].charAt(0) == "j" || names[i].charAt(0) =="J")
    {
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello " + names[i])
    }
}
