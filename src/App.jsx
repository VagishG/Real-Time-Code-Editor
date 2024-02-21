import React, { useRef } from 'react';
import Prime,{Sub} from './Components/Navbar';
import Side from './Components/Side';
import Search from './Components/Search';
import CodeEditor from './Components/Editor';
import FilesTab from './Components/FilesTab';
import LeftSideBar from './Components/LeftSideBar';
function App() {

  return (
    <div className='main'>
    <Prime/>
    <Sub/>
    <Side/>
    <Search/>
    <FilesTab/>
    <LeftSideBar/>
    <CodeEditor/>
    </div>
  );
}

export default App