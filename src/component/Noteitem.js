import React, { useContext } from "react";
import { useSelector } from "react-redux";
import service from "../Services/api";
import { useDispatch } from "react-redux";
import { deleteNotes } from "../action/index";
import { alert } from "../action";


const Noteitem = ({ note, updateNote }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.addNote.note);

  const deleteNote = async (id) => {
    try {
      service.deleteNote(id).then((res) => {
        const newNotes = notes.filter((note) => {
          return note._id !== id;
        });
        dispatch(deleteNotes({ newNotes }));
        dispatch(alert({ msg: "Note Delete successful", status: "danger" }));
        setTimeout(() => {
          dispatch(alert({ msg: "", status: "" }));
        }, 1500);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <i
            className="far fa-trash-alt mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="far fa-edit mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
          <div className="d-flex align-items-center text-break">
            <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
