import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import GlobalStyles from "./styes/GlobalStyles";

//Pages
import Home from "pages/Home/Home";
import Users from "pages/Users/Users";
import About from "pages/About/About";


// Lessons import
// import Lesson006 from './lessons/Lesson006/Lesson006';
// import Lesson007 from "./lessons/Lesson007/Lesson007";
// import Lesson008 from "./lessons/Lesson008/Lesson008";
// import Lesson009 from "./lessons/Lesson009/Lesson009";
// import Lesson010 from "./lessons/Lesson010/Lesson010";
// import Lesson011 from "./lessons/Lesson011/Lesson011";
// import Lesson012 from "./lessons/Lesson012/Lesson012";
// import Lesson013_P from "lessons/Lesson013_P/Lesson013_P";
// import Lesson014 from "lessons/Lesson014/Lesson014";

//Homeworks import
// import Homework006 from "./homeworks/Homework006/Homework006";
// import Homework007 from "./homeworks/Homework007/Homework007";
// import Homework008 from "./homeworks/Homework008/Homework008";
// import Homework009 from "./homeworks/Homework009/Homework009";
// import Homework010 from "./homeworks/Homework010/Homework010";
// import Homework011 from "./homeworks/Homework011/Homework011";
// import Homework012 from "homeworks/Homework012/Homework012";
// import Homework014 from "homeworks/Homework014/Homework014";

// Consultations import
// import Consultation04 from "./consultations/Consultations04/Consultation04";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson006/> */}
      {/* <Homework006 /> */}
      {/* <Lesson007 /> */}
      {/* <Homework007 /> */}
      {/* <Lesson008/> */}
      {/* <Homework008/> */}
      {/* <Lesson009/> */}
      {/* <Homework009/> */}
      {/* <Lesson010/> */}
      {/* <Homework010/> */}
      {/* <Lesson011/> */}
      {/* <Homework011/> */}
      {/* <Consultation04/> */}
      {/* <Lesson012/> */}
      {/* <Homework012/> */}
      {/* <Lesson013_P/> */}
      {/* <Lesson014/> */}
      {/* <Homework014/> */}
      {/* Lesson015 example with pages */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
