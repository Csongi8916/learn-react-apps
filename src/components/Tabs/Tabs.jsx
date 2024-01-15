import Section from '../Section/Section.jsx';

export default function Tabs({ children, buttons, ButtonsContainer = Section }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}