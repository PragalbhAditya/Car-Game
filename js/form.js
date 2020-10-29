class Form{
    constructor(){
      this.input = createInput("name")
      this.button = createInput("play")
      this.greeting = createElement('h1');
    }

    display(){
      var title = createElement('h1');
      title.html("Car Racing Game");
      title.position(130,0);
      this.input.position(130,160);
      this.button.position(250,200);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name = this.input.value()
        playerCount = playerCount + 1;

        player.updateCount(playerCount);
        player.update(name);

        this.greeting.html("Hello " + name);
        this.greeting.position(130,150);        
      })
    }
}