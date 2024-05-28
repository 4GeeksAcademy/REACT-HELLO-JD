import React from "react";
import Card from "./Card";
import Proptypes from 'prop-types';



const ListCard = () => {

    const cardsData = [
        { id:1, title: "Ruta de los Acantilados de Benitachell", image: "https://cristalderoca.com/senderismo/wp-content/uploads/2022/06/senderismo-cristal-de-roca-benitachell-acantilados-cueva-1-768x512.jpg", text: "Los sorprendentes acantilados de Benitatxell que vamos a visitar se extienden entre las calas del Moraig y del Llebeig, con más de 1,5 kilómetros de paredes rocosas cuya cúspide supera, en varios puntos, los 150 metros de altitud sobre el nivel del mar." },
        { id:2,title: "Ruta de Moraira al Cap D´Or", image: "https://cristalderoca.com/senderismo/wp-content/uploads/2022/06/senderismo-cristal-de-roca-benitachell-acantilados-destacada-1.jpg", text: "El Cap d’Or es también conocido como Punta de Moraira y se encuentra al este del pequeño núcleo urbano de Moraira, el cual forma municipio junto a Teulada. Esta pequeña lengua rocosa no supera el kilómetro de longitud, y alcanza los 166 metros de altitud sobre el mar Mediterráneo, con la Torre del Cap d’Or coronando la gran roca." },
        { id:3,title: "Visita a la Cueva de las Calaveras", image: "https://cristalderoca.com/senderismo/wp-content/uploads/2022/06/senderismo-cristal-de-roca-benitachell-cueva-calaveras-2.jpg", text: "Ball tip turkey tenderloin tail pork loin, pastrami buffalo boudin ham hock. Corned beef turkey." },
        { id:4,title: "El Parque Natural de La Serra Gelada ", image: "https://cristalderoca.com/senderismo/wp-content/uploads/2022/01/senderismo-cristal-de-roca-faro-de-albir.jpg", text: "Entre las Bahías de Benidorm y Alfaz del Pi, el parque natural de la Sierra Gelada abarca 6 kilómetros de litoral, dando lugar a unos impresionantes acantilados y una de las dunas fósiles mas altas e Europa. En el extremo norte del parque natural, en la Punta Bombarda, se ubica el Faro del Albir, que desde 1893 es fiel referencia para los navegantes. Un agradable paseo donde disfutaremos de una preciosas vistas de la Bahía de Altea, la Sierra de Bernia y la propia Serra Gelada." },
    ];
const buttonName= "Rutas turisticas"
    return (
        <div className="container-fluid d-inline-flex">
            <div className="row justify-content-center g-3 mt-2 mb-2">
                {cardsData.map((card) => {
                    return <Card title={card.title} key={card.id} text={card.text} image={card.image} buttonName={buttonName}/>
                })}

            </div>
        </div>
    );

};



export default ListCard;