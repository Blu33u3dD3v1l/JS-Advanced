function func(input){
    
    let newObj = input;
    let area = newObj.weight * 0.1 * newObj.experience;
    let check = newObj.levelOfHydrated;    
    if(newObj.dizziness == true){

        newObj.dizziness = false;
        newObj.levelOfHydrated  = newObj.levelOfHydrated + area; 
    }
   return newObj;

}
func({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
       
  );