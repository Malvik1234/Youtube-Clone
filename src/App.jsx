import React from "react";
import Navbar from "./Component/Navbar/Navbar"
import Content from './Component/Body/Content/Content.jsx'

const App = () => {
  return (
    <div>
      <main>
        {/* this is a main nav bar  */}

        <Navbar />

        {/*  this is middle part  */}

        <section>
          < Content />
        </section>

        {/*  this is the last part */}

        <footer></footer>
      </main>
    </div>
  );
};

export default App;
