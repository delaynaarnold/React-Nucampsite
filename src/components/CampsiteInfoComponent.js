import React from "react/cjs/react.production.min";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



   function RenderCampsite({campsite}) {
        if (campsite) {
            return (
                <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        return <div />;
    }

    function RenderComments({comments}) {
        if (comments) {
            return (<div className="col-md-5 m-1">
                <h4> Comments</h4>
                {comments.map(
                        comments => <div key={comments.text}>
                            {comments.author}
                            {comments.date} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))
                            }
                        </div>
                    )
                }
            </div>)

        } else {
            return (<div> </div>)
        }
    }
    
    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.campsite.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    
    export default CampsiteInfo;