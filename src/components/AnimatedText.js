import React, { useState, useEffect } from "react";

export const SimpleAnimatedTextDisplay = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust the interval for your desired typing speed

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div
      className="animated-text"
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
};

function TypingAnimation({ content, onAnimationEnd }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 250); // Adjust the delay for your desired typing speed

      return () => clearTimeout(timer);
    } else {
      onAnimationEnd();
    }
  }, [currentIndex, content.length, onAnimationEnd]);

  return <>{content.slice(0, currentIndex)}</>;
}

export const AnimatedTextDisplay = ({ content }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedContent, setDisplayedContent] = useState([]);

  useEffect(() => {
    const structuredContent = [];

    if (
      content.props &&
      content.props.children &&
      content.props.children.length > 0
    ) {
      content.props.children.forEach((child) => {
        if (typeof child === "string") {
          // Split string into array of characters
          structuredContent.push(...child.split(""));
        } else {
          structuredContent.push(child);
        }
      });

      setDisplayedContent(structuredContent);
      setIsAnimating(true);
    }
  }, [content]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="animated-text">
      {isAnimating ? (
        <TypingAnimation
          content={displayedContent}
          onAnimationEnd={handleAnimationEnd}
        />
      ) : (
        content
      )}
    </div>
  );
};
