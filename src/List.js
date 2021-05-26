import React, { useState } from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, age, imgurl, name } = person;
        return (
          <div key={id} className='container'>
            <img src={imgurl} />
            <h3>{name}</h3>
            <p>Age {age}</p>
          </div>
        );
      })}
    </>
  );
};
export default List;
