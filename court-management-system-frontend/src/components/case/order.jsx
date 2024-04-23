import React from "react";

export default function Order() {
  const sections = [
    {
      title: "Section 17 (Interim Order)",
      orders: [{ date: "12/05/2024", view: "View" }]
    },
    {
      title: "Award Order",
      orders: [{ date: "25/05/2024", view: "View" }]
    },
    {
      title: "Other Order",
      orders: [
        { date: "11/05/2024", view: "View" },
        { date: "15/05/2024", view: "View" },
        { date: "17/05/2024", view: "View" },
        { date: "19/05/2024", view: "View" },
      ]
    }
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <table className="table table-bordered">
            <thead className="table-active table-dark">
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  {section.title}
                </th>
              </tr>
            </thead>
            <tbody>
              {section.orders.map((order, idx) => (
                <tr key={idx}>
                  <th style={{ textAlign: "center" }}>{order.date}</th>
                  <td style={{ textAlign: "center" }}>
                    <a>{order.view}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
