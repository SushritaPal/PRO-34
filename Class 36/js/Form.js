class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("car racing game");
        var input = createInput("name");
        var button = createButton("play");
        var greeting = createElement("h3");
        title.position(500,150);
        input.position(500,250);
        button.position(500,350);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player=new Player();
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+ name);
            greeting.position(500,250);
        });
    }
}
