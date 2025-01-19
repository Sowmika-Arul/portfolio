import React from 'react';
import './AboutMe.css'; // Import the CSS file

function AboutMe() {
  return (
    <div className="mockup-code about-me-container">
      <pre data-prefix="$"><code>MERN Stack Developer | Cloud Enthusiast</code></pre>
      <pre data-prefix=">"><code>A Computer Science student driven by a passion for continuous learning and applying</code></pre>
      <pre data-prefix=">"><code>new technologies to real-world problems.</code></pre>
      <pre data-prefix=">" className="text-warning"><code>My areas of interest include Web Development and Figma Designing.</code></pre>
      <pre data-prefix=">" className="text-warning"><code>I also have a foundational understanding of Cyber Security and am eager to</code></pre>
      <pre data-prefix=">" className="text-warning"><code>delve into Machine Learning.</code></pre>
      <pre data-prefix=">" className="text-success"><code>Proficient in C, Java, and c++, I am enthusiastic about collaborating</code></pre>
      <pre data-prefix=">" className="text-success" ><code>on innovative projects that drive the future of technology.</code></pre>
      <pre data-prefix=">" className="text-success" ><code>Let’s connect and explore how we can work together to create impactful solutions.</code></pre>
    </div>
  );
}

export default AboutMe;
