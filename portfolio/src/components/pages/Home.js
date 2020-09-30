import React from "react";

function Home() {
  return (
    <div>
      <div className="parallax"></div>
      <div class="overlay">
        <h1>
          This is the content that will appear on top of the background image.
        </h1>
        <p>Isn't it neat?</p>
      </div>
      <div class="parallax"></div>
		<div class="overlay">
			<h1>This is the content that will appear on top of the background image.</h1>
			<p>Isn't it neat?</p>
		</div>
		<div class="parallax"></div>
      <h1>Kristians portfolio</h1>
    </div>
  );
}

export default Home;
