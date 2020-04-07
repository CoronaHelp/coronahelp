import React,{ useState } from "react";
import { ListGroup } from "reactstrap";
import Paginator from "./Paginator";

const ProfileList = ({ array, Card }) => {

  const [ pages, setPages ] = useState({ start: 0, end: 5 })
  return (
    <ListGroup>
      {array.slice(pages.start, pages.end).map((item, i) => (
        <Card key={i} {...item} />
      ))}
      <Paginator itemsLength={array.length} itemsPerPage={5} setPages={setPages} pages={pages} />
    </ListGroup>
  );
};

export default ProfileList;
