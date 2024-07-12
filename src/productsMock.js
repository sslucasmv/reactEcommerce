const products = [
    {
        id:1,
        title:"Nike air force 1'07 ",
        price:170200,
        img:"nikeairforce.webp",
        description:"Clasicas muy buenas",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/699261-1200-1200?width=1200&height=1200&aspect=true",
        stock:12,
        category:"deportivas"
    },
    {
        id:2,
        title:"Nike revolution",
        price:140300,
        img:"nikerevolution.jpeg",
        description:"Las mejores para correr",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/378695-1600-1600?width=1600&height=1600&aspect=true",
        stock:8,
        category:"deportivas"
    },
    {
        id:3,
        title:"Nike SB Dunk high PRO",
        price:180200,
        img:"nikesb.webp",
        description:"Las mejores para correr",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/846500-1600-1600?width=1600&height=1600&aspect=true",
        stock:6,
        category:"deportivas"
    },
    {
        id:4,
        title:"Air Jordan 1",
        price:220500,
        img:"airjordan.webp",
        description:"Las jordan con onda",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/730416-1200-1200?width=1200&height=1200&aspect=true",
        stock:10,
        category:"deportivas"
    },
    {
        id:5,
        title:"Nike air force 1'07 ",
        price:170200,
        img:"nikeairforce.webp",
        description:"Clasicas muy buenas",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/699261-1200-1200?width=1200&height=1200&aspect=true",
        stock:12,
        category:"deportivas"
    },
    {
        id:6,
        title:"Nike revolution",
        price:140300,
        img:"nikerevolution.jpeg",
        description:"Las mejores para correr",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/378695-1600-1600?width=1600&height=1600&aspect=true",
        stock:8,
        category:"deportivas"
    },
    {
        id:7,
        title:"Nike SB Dunk high PRO",
        price:180200,
        img:"nikesb.webp",
        description:"Las mejores para correr",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/846500-1600-1600?width=1600&height=1600&aspect=true",
        stock:6,
        category:"deportivas"
    },
    {
        id:8,
        title:"Air Jordan 1",
        price:220500,
        img:"airjordan.webp",
        description:"Las jordan con onda",
        img:"https://nikearprod.vtexassets.com/arquivos/ids/730416-1200-1200?width=1200&height=1200&aspect=true",
        stock:10,
        category:"deportivas"
    },
   
]

export default function productsMock(){
    return new Promise((resolve) => {
   
        console.log("Se esta resolviendo")
        setTimeout(() => {
            resolve(products);
        },2000)
    })
}