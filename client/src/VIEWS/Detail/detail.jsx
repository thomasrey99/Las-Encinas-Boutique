import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';
import { Spin, Space, Alert, Card, Col, Row, Rate, Button } from 'antd';
const { Meta } = Card;

const Detail = () => {

    const { id } = useParams();
    const { data: productDetail, isError, isLoading } = useGetProductByIdQuery();
    console.log(productDetail);

    const product = {
        id: id,
        name: 'Chocolate blanco',
        price: '2,50',
        image: 'https://www.eltiempo.com/uploads/2023/03/13/640fb61bb084a.jpeg',
        description: 'El mejor chocolate de Argentina',
        rating: 4,
        category: 'hocolate Artesanal'
    }

    return(
        <Space>
            {/* { isLoading&&       
                <Spin tip="Cargando" size="large">
                    <div className="content" />
                </Spin> 
            }
            { isError&&     
                <Alert
                message="Error"
                description="Por favor, intente de nuevo más tarde."
                type="error"
                showIcon
                />
            } */}
            <Row>
                <Col span={12}>
                    <img alt={product.name} src={product.image} style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col span={12}>
                    <h1>{product.name}</h1> <br /> <br />
                    <h2>${product.price}</h2> <br />
                    <Rate defaultValue={product.rating}/> <br /> <br />
                    <p>{product.category}</p> <br />
                    <p>{product.property3}</p>
                    <Button type="primary" block>Comprar</Button>
                </Col>
                <Col span={24}>
                    <Card >
                        {product.description}
                        
                        <Meta 
                            description={
                            <>
                                <p>id: {product.id}</p>
                            </>} 
                        />
                    </Card>
                </Col>
            </Row>
        </Space>
    );
};

export default Detail;