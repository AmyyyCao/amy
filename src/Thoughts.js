import React from 'react';
import './App.css';

export default function Thoughts() {
    const items = [
        'Trust that solutions will reveal themselves when the time comes',
        'You belong nowhere and everywhere',
        'Embrace radical self-responsibility for personal development',
        'Release past convictions to make room for the desired future self',
        'The best time to get started was yesterday, the second best is now',
        'Prioritize spending time with people you love',
        'What you want might not be what you need',
        'Different paths can lead to the same destination',
        'Take risks, or life may force you to do so',
        'The things we criticize about other people are often reflections of ourselves',
        'There is more to learn when you\'re willing to listen more than you speak',
        'Silence is not the same as being silenced',
        'Stay open to possibilities, perhaps you can\'t predict your entire life trajectory',
        'There will always be another opportunity',
        'You are always changing, even if it does not feel like it',
        'The dots only connect looking backwards',
        'We often regret the things we didn\'t do more than the ones we did do',
        'Do the difficult things first',
        'Appreciate your own company, solitude is peaceful',
        'Perhaps there\'s a lesson that you haven\'t discovered yet.',
        'Forgiveness is for your own well-being',
        'Progress is not linear'
    ];

    return (
        <div className='thoughts-container'>
            <div className='page-header'>
                <h1>22 things I learned at 22</h1>
            </div>

            <div className='item-container'>
                {items.map((item, index) => (
                    <div key={index} className='item'>
                        <h3>{index + 1}.</h3>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}