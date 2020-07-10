import React from "react";
import { CONTACT_TABLE_TITLE } from "../../constant";

const ListTitle = () => {
  return (
    <>
      <thead className="ant-table-thead">
        <tr>
          {CONTACT_TABLE_TITLE.map((item) => {
            return <th className="ant-table-cell">{item.title}</th>;
          })}
        </tr>
      </thead>
    </>
  );
};

export default ListTitle;
