class Question {

  constructor() {
    this.title = createElement('h1')
    this.reset = createButton('Reset');
    this.input1 = createInput("Enter your name here");
    this.input2 = createInput("Enter correct option");
    this.button = createButton('Play');
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    background("lightBlue");
    this.title.html("My Quiz Game");
    this.title.position(350, 0);
    this.reset.position(900, 370)

    this.reset.mousePressed(() => {
      contestantCount=0;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
      var Contestants = database.ref('contestants');
      Contestants.remove
    })

    this.question.html(" What is the national animal of india? " );
    this.question.position(150, 80);
    this.option1.html("1: Horse" );
    this.option1.position(150, 130);
    this.option2.html("2: Stag" );
    this.option2.position(150, 180);
    this.option3.html("3: Tiger" );
    this.option3.position(150, 230);
    this.option4.html("4: Lion" );
    this.option4.position(150, 280);

    this.input1.position(150, 340);
    this.input2.position(350, 340);
    this.button.position(310, 370);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.question.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
