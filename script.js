let barColors = [
    "rgba(0,0,255,0.5)",
    "rgba(255,0,255,0.5)",
    "rgba(255,0,0,0.5)",
    "rgba(0,255,255,0.5)",
    "rgba(0,255,0,0.5)",
];

let products = [
    {
        name: "sweets 1",
        link: "media/1.jpg",
        description: "this is description",
        category: 1
    },
    {
        name: "sweets 2",
        link: "media/2.jpg",
        description: "this is description",
        category: 1
    },
    {
        name: "sweets 3",
        link: "media/3.jpg",
        description: "this is description",
        category: 2
    },
    {
        name: "sweets 4",
        link: "media/4.jpg",
        description: "this is description",
        category: 2
    },
    {
        name: "sweets 5",
        link: "media/5.jpg",
        description: "this is description",
        category: 1
    }];

let xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues = [55, 49, 44, 24, 15];

let category = [1, 2];
let amount = [products.filter(elem => elem.category == 1).length, 
    products.filter(elem => elem.category == 2).length];


new Chart("myChart", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production"
        }
    }
});

new Chart("productsChart", {
    type: "pie",
    data: {
        labels: category,
        datasets: [{
            backgroundColor: barColors,
            data: amount
        }]
    },
    options: {
        title: {
            display: true,
            text: "Products by categories"
        }
    }
});