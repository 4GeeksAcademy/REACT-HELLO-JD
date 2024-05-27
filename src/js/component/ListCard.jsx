import React from "react";
import Card from "./Card";
import Proptypes from 'prop-types';



const ListCard = () => {

    const cardsData = [
        { title: "Titulo1", image: "", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, harum voluptate ad fuga eveniet error." },
        { title: "Titulo2", image: "", text: "Bacon ipsum dolor amet kielbasa ground round salami cow. Bresaola jerky pork chop tongue porchetta." },
        { title: "Titulo3", image: "", text: "Ball tip turkey tenderloin tail pork loin, pastrami buffalo boudin ham hock. Corned beef turkey." },
        { title: "Titulo4", image: "", text: "Cow tenderloin tongue cupim jerky beef ribs chicken buffalo pig jowl kielbasa. Alcatra cow brisket." },
    ];


    return (
        <div className="container">
            <div className="row justify-content-center g-3 mt-2 mb-2">
                {/* {cardsData.map((card) => {
                    return <Card title={card.title} text={card.text} image={card.image} />
                })} */}

            </div>
        </div>
    );

};



export default ListCard;