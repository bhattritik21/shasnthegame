import { useEffect, useState } from "react";
import "./App.css";
import Questions from "./Question";
import Answer from "./Answer";
import axios from "axios";
import LinktoSite from "./Link";
import Bade from "./Bade";

function App() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [showYes, setshowYes] = useState('');
  const question = data?.question || "";
  const answer1 = data?.yes_answer || "";
  const answer2 = data?.no_answer || "";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const id = urlParams.get("question_id");
    console.log(id);

    const fetchData =  async ()=>{
      const url = 'https://hook.eu2.make.com/5d5d64p5cabuhgn7gj1the2crul7jnlt';
  
      const requestBody = {
        question_id: id
      };
  
      const response = await axios.post(url, requestBody, {
        headers: {
          Authorization: `Bearer ${process.env['Authentication_Token']}`
        }
      });
      console.log(response.data);
      setData(response.data);
    }
    fetchData();

  }, []);

  return (
    <div className="App">
      <div className="Card">
        {!show? <Questions question={question} head={'Question'}/> : <Bade question={showYes}  head={'Response'}/>}
        {!show?( <><Answer setShow={setShow} setshowYes={setshowYes} action={"Yes"} data={data} answer={answer1} />
        <Answer setShow={setShow} setshowYes={setshowYes} action={"No"} data={data} answer={answer2} /> </>): <LinktoSite/>}
      </div>
    </div>
  );
}

export default App;
