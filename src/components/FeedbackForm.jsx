import React, { useContext, useState, useEffect } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const { addFeedback, feedbackEdit, updateFeedback } =
        useContext(FeedbackContext);

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
            setBtnDisabled(false);
            setMessage(feedbackEdit.item.message);
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedBack = {
                text: text,
                rating: rating,
            };

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedBack);
            } else {
                addFeedback(newFeedBack);
            }
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate service with us?</h2>
                <RatingSelect
                    select={(rating) => {
                        setRating(rating);
                    }}
                />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
