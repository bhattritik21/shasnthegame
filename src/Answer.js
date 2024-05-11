import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

const Answer = (params) => {
  let text ="";
  if(params.action ==="Yes"){
    text = params.data?.yes_response;
  }
  else{
    text=params.data?.no_response;
  }

  return (
    <Card className="answer text-center">
      <Card.Body>
        <Card.Text>
          {params.answer}
        </Card.Text>
        <Button onClick={() => {params.setShow(true);params.setshowYes(text)}} variant="warning">{params.action}</Button>
      </Card.Body>
    </Card>
  )
}

export default Answer