import React from "react";
import AnimatedCursor from "react-animated-cursor"

function Cursor() {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={25}
      outerSize={15}
      color='255,255,255'
      outerAlpha={0.3}
      innerScale={0}
      outerScale={6}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'h1',
        'p',
        'h4'
        
      ]}
    />
    </div>
  );
}

export default Cursor
