class BoardMember {
  constructor(name, homeState, training){

    this.name = name;
    this.homeState = homeState;


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
  sayHi(){
    `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`
  }
}

//
//   this.prototype.veto(){
//     return "No, I must disagree"
//   }
//
// }
//


class Ceo extends BoardMember {
  hireEmployee() {
    return "Welcome aboard!"
  }

}
