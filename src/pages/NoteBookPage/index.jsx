import { memo, useState } from "react";
import { MAX_NOTE_NUMBER } from "@/configs/app";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";
import "./style.scss";

const NoteBookPage = () => {
  const maxNoteNumber = MAX_NOTE_NUMBER;

  const [notes] = useState(MOCKS);
  const [openedNotes, setOpenedNotes] = useState([]);

  const handleOpenNote = (index) => {
    setOpenedNotes((state) => {
      if (state.includes(index)) {
        return state.filter((item) => item !== index);
      }
      return [...state, index];
    });
  };

  return (
    <div className={classes.noteBookPage}>
      <PageHeading>Note Book</PageHeading>
      <div className={classes.container}>
        <div className="row mb-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-8">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input className="form-control" type="text" placeholder="Search notebook by title" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4">
            <small
              className={`d-flex align-items-center justify-content-end h-100 ${notes.length >= maxNoteNumber ? "text-danger" : ""}`}
            >
              Max Note Number: {notes.length} / {maxNoteNumber}
            </small>
          </div>
        </div>
        <div className="row g-3">
          {notes.length < maxNoteNumber && (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card notebook" style={{ cursor: "pointer" }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <i className="bi bi-plus-lg" style={{ fontSize: "32px" }}></i>
                  <p>Add new note</p>
                </div>
              </div>
            </div>
          )}
          {notes
            .slice()
            .reverse()
            .map((note, index) => (
              <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className={`card notebook ${openedNotes.includes(index) ? "open" : ""}`}>
                  <div className="card-body">
                    <h5 className="card-title" title={note.title}>
                      {index + 1}. {note.title}
                    </h5>
                    <p className="card-text" title={note.content}>
                      {note.content}
                    </p>
                    <div className={classes.actions}>
                      <button className="btn btn-sm text-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                      <button className="btn btn-sm text-secondary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-sm text-primary" onClick={() => handleOpenNote(index)}>
                        {openedNotes.includes(index) ? (
                          <i className="bi bi-chevron-double-up"></i>
                        ) : (
                          <i className="bi bi-chevron-double-down"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(NoteBookPage);

const MOCKS = [
  {
    title: "Card title",
    content:
      "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati officia magnam, illum iure est, reprehenderit aperiam facere repellat libero deserunt temporibus fuga quos aliquid porro quia corporis dolor sapiente.",
  },
  {
    title: "Card title",
    content:
      "2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati officia magnam, illum iure est, reprehenderit aperiam facere repellat libero deserunt temporibus fuga quos aliquid porro quia corporis dolor sapiente.",
  },
  {
    title: "Card title",
    content:
      "3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati officia magnam, illum iure est, reprehenderit aperiam facere repellat libero deserunt temporibus fuga quos aliquid porro quia corporis dolor sapiente.",
  },
  {
    title: "Card title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati officia magnam, illum iure est, reprehenderit aperiam facere repellat libero deserunt temporibus fuga quos aliquid porro quia corporis dolor sapiente.",
  },
  {
    title: "Card title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati officia magnam, illum iure est, reprehenderit aperiam facere repellat libero deserunt temporibus fuga quos aliquid porro quia corporis dolor sapiente.",
  },
  {
    title: "Card title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati officia magnam, illum iure est, reprehenderit aperiam facere repellat libero deserunt temporibus fuga quos aliquid porro quia corporis dolor sapiente.",
  },
];
