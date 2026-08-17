import SiteHeader from "../components/SiteHeader";

const projects = [
  { number: "02", title: "Bayou Boys", type: "Social campaign / art direction", placeholder: "Campaign artwork" },
  { number: "03", title: "Old Lighthouse Co.", type: "Web design / brand experience", placeholder: "Website mockup" },
  { number: "04", title: "Music Merchandise", type: "Apparel / production design", placeholder: "Merchandise photography" },
  { number: "05", title: "Alamar", type: "Email campaigns / digital design", placeholder: "Email campaign" },
];

export default function WorkPage() {
  return (
    <main className="inner-page work-page">
      <SiteHeader />
      <section className="page-intro">
        <span>Selected work / 2021—2026</span>
        <h1>WORK</h1>
      </section>
      <section className="featured">
        <div className="project-heading">
          <span className="project-index">01</span>
          <h2>Keystone<br />Command Center</h2>
          <p>An internal operations and music-intelligence platform designed, coded, and deployed for a six-person marketing team.</p>
        </div>
        <div className="command-shell">
          <div className="command-topbar">
            <div className="command-logo">K / CC</div>
            <div className="command-tabs"><span className="active">Tasks</span><span>Accounts</span><span>Chartex</span><span>Coverarts</span><span>Notes</span></div>
            <div className="avatar">BG</div>
          </div>
          <div className="command-stats">
            <div><strong>12</strong><span>Active tasks</span></div>
            <div><strong>0</strong><span>Overdue</span></div>
            <div><strong>6</strong><span>Team members</span></div>
          </div>
          <div className="command-grid">
            <div className="task-board">
              <div className="panel-title"><span>Campaign workflow</span><span>Live</span></div>
              {["Creative review", "Album rollout", "Creator outreach", "Performance report"].map((task, i) => (
                <div className="task-row" key={task}><span className={`status-dot dot-${i + 1}`} /><span>{task}</span><span className="pill">{["Review", "Working", "Queued", "Done"][i]}</span></div>
              ))}
            </div>
            <div className="metric-panel">
              <div className="panel-title"><span>Performance / 14 days</span><span>+22%</span></div>
              <strong className="big-number">9.1M</strong><span className="metric-label">demo views tracked</span>
              <div className="bars" aria-hidden="true">{[28,42,34,67,58,72,46,88,61,75,52,68].map((h,i) => <i style={{height:`${h}%`}} key={i} />)}</div>
            </div>
          </div>
        </div>
        <div className="case-study-copy">
          <div><span className="copy-label">The problem</span><p>Assignments, clarifications, links, and campaign data were fragmented across Slack, iMessage, and multiple platforms. Routine questions repeatedly had to go through the director.</p></div>
          <div><span className="copy-label">The response</span><p>I independently designed and coded a central command center for task ownership, creative review, team communication, account health, and cross-platform music analytics.</p></div>
          <div><span className="copy-label">The result</span><p>Six team members adopted one shared source of truth, eliminating the routine need to message the director for assignments or task clarification.</p></div>
        </div>
      </section>
      <section className="project-grid" aria-label="More selected projects">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image" role="img" aria-label={`${project.title} image placeholder`}><span>Image placeholder</span><small>{project.placeholder}</small></div>
            <div className="project-meta"><span>{project.number}</span><h3>{project.title}</h3><p>{project.type}</p></div>
          </article>
        ))}
      </section>
    </main>
  );
}
