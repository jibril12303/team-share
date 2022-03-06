import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';

const submenu = () => {
  const [mngrData, setMngrData] = useState({});
  const [engineerData, setEngineerData] = useState({});
  const [internData, setInternData] = useState({});
  const [finish, setFinish] = useState(false);
  const router = useRouter();

  const managerDetails = () => {
    var mgrName = prompt("Enter name of manager");
    while (mgrName === "") {
      alert("Name cannot be empty");
      mgrName = prompt("Enter name of manager");
    }
    var mgrEId = prompt("Enter Employee ID of manager");
    while (mgrEId === "") {
      alert("Employee ID cannot be empty");
      mgrEId = prompt("Enter Employee ID of manager");
    }
    var mgrEmail = prompt("Enter email address of manager");
    while (mgrEmail === "") {
      alert("Email Address cannot be empty");
      mgrEmail = prompt("Enter email address of manager");
    }
    var mgrOfficeNmbr = prompt("Enter Office Number of manager");
    while (mgrOfficeNmbr === "") {
      alert("Office Number cannot be empty");
      mgrOfficeNmbr = prompt("Enter Office Number of manager");
    }
    setMngrData({mgrName, mgrEId, mgrEmail, mgrOfficeNmbr});
  }
  const engineerDetails = () => {
    var egrName = prompt("Enter name of engineer");
    while (egrName === "") {
      alert("Name cannot be empty");
      egrName = prompt("Enter name of engineer");
    }
    var egrId = prompt("Enter ID of engineer");
    while (egrId === "") {
      alert("ID cannot be empty");
      egrId = prompt("Enter ID of engineer");
    }
    var egrEmail = prompt("Enter email address of engineer");
    while (egrEmail === "") {
      alert("Email Address cannot be empty");
      egrEmail = prompt("Enter email address of engineer");
    }
    var egrGitHub = prompt("Enter Github username of engineer");
    while (egrGitHub === "") {
      alert("Github username cannot be empty");
      egrGitHub = prompt("Enter Github username of engineer");
    }
    setEngineerData({egrName, egrId, egrEmail, egrGitHub});
  }
  const internDetails = () => {
    var internName = prompt("Enter name of intern");
    while (internName === "") {
      alert("Name cannot be empty");
      internName = prompt("Enter name of intern");
    }
    var internId = prompt("Enter ID of intern");
    while (internId === "") {
      alert("ID cannot be empty");
      internId = prompt("Enter ID of intern");
    }
    var internEmail = prompt("Enter email address of intern");
    while (internEmail === "") {
      alert("Email Address cannot be empty");
      internEmail = prompt("Enter email address of intern");
    }
    var internSchool = prompt("Enter school of intern");
    while (internSchool === "") {
      alert("School cannot be empty");
      internSchool = prompt("Enter school of intern");
    }
    setInternData({internName, internId, internEmail, internSchool});
  }
  const finishDetails = () => {
    setFinish(true);
  }
  const gotomain = () => {
    router.push("/");
  }
  return (
      <div>
        { !finish && 
        <div className='container border border-3 w-50 text-center mx-auto my-2 py-2'>
        <div className='row'>
            <div className='col-md-6 col-sm-12 text-center'><h2 className='text-secondary'>Add Team Menu</h2></div>
            <div className='col-md-6 col-sm-12 text-center'><Button onClick={finishDetails} variant="success my-2 px-3" disabled={ Object.keys(mngrData).length == 0 }>Finish Creating Team</Button></div>
            <hr />
        </div>
        <div>
        <Button onClick={managerDetails} variant="primary my-2 px-3">Add Team Manager Details</Button>
        </div>
        <div>
        <Button onClick={engineerDetails} variant="secondary my-2 px-3">Add Engineer Details</Button>
        </div>
        <div>
        <Button onClick={internDetails} variant="warning my-2 px-3">Add Intern Details</Button>
        </div>
        </div>
        }
        { finish &&
          <div className='container w-50 mx-auto my-3'>
            <div className='row'>
            <div className='col-md-6 col-sm-12 text-center'><h2 className='text-secondary'>Team</h2></div>
            <div className='col-md-6 col-sm-12 text-center'><Button onClick={gotomain} variant="success my-2 px-3">Go To Main</Button></div>
            <hr />
            </div>
            <Card className='my-3'>
              <Card.Header as={"h3"} className="text-center">Manager</Card.Header>
              <Card.Body>
                <Card.Title>Name: {mngrData.mgrName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Employee ID: {mngrData.mgrEId}</Card.Subtitle>
                <Card.Text>
                Office Number: {mngrData.mgrOfficeNmbr}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{mngrData.mgrEmail}</Card.Footer>
            </Card>
            { !(Object.keys(engineerData).length == 0) &&
            <Card className='my-3'>
              <Card.Header as={"h3"} className="text-center">Engineer</Card.Header>
              <Card.Body>
                <Card.Title>Name: {engineerData.egrName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ID: {engineerData.egrId}</Card.Subtitle>
                <Card.Text>
                Github Username: {engineerData.egrGitHub}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{engineerData.egrEmail}</Card.Footer>
            </Card>
            }
            { !(Object.keys(internData).length == 0) &&
            <Card className='my-3'>
              <Card.Header as={"h3"} className="text-center">Intern</Card.Header>
              <Card.Body>
                <Card.Title>Name: {internData.internName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">ID: {internData.internId}</Card.Subtitle>
                <Card.Text>
                School: {internData.internSchool}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{internData.internEmail}</Card.Footer>
            </Card>
            }
          </div>
        }
      </div>
  )
}

export default submenu