import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { initialData } from './recommendationDummyData';
import RecommendationCard from './RecommendationCard';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) => ({
}));

export default function Recommendation() {

    const [recommendedBooks, setRecommendedBooks] = useState(initialData.books);

    const recommendedBooksCards = recommendedBooks.map(bookDetails => {
        return (
            <RecommendationCard bookDetails={bookDetails} key={bookDetails.isbn} />
        )
    });

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                infiniteLoop
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={(windowDimensions.width > 900) ? 3 : ((windowDimensions.width > 600) ? 2 : 1)}
                gutter={10}
                leftChevron={<IconButton aria-label="left" color="primary">
                    <ChevronLeftIcon />
                </IconButton>}
                rightChevron={<IconButton aria-label="right" color="primary">
                    <ChevronRightIcon />
                </IconButton>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {recommendedBooksCards}
            </ItemsCarousel>
        </div>
    );
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}