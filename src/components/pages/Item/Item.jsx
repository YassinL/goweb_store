import React from "react";
import CarrouselImages from "../../organisms/CarouselImages/CarouselImages";
import InformationsItem from "../../organisms/InformationsItem/InformationsItem";
import ItemForm from "../../molecules/ItemForm/ItemForm";
import MoreItems from "../../organisms/MoreItems/MoreItems";

import "./Item.scss";

export default function Item() {
  return (
    <>
      <main className="item" role="main">
        <div className="item_images">
          <CarrouselImages />
        </div>
        <div className="item_informationsForm">
          <InformationsItem />
          <ItemForm />
        </div>
      </main>
      <MoreItems />
    </>
  );
}
