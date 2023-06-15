import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";

const Home = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const submitHandler = () => {
   console.log(editorState.getCurrentContent());
   console.log(convertToRaw(editorState.getCurrentContent()));
  };
  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
      <button type="submit" onClick={submitHandler}>
        send
      </button>
    </>
  );
};
export default Home;
