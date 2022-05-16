# React-based find a waldo game










## Object design
![Faw diagram](https://i.ibb.co/H7Bvbtr/Fa-W-diagram.png)

[The diagram](https://github.com/TarouShota/wheres-waldo-react/blob/master/wiw.vpp)

The main logic behind the game is to find 4 characters

Hidden in the Where's Waldo-style illustration

There is a german term for this kind of illustration, which is - ```wimmelbilder```

## Game Rules

The Player has 5 minutes in total
In that time span he has to find 4 characters:

Bowser -  Mario game series,

Turnip Head - Howl's moving castle,

Patrick - SpongeBob series,

Tom - Tom and Jerry series



## Under the hood

The game is written using React library and JavaScript, which is a prototype-based object-oriented language

Used object-oriented programming principles:

Encapsulation and Inheritance



```javascript
class Hidden {
    constructor(name, position, found) {
        this.name = name;
        this.position = position;
        this.found = false
    }
    clicked() {
        this.found = true
        return true

    }
}

class EasyHidden extends Hidden {
    constructor() {
        super(...arguments);
        this.dificulty = 'easy'

    }
}
class NormalHidden extends Hidden {
    constructor() {
        super(...arguments);
        this.dificulty = 'normal'
    }
}
class HardHidden extends Hidden {
    constructor() {
        super(...arguments);
        this.dificulty = 'hard'
    }

}
```

Image by [Anomaly World Studio](https://anomaly-world.com/)
