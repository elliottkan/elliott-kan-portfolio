import * as React from 'react';

interface Props {}

interface State {
  dataText: string[];
  currentText: string;
  currentTextIndex: number;
  currentCharacterIndex: number;
}

class TypingText extends React.Component<Props, State> {
  interval: NodeJS.Timeout | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      dataText: [
        'Welcome to my portfolio, if you have a bit of time sit back and let me tell you a bit about myself or scroll down for more information.',
        'I have a strong belief in the power of creativity and using code to bring those ideas to life.',
        'I\'ve always had a fascination with technology, so I made the switch from building design to software development.',
        'I love spending my free time exploring the great outdoors, whether it\'s through rock climbing, hiking or running.',
        'I\'m constantly reading and learning new things, and I especially enjoy self-improvement books that help me grow as a person.',
        'As a software developer, I\'m always looking for ways to innovate and create new solutions for problems.',
        'I\'m a big believer in the power of positive thinking and trying to see the best in every situation.',
        'I\'ve always been drawn to the world of code and the endless possibilities it offers for creation and problem-solving.',
        'I\'m a huge fan of the outdoors, and I love finding new ways to connect with nature and push my limits.',
        'I believe in constantly learning and growing, and I try to incorporate that mindset into everything I do, whether it\'s in my work or personal life.',
        `That\'s enough about me, get in touch with me at so I can get to know more about you!`,
      ],
      currentText: '',
      currentTextIndex: 0,
      currentCharacterIndex: 0,
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startAnimation = () => {
    this.interval = setInterval(() => {
      const { dataText, currentText, currentTextIndex, currentCharacterIndex } = this.state;

      // If all texts have been animated, start again from the first text
      if (currentTextIndex >= dataText.length) {
        this.setState({ currentTextIndex: 0, currentCharacterIndex: 0, currentText: '' });
        return;
      }

      // If the current text has been fully animated, stop the interval and set a timeout to start the next text
      if (currentCharacterIndex >= dataText[currentTextIndex].length) {
        clearInterval(this.interval);
        setTimeout(() => {
          this.setState({ currentTextIndex: currentTextIndex + 1, currentCharacterIndex: 0, currentText: '' });
          this.startAnimation();
        }, 2000);
        return;
      }

      // Add the next character to the current text
      this.setState({
        currentText: dataText[currentTextIndex].substring(0, currentCharacterIndex + 1),
        currentCharacterIndex: currentCharacterIndex + 1,
      });
    }, 50);
  };

  render() {
    return (
      <p>
        {this.state.currentText}
        <span aria-hidden={true} />
      </p>
    );
  }
}

export default TypingText;
