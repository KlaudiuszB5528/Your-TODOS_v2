export const Footer: React.FC = () => {
  return (
    <div className="footer">
      {`Copyright © ${new Date().getFullYear()} Klaudiusz Biegacz`}
      <a href="https://github.com/KlaudiuszB5528" target="_blank">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};
