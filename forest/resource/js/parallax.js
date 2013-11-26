/** 
 * Data structure to hold layer data
 * @param s <string> Absolute path to the image
 * @param x <int> X coordinate
 * @param Y </int><int> Y coordinate
 */
function Layer(s, x, y) {
    this.img = new Image();
    this.img.src = s;
    this.x = x;
    this.y = y; 
}
 
 
/**
 * Main ParallaxScrolling class
 * @param ctx <context> Canvas context
 * @param imgdata <array> Array with absolute image paths
 */
function ParallaxScrolling(ctx, imgdata) {
    var self = this;    
    if( typeof imgdata === 'undefined' ) imgdata = [];
    this.ctx = ctx;
 
    // Initialize the layers
    this.layers = new Array(imgdata.length);
    for(i=0; i<imgdata.length; i++) {  
        this.layers[i] = new Layer(imgdata[i], 0, 0);
    }
 
    // Function: Move all layer except the first one
    this.Move = function() {
        for(var i=1; i<self.layers.length; i++) {
            if( self.layers[i].x > self.layers[i].img.width ) self.layers[i].x = 0;
            self.layers[i].x += i;          
        }
    };
 
    // Function: Draw all layer in the canvas
    this.Draw = function() {
        self.Move();
        for(var i=0; i<self.layers.length; i++) {
            var x1 = (self.layers[i].x-self.layers[i].img.width);
            self.ctx.drawImage(self.layers[i].img, 0, 0, self.layers[i].img.width, self.layers[i].img.height, 
                                                 self.layers[i].x, 0, self.layers[i].img.width, self.layers[i].img.height);
            self.ctx.drawImage(self.layers[i].img, 0, 0, self.layers[i].img.width, self.layers[i].img.height, 
                                                 x1, 0, self.layers[i].img.width, self.layers[i].img.height);                       
        }
    }
}