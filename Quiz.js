class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
   questions.hide();
    //escribe aquí el código para cambiar el color de fondo 
    background("orange");
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    fill("black");
    textSize(55)
    text("la respuesta correcta es no se xd",425,200);
    
    //llama aquí a getContestantInfo( )
Contestant.getPlayerInfo();

    //escribe la condición para comprobar si contestantInfo no está indefinido 
if(allContestants!==undefined){
  debugger;
  var display_answers=230;
  //escribe aquí el código para agregar una nota
  text("clarooo,se rezalta en color verde",130,230);
  for(var count in allContestants){
    debugger;
    //escribe el código para resaltar al concursante que respondió correctamente
    var display_answerscorrect="2";
    if(display_answerscorrect===allContestants[count].answer)
    fill("green");
    else
    fill("red");
    
display_answers+=30;
textSize(20);
text("no lo creoo "+allContestants[count].name+": "+allContestants[count].answer,250,display_answers);
  }
}
    

    
    
  }

}
