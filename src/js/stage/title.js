import { Stage, event, Sprite, game, loader, input, state } from 'melonjs';

class ButtonEntity extends Sprite {
    constructor(x, y) {
        super(x, y, {image: "player_run01", framewidth: 178, frameheight: 140});
        
        this.anchorPoint.set(0,0);

        input.registerPointerEvent("pointerdown", this, this.pointerDown.bind(this));
    }

    pointerDown () {
        state.change(state.PLAY);
        return false;
      }
}

class TitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        var backgroundImage = new Sprite(game.viewport.width / 2, game.viewport.height / 2, {
            image: loader.getImage('title_screen'),
        }
    );

    // scale to fit with the viewport size
    backgroundImage.scale(game.viewport.width / backgroundImage.width, game.viewport.height / backgroundImage.height);

    // add to the world container
    game.world.addChild(backgroundImage, 1);

    // change to play state on press Enter or click/tap
    input.bindKey(input.KEY.ENTER, "enter", true);
    input.bindKey(input.KEY.pointer)

    this.handler = event.on(event.KEYDOWN, function (action, keyCode, edge) {
        if (action === "enter") {
            // play something on tap / enter
            // this will unlock audio on mobile devices
            state.change(state.PLAY);
        }
    });

    var button = new ButtonEntity(500, 500);
    game.world.addChild (button, 15);
    }

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent() {
        input.unbindKey(input.KEY.ENTER);
        input.unbindPointer(input.pointer.LEFT);
        event.off(event.KEYDOWN, this.handler);
    }
};

export default TitleScreen;
