import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";


function RenderComments({comments}) {
    if (comments != null) {
        return comments.map((cmt) => {
            return (
                <div key={cmt.id}>
                    <ul className="list-unstyled">
                        <li>
                            <p>{cmt.comment}</p>
                            <p className="list-inline-item">-- {cmt.author} , {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(cmt.date)))}</p>
                        </li>
                    </ul>
                </div>)
        })
    } else
        return (
            <div></div>
        );
}

//another one
//good/////////////////

function RenderDish({dish})
{
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const DishDetail = (props) =>
{
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            </div>
        );
    } else
        return (
            <div></div>
        );


}

export default DishDetail;