import React, { useState } from 'react';
import { Rate, Button, Input, List, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from "./ReviewsAndRatings.module.css"
import { ButtonComp } from '../Commons/ButtonComp/ButtonComp';
import { isAuthenticated } from '../Commons/Auth/Auth';

const { TextArea } = Input;

const ReviewsAndRatings = () => {
    const [reviews, setReviews] = useState([]);
    const [currentReview, setCurrentReview] = useState('');
    const [currentRating, setCurrentRating] = useState(0);

    const handleReviewChange = (e) => {
        setCurrentReview(e.target.value);
    };

    const handleRatingChange = (value) => {
        setCurrentRating(value);
    };

    const handleSubmit = () => {
        if (currentReview && currentRating) {
            const newReview = {
                review: currentReview,
                rating: currentRating,
                userName: isAuthenticated()?.fullName ? isAuthenticated()?.fullName : isAuthenticated()?.email,
                _id: isAuthenticated()?._id,
                userAvatar: <Avatar icon={<UserOutlined />} />,
            };
            setReviews([newReview, ...reviews]);
            setCurrentReview('');
            setCurrentRating(0);
        }
    };

    return (
        <div className={styles.ReviewsAndRatings}>
            <Card className={styles.card}>
                <h2 className="">Leave a Review</h2>
                <Rate onChange={handleRatingChange} value={currentRating} />
                <div className='max-w-[510px]'>
                    <TextArea
                        rows={4}
                        value={currentReview}
                        onChange={handleReviewChange}
                        placeholder="Write your review here"
                        className={styles.input}
                    />
                    <div className='mt-4'>
                        <ButtonComp text="Submit" onClick={handleSubmit} disabled={!currentReview || !currentRating} />
                    </div>
                </div>
            </Card>
            {
                reviews?.length > 0 &&
                <div className="mt-5">
                    <h2 className="mb-4">Reviews</h2>
                    <List
                        itemLayout="horizontal"
                        dataSource={reviews}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={item.userAvatar}
                                    title={item.userName}
                                    description={
                                        <div>
                                            <Rate disabled value={item.rating} />
                                            <p>{item.review}</p>
                                        </div>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </div>
            }
        </div>
    );
};

export default ReviewsAndRatings;