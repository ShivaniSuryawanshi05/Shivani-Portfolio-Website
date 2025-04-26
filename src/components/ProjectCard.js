export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const CardContent = (
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    );
  
    return link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {CardContent}
      </a>
    ) : (
      CardContent
    );
  };
  