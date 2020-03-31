import React, { useEffect, useState } from "react";
const needs = [
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  }
];
const RequestsDisplay = () => {
  const [request, setRequest] = useState([]);
  useEffect(() => {
    setRequest(needs);
  },[]);

  return (
    <div>
      {request.map(t => <h1>{t.title}</h1>)}
    </div>
  );
};

export default RequestsDisplay;
