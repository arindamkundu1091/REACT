import React from "react";

export default function About() {
    return (
        <>
        <div className="row">
            <div className="medium-6 columns medium-push-6">
            <img
                className="thumbnail"
                src="https://via.placeholder.com/750x350" alt="/"
            />
            </div>
            <div className="medium-6 columns medium-pull-6">
            <h2>Our Agency, our selves.</h2>
            <p>
                Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In
                condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
                Nulla fringilla, orci ac euismod semper, magna diam porttitor
                mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis
                mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec
                viverra auctor.
            </p>
            </div>
        </div>
        </>
    );
}
