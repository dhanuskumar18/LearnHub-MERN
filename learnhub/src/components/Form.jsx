import { React, useEffect, useState } from "react";
import Label from "./Label";
import Header from "./Header";
import Footer from "./footer";
import axios from "axios";
import "../../src/assets/css/form.css";
import Card from "./Card";
import { data } from "react-router";

function Form() {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [email, setemail] = useState("");
  const [ph, setph] = useState();
  const [course, setcourse] = useState("");
  const [status, setstatus] = useState("Unplaced");
  const [sub, setsub] = useState(false);
  // console.log("status", status);
  // console.log(sub);

  let data = {
    name: name,
    role: role,
    ph: ph,
    course: course,
    email: email,
    status: status,
  };
  console.log(data);
  useEffect(() => {
    // console.log("hello");
    axios.get("http://localhost:8000/").then((res) => {
      setusers(res.data);
      console.log(res.data);
    });
  }, [ ]);
  useEffect(  function()  {
    // console.log("hello");
    setname("");
  setemail("");
  setrole("");
  setph();
  setcourse("");
  setstatus("Unplaced");
  }, [sub]);
  function select1(e) {
    setcourse(e.target.value);
  }
   async function submit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/create", { data })
      .then((res) => setusers(res.data))
      .catch((err) => console.log(err));
      setsub((prev) => !prev);
    e.target.reset();
    
  }
  async function remove(id) {
    console.log("triggerd");

    await axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((res) =>setusers(res.data));
  }

  return (
    <>
      <Header />
      <div>
        <h1 className="h--">Fill this form</h1>
        <form onSubmit={submit}>
          <div className="flx--">
            <div>
              <Label label="Name" />
              <input className="i-p"
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div>
              <Label label="Role" />
              <input className="i-p"
                type="text"
                placeholder="Enter your role"
                name="role"
                onChange={(e) => {
                  setrole(e.target.value);
                }}
              />
            </div>
            <div>
              <Label label="Email" />
              <input className="i-p"
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div>
              <Label label="Phone number" />
              <input className="i-p"
                type="number"
                placeholder="Enter your ph number"
                name="ph"
                onChange={(e) => {
                  setph(e.target.value);
                }}
              />
            </div>
            <div>
              <Label label="Course:" />
              <select name="course" value={course} id="" onChange={select1} className="-s">
                <option value="">select a course</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="React Basics">React Basics</option>
                <option value="JavaScript Fundamentals">
                  JavaScript Fundamentals
                </option>
                <option value="Advanced CSS">Advanced CSS</option>
                <option value="Backend Development">
                  {" "}
                  Backend Development
                </option>
              </select>
            </div>
            <div>
              <Label label="Status" />
              <select
                name=""
                id=""
                className="-s"
                value={status}
                onChange={(e) => {
                  setstatus(e.target.value);
                }}
              >
                <option value="unplaced">Unplaced</option>
                <option value="placed">Placed</option>
              </select>
            </div>
          </div>
          <div className="flxs---">
            <input type="submit" className="i-p" />
          </div>
        </form>
      </div>
      <div className="flxcard12">
        <Card data={users} func={remove} />
      </div>
      <Footer />
    </>
  );
}

export default Form;
