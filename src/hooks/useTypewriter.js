import { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'AI Software Developer',
  'Frontend Engineer',
  'React Developer',
  'Problem Solver'
];

export function useTypewriter() {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    function type() {
      const current = roles[roleIdx];
      if (!deleting) {
        setText(current.slice(0, ++charIdx));
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        setText(current.slice(0, --charIdx));
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      timer = setTimeout(type, deleting ? 60 : 90);
    }

    timer = setTimeout(type, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}
