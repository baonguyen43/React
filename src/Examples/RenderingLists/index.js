import React from "react";

const people = [
  { id: 0, name: "Creola Katherine Johnson", profession: "mathematician" },
  { id: 1, name: "Mario José Molina-Pasquel Henríquez", profession: "chemist" },
  { id: 2, name: "Mohammad Abdus Salam", profession: "physicist" },
  { id: 0, name: "Percy Lavon Julian", profession: "chemist" },
];
// Cho một danh sách lọc ra những người làm ngành hóa học và những người còn lại

// Loc danh sách cách 2
function ListSection({ title, people }) {
  return (
    <>
      <h2> {title} </h2>
      <ul>
        {people.map((x) => (
          <li key={x.id}>
            {x.name}
            {x.profession}
          </li>
        ))}
      </ul>
    </>
  );
}
function RenderingLists() {
  // show list
  //   const listItems = people.map((person) => (
  //     <li key={person.id}>
  //       <b> {person.name} </b>
  //       {person.profession}
  //     </li>
  //   ));
  //   return <ul> {listItems}</ul>;

  // Lọc danh sách cách 1
  //   const chemists = people.filter((person) => person.profession === "chemist");
  //   const professElse = people.filter((x) => x.profession !== "chemist");
  //   return (
  //     <div>
  //       <h2> Chemists </h2>
  //       <ul>
  //         {chemists.map((person) => (
  //           <li key={person.id}>
  //             <b>{person.name}</b> {person.profession}
  //           </li>
  //         ))}
  //       </ul>
  //       <h2> Profession Else </h2>
  //       {professElse.map((x) => (
  //         <li key={x.id}>
  //           <b> {x.name} </b> {x.profession}
  //         </li>
  //       ))}
  //     </div>
  //   );

  // Lọc danh sách cách 2 tt
  const chemists = people.filter((x) => x.profession === "chemist");
  const professElse = people.filter((x) => x.profession !== "chemist");
  return (
    <>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Profession Else " people={professElse} />
    </>
  );
}

export default RenderingLists;
