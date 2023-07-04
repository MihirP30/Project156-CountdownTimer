AFRAME.registerComponent("coin", {
    init: function(){
        for (var i=0; i<15; i++){
            var id = `coin${i}`;

            var posX = (Math.random()*100+(-50));
            var posY = (Math.random()*100+(-50));
            var posZ = (Math.random()*12.5+(72.5));
            var position = {x:posX, y:posY, z:posZ};

            this.create_coins(id, position);
        }
    },
    create_coins(id, position){
        var terrain = document.querySelector("#terrain");

        var coin = document.createElement("a-entity");
        coin.setAttribute("id", id);
        coin.setAttribute("position", position);

        coin.setAttribute("rotation", {x:180, y:0, z:0});
        coin.setAttribute("animation", {
            property: "rotation",
            to: "180 0 360",
            loop: "true",
            easing: "linear",
            dur: 5000,
        });

        var scale = 0.25;
        coin.setAttribute("scale", {x:scale, y:scale, z:scale});

        coin.setAttribute("gltf-model", "./assets/Fish_Coin/Fish Coin.glb");

        coin.setAttribute("body", {type: "static", shape:"none"})
        coin.setAttribute("shape__main", {
            shape: "cylinder",
            radiusTop: 10,
            radiusBottom: 10,
            height: 3,
            offset: "0 1 0"
        })
        coin.setAttribute("game-play", {elementId: `#${id}`})

        terrain.appendChild(coin);
    }
});