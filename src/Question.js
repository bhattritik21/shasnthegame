import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Questions(params) {
  return (
    <Card className="question text-center">
      <Card.Body>
        <Card.Title>{params.head}</Card.Title>
        <Card.Text>
         {params.question}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Questions;