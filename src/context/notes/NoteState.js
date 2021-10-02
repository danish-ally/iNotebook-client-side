import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  // const s1 = {
  //   name: "Danish",
  //   class: "5b",
  // };
  // const [state, setState] = useState(s1);
  // const update = () =>{
  //     setTimeout(() => {
  //         setState({
  //           name: "waseem",
  //           class: "2b",
  //         })
  //     }, 1000);
  // }
  const notesInitial = [
    {
      _id: "613f3444f2f4e06c0174ca82",
      user: "613b3712794e371d5e5801ca",
      title: "Workout",
      description: "Please wake up early and do workout",
      tag: "personal",
      date: "2021-09-13T11:21:40.743Z",
      __v: 0,
    },
    {
      _id: "613f3459f2f4e06c0174ca84",
      user: "613b3712794e371d5e5801ca",
      title: "coding",
      description: "Please wake up early and do coding",
      tag: "personal",
      date: "2021-09-13T11:22:01.141Z",
      __v: 0,
    },
    {
      _id: "613f3459f2f4e06c0174ca84",
      user: "613b3712794e371d5e5801ca",
      title: "coding",
      description: "Please wake up early and do coding",
      tag: "personal",
      date: "2021-09-13T11:22:01.141Z",
      __v: 0,
    },
    {
      _id: "613f3459f2f4e06c0174ca84",
      user: "613b3712794e371d5e5801ca",
      title: "coding",
      description: "Please wake up early and do coding",
      tag: "personal",
      date: "2021-09-13T11:22:01.141Z",
      __v: 0,
    },
    {
      _id: "613f3459f2f4e06c0174ca84",
      user: "613b3712794e371d5e5801ca",
      title: "coding",
      description: "Please wake up early and do coding",
      tag: "personal",
      date: "2021-09-13T11:22:01.141Z",
      __v: 0,
    },
    {
      _id: "613f3459f2f4e06c0174ca84",
      user: "613b3712794e371d5e5801ca",
      title: "coding",
      description: "Please wake up early and do coding",
      tag: "personal",
      date: "2021-09-13T11:22:01.141Z",
      __v: 0,
    },
    {
      _id: "613f3459f2f4e06c0174ca84",
      user: "613b3712794e371d5e5801ca",
      title: "coding",
      description: "Please wake up early and do coding",
      tag: "personal",
      date: "2021-09-13T11:22:01.141Z",
      __v: 0,
    },
    {
      _id: "613f3459f2f4e06c0174ca84",
      user: "613b3712794e371d5e5801ca",
      title: "coding",
      description: "Please wake up early and do coding",
      tag: "personal",
      date: "2021-09-13T11:22:01.141Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    // <NoteContext.Provider value={{state, update}}>
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
