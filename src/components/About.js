import React from 'react';

export default function About(props) {
    const mystyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(19,21,47)'
    };

    return (
        <div>
            <div className='container my-3'>
                <h2>{props.aboutus}</h2>
            </div>

            <div className="container my-3 accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <strong>Our Mission</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={mystyle}>
                            At TextUtils, our mission is to provide you with powerful and intuitive tools to manipulate and analyze text efficiently. Whether you're a student, a professional writer, or someone who just loves playing with words, TextUtils aims to be your go-to platform for all your text processing needs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>What We Offer</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={mystyle}>
                            <div style={{ whiteSpace: 'pre-wrap' }}>
                                We offer a variety of features including:

                                - Text conversion to upper and lower case
                                - Word and character count
                                - Text preview options
                                - The ability to speak the text you enter
                                - Removal of extra spaces
                                - Changing your text style
                                - Time taken to enter a word

                                Our user-friendly interface ensures that you can easily perform these actions without any hassle. We are constantly updating our platform to include more functionalities based on user feedback and the latest advancements in text processing technologies.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <strong>Why Choose TextUtils?</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils stands out for its simplicity and effectiveness. We understand the importance of having a reliable tool that can quickly and accurately handle your text manipulation needs. With our commitment to user satisfaction, we ensure that you get the best experience every time you use our platform. Whether you're drafting a professional document or just experimenting with text, TextUtils is here to make your tasks easier and more enjoyable.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
