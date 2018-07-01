
var Brad02Layer = cc.Layer.extend({
    ctor:function () {
        this._super();






        return true;
    },


});

var Brad02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad02Layer();
        this.addChild(layer);
    }
});

