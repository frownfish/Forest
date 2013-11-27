// Simple sprite class
function Sprite(args)
{
    var self = this
    self.can = args.can;
    self.ctx = args.ctx;
    self.spw = args.spw;
    self.img = new Image();
    self.img.src = args.imgSrc;
    self.x = args.x  || (args.can.width/2)-(args.spw/2);
    self.y = args.y || (args.can.height-args.spw);
    self.imgFrames = args.frames || 1;
    self.frame = 0;
    // Draw the sprite to the screen
    this.Draw = function()
    {
        ctx.clearRect(0, 0, self.can.width, self.can.height);
        ctx.drawImage(self.img,
            self.frame,
            0,
            self.spw,
            self.spw,
            self.x,
            self.y,
            self.spw,
            self.spw);
        self.frame += self.spw;
        if( self.frame >= self.img.width )
        {
            self.frame = 0;
        }
    };
};
