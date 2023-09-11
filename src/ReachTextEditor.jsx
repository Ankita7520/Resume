import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

function RichTextEditor() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        className='paragh'
        modules={{
          toolbar: [
            [ { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, ],
            [{ 'align': [] }],
            [],
            ['clean']
          ]
        }}
      />
      <div>
        {/* <h3>Editor Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} /> */}
      </div>
    </div>
  );
}

export default RichTextEditor;
