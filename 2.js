let bownling = {
    players : [ 
    { name : `Michele`, scores: []},
    { name : `Francesca`, scores: []},
    { name : `Gennaro`, scores: []},
    { name : `Matteo`, scores: []},
    ], 
    setFinalScore: function(){
    this.players.forEach((player)=>{
    player.finalScore = player.scores.reduce((acc,n)=>acc+n);
    })
    
    
    },
    
    setScore: function(){
    this.players.forEach((player)=>{
    
    for (let i = 0; i < 10; i++){
    player.scores.push(Math.floor(Math.random()*11))
    }
    })
    },

    'showresults' : function(){
        this.players.sort();
        this.players.forEach( (player)=> console.log(player.name, player.scores, player.finalScore)
    )},

    addPlayers : function(name){
        let newContact = {'name' : name, scores : [] }
        this.players.push(newContact)
    },

    setwinner: function(){
        this.players.sort((a,b)=> b.finalScore - a.finalScore);
        let winner = this.players[0];
        
        if (winner.finalScore > this.players[1].finalScore){
        console.log(`il vincitore è ${winner.name}`);
        } else if (winner.finalScore == this.players[1].finalScore && winner.finalScore == this.players[2].finalScore && winner.finalScore == this.players[3].finalScore)
        {console.log(`i giocatori ${winner.name}, ${this.players[1].name}, ${this.players[2].name} e ${this.players[3].name} hanno pareggiato`)
        }
         else if (winner.finalScore == this.players[1].finalScore && winner.finalScore == this.players[2].finalScore)
        {console.log(`i giocatori ${winner.name} e ${this.players[1].name} e ${this.players[2].name} hanno pareggiato`)
        }
    
}}


bownling.addPlayers(`Marco`)
bownling.setScore();
bownling.setFinalScore();
bownling.showresults();
bownling.setwinner();