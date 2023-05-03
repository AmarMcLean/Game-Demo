import { Stage, game, ColorLayer, BitmapText, level  } from 'melonjs';

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        level.load("area01");
        //level.load("test_area02");
        
    }
};

export default PlayScreen;
