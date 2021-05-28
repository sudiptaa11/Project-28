class Launcher {
    constructor(b1, p2){
        var options = {
            bodyA : b1,
            pointB : p2,
            stiffness : 0.006,
            length: 20,
        }
        this.launcher = Constraint.create(options);
        this.pointB = p2;
        World.add(world, this.launcher);
    }
    display(){
        if(this.launcher.bodyA ){
            var pos1 = this.launcher.bodyA.position;
            var pos2 = this.pointB;
        
            strokeWeight(5);
            line(pos1.x, pos1.y,pos2.x,pos2.y);
        }
    }
    fly() {
        this.launcher.bodyA = null;
    }

    attach(body) {
        //launcherObject = new Launcher(stoneObj.body,{x:235,y:420})
        this.launcher.bodyA = body;
    }
}