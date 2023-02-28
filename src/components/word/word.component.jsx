import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { clone } from "lodash";
import axios from 'axios';
import { shuffle } from '../../utils/utils';

import SocialMedia from "../socialmedia/socialmedia.component";

import './word.css';

const Word = () => {
    const navigate = useNavigate();
    const [word, setWord] = useState('');
    const numberOfInputs = word.length;
    const splittedWord = clone(word.split(''));
    const shuffledWord = shuffle(clone(splittedWord));
    let count = 0;
    let correctAnswers = 0;
    let points = localStorage.getItem('points');

    const fetchWord = () => {
        const options = {
            method: 'GET',
            url: 'https://random-words5.p.rapidapi.com/getRandom',
            headers: {
                'X-RapidAPI-Key': 'eda6c52b96msh27ae1c8832f97dep1012a2jsn6a091e1b5264',
                'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setWord(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchWord();
    }, []);

    const wordClick = (word, index) => {
        if (splittedWord[count] == word) {
            ++correctAnswers;
            document.querySelector(`#btnAns-${count}`).classList.add('correct-answer');
        } else {
            --correctAnswers;
            document.querySelector(`#btnAns-${count}`).classList.add('wrong-answer');
        }
        document.querySelector(`#btnAns-${count}`).innerHTML = word;
        document.querySelector(`#btn-${index}`).disabled = true;
        ++count;

        if (count == numberOfInputs) {
            if (correctAnswers == numberOfInputs) {
                points = points ? parseInt(points) : 0;
                points += numberOfInputs;
                localStorage.setItem('points', numberOfInputs);
                setTimeout(() => {
                    alert(`Correct... Congratulations. You have earned ${numberOfInputs} points`);
                }, 100);
            } else {
                alert('wrong answer');
            }
        }
    }

    const setAnswerableLabels = (numberOfInputs) => {
        return (
            <div>
                {(() => {
                    let rows = [];
                    for (let i = 0; i < numberOfInputs; i++) {
                        rows.push(
                            <button id={`btnAns-${i}`} key={i} className="lbl-answers"></button>
                        );
                    }
                    return rows;
                })()}
            </div>
        )
    }

    return(
        <>
            { word.length == 0 && 
                <>
                    <h2>Loading...!!!</h2>
                </>
            }
            { word.length > 0 && 
                <>
                    <h2>Guess the word :: </h2>
                    {setAnswerableLabels(numberOfInputs)}
                    {shuffledWord.map((shuffledWordItem, index) => {
                        return <button key={index} id={`btn-${index}`}
                            onClick={() => wordClick(shuffledWordItem, index)}>
                                { shuffledWordItem }
                            </button>
                    })}
                    <div>
                        <button className="footer" onClick={() => navigate('/')}>Skip</button>
                    </div>
                    <div>
                        <SocialMedia score={points} />
                    </div>
                </>
            }
        </>
    );
}

export default Word;