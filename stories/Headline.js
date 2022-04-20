import './headline.css';
import '../assets/style.css';

export const createHeadline = ({
  label,
  type,
  bold
}) => {
  const hl = document.createElement('headline');
  hl.type = 'headline';
  hl.innerText = label;

  const mode = bold ? 'bold' : null
  hl.className = ['storybook-hl', `storybook-hl--${type}`, `${mode}`].join(' ');

  
  return hl;
};
