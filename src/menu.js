
import pastry from './images/pastry.jpg';
import meat from './images/grilled_meat.jpg';
import fish from'./images/grilled_fish.jpg';
import ball from './images/meatballs.jpg';
import cake from './images/cake.jpg';

const data = {
    Appetizers:[
        {
            image:pastry,
            title:'White and brown Pastry',
            price:'78.99$',
        },
        {
            image:meat,
            title:'Grilled Meat',
            price:"60.00$",
        },
        {
            image:fish,
            title:'Grilled Fish',
            price:"46.50$",
        }

    ],

    'Main Course':[
        {
            image:ball,
            title:"Chicken Balls",
            price:"28.00$",
        }
    ],
    Dessert:[
        {
            image:cake,
            title:"Strawberry Cake",
            price:"15.00$",
        }
    ]
}

let food = document.createElement('div');
food.classList.add('food');

for(let category in data){
    //data[fd] =>  we access the array containign the 3 food
    let section = document.createElement('div');
    section.classList.add('food_section');

    let title = document.createElement('h1');
    title.textContent = category;


    let see_more = document.createElement('button');
    see_more.textContent = 'Order More';

    let items = document.createElement('div'); // for all foods of section
    items.classList.add('food_list');
    
    for(let fd of data[category]) // now each array is acessible ie {image,}
    {

       // console.log(fd.title);

        let item = document.createElement('div');
        item.classList.add('food_card');

        let pic = document.createElement('img');
        pic.src = fd['image']; 

        let name = document.createElement('p');
        name.textContent = fd.title;

        let prix = document.createElement('p');
        prix.textContent = fd.price;

        let order = document.createElement('button');
        order.textContent = 'Order Now';

        item.appendChild(pic);
        item.appendChild(name);
        item.appendChild(prix);
        item.appendChild(order);

        items.appendChild(item);

    }

    section.appendChild(title);
    section.appendChild(items);
    section.appendChild(see_more);
    
    food.appendChild(section);

}

export {food};