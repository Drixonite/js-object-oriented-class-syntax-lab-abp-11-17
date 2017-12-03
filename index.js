class BoardMember {
  constructor(name, homeState, training){
    this.name = name;
    this.homestate = homeState;
    this.homeState = homeState
    this.training = training
  }
  sayHi(){
    return "Hi, my name is Mr. Polished. I am from New York, and I was trained in law."
  }
  veto(){
    return "No, I must disagree"
  }
  approve(){
    return "You can do that!"
  }
  doCharity(){
    return "I like to help people."
  }
  releasePressStatement(){
    return "You will see great things from Scuber."
  }
}

class Ceo extends BoardMember {
  hireEmployee() {
    return "Welcome aboard!"
  }
}
