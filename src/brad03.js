
var Brad03Layer = cc.Layer.extend({
    sprite:null,
    sprite2:null,
    spriteRect:null,
    isDragging:false,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: cc.winSize.width *1/ 4,
            y: cc.winSize.height / 2
        });
        this.addChild(this.sprite);
        this.spriteRect = cc.rect(
            this.sprite.x - this.sprite.width/2,
            this.sprite.y - this.sprite.height/2,
            this.sprite.width,
            this.sprite.height
            );
        this.sprite2 = new cc.Sprite(res.HelloWorld_png);
        this.sprite2.attr({
            x: cc.winSize.width *3 / 4,
            y: cc.winSize.height / 2
        });
        this.addChild(this.sprite2);

        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                target.x = e.getLocationX();
                target.y = e.getLocationY();
            }
        },this.sprite);



        this.scheduleUpdate();

        //this.setupMouse();

        return true;
    },

    setupMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            dx: 0,
            dy: 0,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();

                var x = e.getLocationX(), y = e.getLocationY();
                var p = new cc.Point(x,y);
                if (cc.rectContainsPoint(target.spriteRect,p)){
                    target.isDragging = true;
                    this.dx = x - target.sprite.x;
                    this.dy = y - target.sprite.y;
                }
            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isDragging = false;
                target.spriteRect = cc.rect(
                    target.sprite.x - target.sprite.width/2,
                    target.sprite.y - target.sprite.height/2,
                    target.sprite.width,
                    target.sprite.height
                )
            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if (target.isDragging){
                    var x = e.getLocationX(), y = e.getLocationY();
                    target.sprite.x = x - this.dx;
                    target.sprite.y = y - this.dy;

                }
            }

        },this);


    }


});

var Brad03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad03Layer();
        this.addChild(layer);
    }
});

