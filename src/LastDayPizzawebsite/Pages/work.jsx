import React from "react";
import PickMeals from "../Pizza_asset/pick.png";
import ChooseMeals from "../Pizza_asset/chose.png";
import DeliveryMeals from "../Pizza_asset/delivary.png";

const WorkPiza = () => {
  let workList = [
    {
      id: 1,
      image: PickMeals,
      title: "Pick Your Meals",
      description: "Choose from a variety of delicious meals",
    },
    {
      id: 1,
      image: ChooseMeals,
      title: "Pick Your Meals",
      description: "Choose from a variety of delicious meals",
    },
    {
      id: 1,
      image: DeliveryMeals,
      title: "Pick Your Meals",
      description: "Choose from a variety of delicious meals",
    },
  ];
  return (
    <div id="Work">
      <h5 className="Little-Tittle">work</h5>
      <h1 className="big-Tittle">How it Works</h1>
      <p className="work_paragrph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse porro
        debitis, culpa blanditiis ducimus commodi expedita libero quos adipisci
        dolores!
      </p>
      <div className="work-container">
        {workList.map((item) => {
          return (
            <div key={item.id} className="work-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkPiza;
