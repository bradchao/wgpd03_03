
var Brad01Layer = cc.Layer.extend({
    isDrag: false,
    ctor:function () {
        this._super();

        this.setupMouse();

        return true;
    },

    setupMouse: function () {
        var listener = {
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();

                target.isDrag = true;

            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isDrag = false;
            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if (target.isDrag){
                    var x = e.getLocationX();
                    var y = e.getLocationY();
                    cc.log(x + " x " + y);
                }


            },
            onMouseScroll: function (e) {
                //cc.log("scroll");
            }
        };
        cc.eventManager.addListener(listener,this);






    }



});

var Brad01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad01Layer();
        this.addChild(layer);
    }
});

