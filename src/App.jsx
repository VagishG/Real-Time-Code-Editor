import React, { useRef } from 'react';
import Prime,{Sub} from './Components/Navbar';
import Side from './Components/Side';
import Search from './Components/Search';
import CodeEditor from './Components/Editor';

function App() {

  return (
    <div className='main'>
    <Prime/>
    <Sub/>
    <Side/>
    <Search/>
    <CodeEditor/>
    </div>
  );
}

export default App