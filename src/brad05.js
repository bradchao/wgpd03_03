
var Brad05Layer = cc.Layer.extend({
    sprite:null,
    isShoot: false,
    dx: 40,
    dy: 40,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: 0,
            y: 0
        });
        this.addChild(this.sprite);

        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                target.isShoot = true;
            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isShoot = false;
            }
        },this);

        this.scheduleUpdate();

        return true;
    },

    update: function () {
        if (this.isShoot){
            cc.log('shooting...');

            this.sprite.x += this.dx;
            this.sprite.y += this.dy;
        }
    }


});

var Brad05Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad05Layer();
        this.addChild(layer);
    }
});

