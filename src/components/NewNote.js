import React, { useRef } from 'react';

const NewNote = (props) => {
  const { onAddNote, onUpdate } = props;
  const noteRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: 0,
      content: noteRef.current.value,
    };
    onAddNote(data);
    noteRef.current.value = '';
    onUpdate();
  };

  return (
    <div className="new-note">
      <h2 className="new-note__title">New Note</h2>
      <form className="new-note__form" onSubmit={submitHandler}>
        <textarea
          className="new-note__textarea"
          type="text"
          placeholder="Enter text"
          ref={noteRef}
        ></textarea>
        <button className="button" type="submit">
          🢚
        </button>
      </form>
    </div>
  );
};

export default NewNote;
