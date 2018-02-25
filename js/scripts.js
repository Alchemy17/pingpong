//business logic
var pingPongNumber = [];

function pingPong (number){
    for (var index = 1; index <= number; index+=1){
        if(index % 15 === 0){
            pingPongNumber.push("pingpong");
        }
        else if(index % 5 === 0){
            pingPongNumber.push("pong");
        }
        else if(index % 3 === 0){
            pingPongNumber.push("ping");
        }
        else{
            pingPongNumber.push(index);
        }
    }
}


//user interface logic

$(document).ready(function(){
   $("form#ping-pong").submit(function(event){
      event.preventDefault();
      var input1 = parseInt($("input#input1").val());

      pingPong(input1);

      pingPongNumber.forEach(function(number){
         $("#output").append('<li>' + input1 + "</li>");
      });
   });
});
