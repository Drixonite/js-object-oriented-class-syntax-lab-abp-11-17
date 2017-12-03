class BoardMember {
  constructor(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  veto(){
    return "No, I must disagree"
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
