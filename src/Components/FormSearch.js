import React from "react";

export default function FormSearch() {
  return (
    <form>
      <div className="search">
        <input type="text" placeholder="Tìm kiếm ..." />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
    </form>
  );
}
