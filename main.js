var canvas = new fabric.Canvas('myCanvas');
player_y = 10;
player_x = 10;
block_imgw =30;
block_imgh =30;
player_object="";
block_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
player_object =Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({ top:player_y, left:player_x });

canvas.add(player_object);
    });

}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
block_object =Img;
block_object.scaleToWidth(block_imgw);
block_object.scaleToHeight(block_imgh);
block_object.set({ top:player_y, left:player_x });

canvas.add(block_object);
    });

}
