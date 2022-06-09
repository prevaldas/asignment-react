import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    // constructor(props) {
    //     super(props);
    // }

    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map((cmt) => {
                return (<div key={cmt.id}>
                    <ul className="list-unstyled">
                        <p>{cmt.comment}</p>
                        <p className="list-inline-item">-- {cmt.author} ,
                         {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'})
                         .format(new Date(Date.parse(comment.date)))}</p>
                    </ul>
                </div>)
            })

            return comment;
        } else
            return (
                <div></div>
            );
    }

    render() {
        const detail = this.props.dishDetail;

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={detail.image} alt={detail.name}/>
                        <CardBody>
                            <CardTitle>{detail.name}</CardTitle>
                            <CardText>{detail.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(detail.comments)}
                </div>
            </div>
        );
    }

}

export default Dishdetail;