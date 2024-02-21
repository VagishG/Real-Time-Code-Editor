import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const monacoRef = useRef(null);

  function handleEditorWillMount(monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor, monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = monaco;
  }

  function handleOnChange(newValue, event) {
    console.log(newValue); // Log the new value of the editor content
  }

  return (
    <div className="Editor">
      <Editor

        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={handleOnChange}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
