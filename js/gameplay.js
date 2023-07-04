AFRAME.registerComponent("game-play", {
    schema:{
        elementId: {type:'string', default:null}
    },
    init: function () {
        var duration = 120;
        var timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
    },
    update: function(){
        this.isCollided(this.data.elementId);
    },
    startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        setInterval(()=> {
          if (duration >=0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.gameOver();        
          }
        },1000)
    },
    isCollided: function(elementId){
        const diverEl = document.querySelector(elementId);
        diverEl.addEventListener("collide", (e)=>{
            if (elementId.includes("#coin")){
                diverEl.setAttribute("visible", false)
                console.log(elementId+" collision");
            }
            else if (elementId.includes("#fish")){
                console.log(elementId+" collision");
            }
        })
    }
})