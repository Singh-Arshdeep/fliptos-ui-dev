import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { initialData } from './recommendationDummyData'; 
import RecommendationCard from './RecommendationCard';

const useStyles = makeStyles((theme) => ({
    recommendationCardContainer: {
        display: 'flex',
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function Recommendation() {
    const classes = useStyles();

    const [recommendedBooks, setRecommendedBooks] = useState(initialData.books);
    
    const recommendedBooksCards = recommendedBooks.map(bookDetails => {
        return (
            <RecommendationCard bookDetails={bookDetails} key={bookDetails.isbn}/>
        )
    });

    return (  
        <div className={classes.recommendationCardContainer}>
            {recommendedBooksCards}
        </div>
    );
}
 