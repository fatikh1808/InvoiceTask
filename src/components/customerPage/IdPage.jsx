import React from "react";
import {useParams} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from '../utils/UseStyles';

const IdPage = (props) => {

    const classes = useStyles();

    let {customerId} = useParams();
    const {data} = props;
    return (
        <div>
            {data.filter(item => item.id === parseInt(customerId)).map((item) => (
                <Card className={classes.rootId} key={item.id}>
                    <CardContent>
                        <Typography className={classes.titleId} color="textSecondary" gutterBottom>
                            имя: {item.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            средний чек: {item.averCheck}
                        </Typography>
                        <Typography className={classes.posId} color="textSecondary">
                            количество покупок: {item.numbPurchase}
                        </Typography>
                        <Typography variant="body2" component="p">
                            общая выручка: {item.totalRev}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default IdPage;
