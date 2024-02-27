import React from 'react';
import './App.css';
import Image1 from './images/Image1.svg'; // Adjust the path if necessary
import Image2 from './images/Image2.svg'; // Adjust the path if necessary
import Image3 from './images/Image3.svg'; // Adjust the path if necessary


function App() {
  return (
    <div className="App">

      <div className="herobox">
      <section className="hero">
        <h1 className='herotext'>Join the Revolution in Data Labeling</h1>
        <h2 className='herosubtext'>Compete, Earn, and Shape the Future of Open and Fair AI</h2>
        <button className="cta-button">Join Beta</button>
      </section>
      </div>

      <img src={Image1} className="image1"/>
      <div className='contextbox'>
      <section className="how-it-works">
        <h2 className='section-title'>How It Works</h2>
        <div className='section-p'>
        Our platform is designed to reward the best data labelers with higher pay. We use a special system, similar to ELO ratings in games, which measures how good you are at labeling data based on accuracy and performance. When you sign up and start labeling, your score changes based on how well you do, directly affecting how much you earn. This system makes sure that only the best labelers get the top rewards, keeping our data quality really high. 
        <p>Each time you work, your score updates in real-time, so you always know where you stand. Our goal is to make sure we have the best quality data by making sure the people who do the best work are rewarded the most. It’s all about matching your skill and hard work with better pay. The higher your ranking, the higher the pay.</p>
        </div>
      </section>
      </div>

      <img src={Image2} className="image2"/>
      <div className='contextbox'>
      <section className="problem-solution">
        <h2 className='section-title'>Why This Matters</h2>
        <div className='section-p'>
        <p>Open-source AI models are key to future innovations. While many are working on these models, there's a big issue: the data they're trained on, especially how it's labeled or annotated, isn't always visible to everyone. These details are crucial for making AI work well and fairl. Our goal is to promote truly open AI. This means making sure everyone can see and use the data and technologies behind AI, ensuring it's fair and accessible for all creators and users.</p>
        <p> We're focused on preventing a future where only a few have control over AI technologies. By pushing for openness, transparency, and fairness in AI, we're working towards a future where AI benefits everyone equally. This approach encourages shared progress and innovation, making sure AI advancements are available to all, without fear of any single entity dominating the field.</p>
        </div>
      </section>
      </div>

      <img src={Image3} className="image1"/>
      <div className='contextbox'>
      <section className="join-beta">
        <h2 className='section-title'>Join the Beta</h2>
        <div className='section-p'>
        <p>Early users will get the chance to earn more rewards, improve their rankings, and learn the best ways to increase their earnings.</p>
        </div>
        <button className="cta-button">Apply for Beta Access</button>
      </section>
      </div>

      <footer>
        <p>&copy; 2023 Standard Service. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service | Accessibility</p>
      </footer>

    </div>
  );
}

export default App;