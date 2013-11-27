// Simple sprite class
function Sprite(args)
{
    this.image = new Image();
    this.image.src = args.imgSrc;
    this.x = args.x  || (args.can.width/2)-(args.spw/2);
    this.y = args.y || (args.can.height-args.spw);
    this.imgFrames = args.frames || 1;
    this.frame = 0;
    // Draw the sprite to the screen
    this.Draw = function()
    {
        
        ctx.drawImage(this.image, this.frame, 0, args.spw,
                      args.spw, this.x, this.y, args.spw, args.spw);
        this.frame += 48;
        if( this.frame >= this.image.width )
        {
            this.frame = 0;
        }
    };
};

// Main function to call
function Run()
{
    ctx.clearRect(0,0, can.width, can.height);
    ticks++;
    Status(ticks);
    sprite.Draw();
}

// Fetch the canvas element and context
var can = document.getElementById('screen');
var ctx = can.getContext('2d');  

// Set ticks to 0 and initialize options array for our sprite
var ticks = 0;

