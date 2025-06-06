// components/TypingIntro.tsx
import { Typewriter } from 'react-simple-typewriter';

export default function TypingIntro() {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
      <Typewriter
        words={[
          "Hi, I'm a Frontend Developer crafting modern, responsive, and user-friendly web experiences."
        ]}
        loop={1}
        cursor  
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={0}
        delaySpeed={2000}
      />
    </h1>
  );
}
