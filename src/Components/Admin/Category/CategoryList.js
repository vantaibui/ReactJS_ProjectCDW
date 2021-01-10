import React from 'react'

const CategoryList = (props) => {
    return (
        <table className="table border">
      <thead className="bg-primary">
        <tr>
          <th className="border text-center">No.</th>
          <th className="border text-center">Name</th>
          <th className="border text-center">Description</th>
          <th className="border text-center">Action</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
    )
}

export default CategoryList
