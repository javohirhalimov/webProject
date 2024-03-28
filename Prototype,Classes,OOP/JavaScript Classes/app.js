class Color {
    
    constructor (r,g,b, name) {
        this.r =r;
        this.g =g;
        this.b =b;
        this.name = name;
    }

    greet(){
        return `Hello From ${this.name}!`;
    }

    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0){
        return `rgba(${this.innerRGB()},${a})`;
    }
    innerRGB(){
        const {r,g,b} = this;
        return `${r},${g},${b}`;
    }

}
const c1 = new Color(255,67,89,'tomato');
const white = new Color(200,255,255,'white');