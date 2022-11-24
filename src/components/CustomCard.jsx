import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({ image, name, description, price, buttonText }) {
    return (
        <Card style={{ width: '18rem', height: '24rem', margin: '10px 20px' }}>
            <Card.Img variant="top" src={image} style={{ maxHeight: '246px', objectFit: 'contain' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">{buttonText}</Button>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;
