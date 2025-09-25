import React from "react";

function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "hmj4196@naver.com",
      description: "언제든지 메일로 연락주세요",
      link: "mailto:hmj4196@naver.com",
      color: "#646cff",
      available: "24시간 답변"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "010-2688-4196",
      description: "전화 상담 가능 시간",
      link: "tel:01026884196",
      color: "#646cff",
      available: "평일 9:00 - 18:00"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/MinJiH01",
      description: "프로젝트 코드 및 활동 확인",
      link: "https://github.com/MinJiH01",
      color: "#646cff",
      available: "실시간 업데이트"
    }
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1 className="contact-title">연락처</h1>
        <p className="contact-subtitle">
          프로젝트 협업이나 채용 제안, 궁금한 점이 있으시면 언제든지 연락주세요!
        </p>
      </div>

      {/* Main Contact Cards */}
      <div className="contact-main">
        <div className="contact-cards-clean">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.title === "GitHub" ? "_blank" : undefined}
              rel={contact.title === "GitHub" ? "noreferrer" : undefined}
              className="contact-card-clean"
              style={{ '--accent-color': contact.color }}
            >
              <div className="contact-icon-clean">
                {contact.icon}
              </div>
              <div className="contact-info">
                <h3>{contact.title}</h3>
                <p className="contact-value-clean">{contact.value}</p>
                <p className="contact-desc">{contact.description}</p>
                <span className="contact-status">{contact.available}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="contact-additional">
        <div className="additional-cards">
          <div className="info-card-clean">
            <div className="info-icon">📍</div>
            <div>
              <h4>현재 위치</h4>
              <p>창원, 경상남도</p>
              <small>수도권 근무 가능 (이주 예정)</small>
            </div>
          </div>
                     
          <div className="info-card-clean">
            <div className="info-icon">⚡</div>
            <div>
              <h4>응답 시간</h4>
              <p>24시간 내 답변</p>
              <small>빠른 회신 약속</small>
            </div>
          </div>
                     
          <div className="info-card-clean">
            <div className="info-icon">💼</div>
            <div>
              <h4>근무 가능</h4>
              <p>정규직/계약직</p>
              <small>새로운 기회를 기다리고 있습니다</small>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="contact-cta">
        <h3>함께 일할 기회를 기다리고 있습니다!</h3>
        <div className="cta-buttons">
          <a href="mailto:hmj4196@naver.com" className="cta-btn primary">
            이메일 보내기
          </a>
          <a href="https://github.com/MinJiH01" target="_blank" rel="noreferrer" className="cta-btn secondary">
            GitHub 보기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;