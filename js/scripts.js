//back-end
var pingPongNumber = [];
function pingPong (input1){
    for (var index = 1; index <= input1; index+=1){
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
//front-end

$(document).ready(function(){
   $("form#start").submit(function(event){
      event.preventDefault();
      var input1 = parseInt($("input#input1").val());

      pingPong(input1);

      pingPongNumber.forEach(function(input1){
         $("#output").append('<li>' + input1 + "</li>");
      });
   });
});
