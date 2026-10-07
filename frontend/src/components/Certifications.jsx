import React from 'react';

const certsList = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    driveUrl: "https://drive.google.com/file/d/1OrBEzvS1V2eN7bGjLmj42b_BIr_m84Up/view?usp=sharing"
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    driveUrl: "https://drive.google.com/file/d/18Do5oMIj2iJDTV2PiwDI0xp0k09wr3jJ/view?usp=sharing"
  },
  {
    id: 3,
    title: "MERN Full Stack Development",
    issuer: "Full-Stack Development Certification",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    driveUrl: "https://drive.google.com/file/d/1FDPdAVA4gGLVH5eH-jX9i8vrQhVZSfnH/view?usp=sharing"
  },
  {
    id: 4,
    title: "Quantum Fundamentals",
    issuer: "VIT-AP University / Academic Research",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    driveUrl: "https://drive.google.com/file/d/1kxem4CEJUiNAdU70I0RriAMZuXlGvpa9/view?usp=sharing"
  },
  {
    id: 5,
    title: "NGC Club Member Certificate",
    issuer: "Next Generation Coding (NGC) Club",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    driveUrl: "https://drive.google.com/file/d/1OZjqvwTb2JGAaG9DV-IXfgTmjxG3mbuq/view?usp=sharing"
  },
  {
    id: 6,
    title: "Hedera Certified Developer Associate HCDA",
    issuer: "Academic Workshop & Technical Writing",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    driveUrl: "https://drive.google.com/file/d/1gmIGQNn2LKHTbiYqNWrBLUCDq9Unnijc/view?usp=sharing"
  }
];

const Certifications = () => {
  return (
    <main class="main-content">
      <div class="page-header">
        <h1>Professional Certifications</h1>
        <p>Click on any 16:9 thumbnail below to open the official certificate document on Google Drive.</p>
        <div class="divider"></div>
      </div>

      <div class="cert-grid">
        {certsList.map(cert => (
          <a
            key={cert.id}
            href={cert.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="cert-card"
          >
            <img class="cert-bg-img" src={cert.imageUrl} alt={cert.title} />
            <div class="cert-content">
              <div class="cert-issuer">
                <i class="fa-solid fa-award"></i> {cert.issuer}
              </div>
              <div class="cert-title">{cert.title}</div>
              <div class="cert-footer">
                <span class="drive-badge">
                  <i class="fa-brands fa-google-drive"></i> Open PDF
                </span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Certifications;
