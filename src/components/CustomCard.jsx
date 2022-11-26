import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAppContext } from '../context/AppContext';

function CustomCard({ product, buttonText }) {
    const { image, name, description, price, stock } = product;
    const { addToCart } = useAppContext();
    return (
        <Card style={{ width: '18rem', margin: '10px 20px' }}>
            <Card.Img variant="top" src={image} style={{ maxHeight: '246px', objectFit: 'contain' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="dist-card-footer">
                    <span className="price">{`${price} BRL`}</span>

                    <Button
                        variant={stock > 0 ? 'primary' : 'danger'}
                        disabled={stock < 1}
                        onClick={() => addToCart(product)}
                    >
                        {buttonText}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;
