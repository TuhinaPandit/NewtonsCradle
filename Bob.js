class Bob
{
    constructor(x,y)
    {
        var options = 
        {
            restitution: 0
        }

        this.x=x;
        this.y=y;
        this.r=r;
ellipse(0,0,this.r, this.r);
		
        this.paper=Bodies.circle(bob.x, bob.y, bob.r, options)

        World.add(world, this.paper);
    }

    display()
    {
            var pospaper = this.paper.position

			push()
            translate(pospaper.x, pospaper.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255)
			rotate(this.angle)
            ellipse(0,0,this.r, this.r);
            pop()
    }
}