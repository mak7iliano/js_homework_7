// 1.Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

class Circle {
    constructor(_radius){
        this.r = _radius;
    }

    get radius(){
        return this.r;
    }
    set radius(value) {
        [this.r] = [value];
    }

    get diameter(){
        return 2*this.r;
    }

    area(){
        return Math.PI * this.r**2;
    }

    length(){
        return 2* Math.PI * this.r;
    }
}


// let newCircle = new Circle(10);

// console.log(newCircle.radius); // 10
// newCircle.radius = 20;
// console.log(newCircle.radius); // 20
// console.log(newCircle.diameter); // 40
// console.log(newCircle.area()) // 1256.6370614359173
// console.log(newCircle.length()) // 125.66370614359172

//2. Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты

class Marker{
    constructor(_color, _quantity){
        this.color = _color;
        this.quantity = _quantity;
        if(this.quantity > 100){
            this.quantity = 100;
        }
    }

    print(text){
        let temp = '', i = 0;
        while(this.quantity && text.length > i){
            temp += text[i]
            if(text[i] != ' ') this.quantity-= 0.5;
            i++;
        }
        document.write(`<span style="color:${this.color};">${temp}</span`)
    }
}

// let marker = new Marker('red', 6);

// console.log(marker.print('hello world1 hello world 2')) // hello world1 h

class PrimeMarker extends Marker{
    prime(quantity){
        this.quantity += quantity;
        if(this.quantity > 100){
            this.quantity = 100;
        }
    }
}

// let primeMarker = new PrimeMarker('red', 6);

// primeMarker.prime(40)
// console.log(primeMarker); // quantity = 46




// 3. Реализовать класс Employee, описывающий работника, и создать массив работников банка.

class Employee{
    constructor(_name, _surname, _age, _position){
        this.name = _name;
        this.surname = _surname;
        this.age = _age;
        this._position = _position;
    }
}

let ivanov = new Employee('Ivan', 'Ivanov', 22, 'sales manager'),
alexandrov = new Employee('Alexandr', 'Alexandrov', 33, 'head'),
bondarenko = new Employee('Bohdan', 'Bondarenko', 44, 'front-end developer');

let team = [ivanov, alexandrov, bondarenko];

class EmpTable{
    constructor(arr){
        this.array = arr;
    }

    getHtml(){
        document.write('<table>\n<tr>\n<td>Name</td>\n\n<td>Surname</td>\n<td>Age</td>\n<td>Position</td>\n</tr>');
        for (let i of this.array){
            document.write(`\n<tr>\n<td>${i.name}</td>\n\n<td>${i.surname}</td>\n<td>${i.age}</td>\n<td>${i._position}</td>\n</tr>`);
        }
        document.write('</table>');
    };
}

i = new EmpTable(team);

console.log(i.getHtml());