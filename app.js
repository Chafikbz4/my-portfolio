const { useState, useEffect, useMemo, useRef } = React;

/* ==========================================================================
   ICONS — small hand-written stroke icons, no external icon library.
   ========================================================================== */
const Icon = ({ name, size = 16, className = "" }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };
  switch (name) {
    case "folder":
      return (
        <svg {...common}>
          <path d="M3 7a1 1 0 0 1 1-1h4.5l1.5 2H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />
        </svg>
      );
    case "folder-open":
      return (
        <svg {...common}>
          <path d="M3 7a1 1 0 0 1 1-1h4.5l1.5 2H20a1 1 0 0 1 1 1v.5H6l-2.2 8.3A1 1 0 0 1 2.8 18H3V7z" />
          <path d="M3.5 18h16.6a1 1 0 0 0 .97-.76L22.5 11H8.2a1 1 0 0 0-.97.75L5.4 18" />
        </svg>
      );
    case "file":
      return (
        <svg {...common}>
          <path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path d="M14 3v5h5" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m13 5-2 14" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="12" rx="1.5" />
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
          <path d="M3 12h18" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 4.5 5.8v5.6c0 5 3.3 8.2 7.5 9.6 4.2-1.4 7.5-4.6 7.5-9.6V5.8L12 3z" />
          <path d="m9 12 2 2 4-4.5" />
        </svg>
      );
    case "award":
      return (
        <svg {...common}>
          <circle cx="12" cy="8.5" r="5" />
          <path d="M8.3 12.9 7 21l5-2.5L17 21l-1.3-8.1" />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M14 4h6v6" />
          <path d="M20 4 10 14" />
          <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
        </svg>
      );
    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02zM3.3 8.75h3.7V21H3.3V8.75zm6.2 0h3.55v1.68h.05c.5-.9 1.7-1.86 3.5-1.86 3.74 0 4.43 2.36 4.43 5.43V21h-3.7v-5.4c0-1.29-.02-2.94-1.8-2.94-1.8 0-2.08 1.4-2.08 2.85V21H9.5V8.75z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="m4 6.5 8 6 8-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M7 3h3l1.5 4L9.5 8.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 5 7.2 2 2 0 0 1 7 3z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg {...common}>
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    default:
      return null;
  }
};

/* ==========================================================================
   FOLDER METADATA + NAVIGATION HELPERS
   ========================================================================== */
const FOLDER_META = {
  home: { label: "~", icon: "home" },
  "software-engineering": { label: "software-engineering", icon: "code", parent: "home" },
  "professional-projects": { label: "professional-projects", icon: "folder", parent: "software-engineering" },
  "academic-projects": { label: "academic-projects", icon: "folder", parent: "software-engineering" },
  internships: { label: "internships", icon: "briefcase", parent: "home" },
  cybersecurity: { label: "cybersecurity", icon: "shield", parent: "home" },
  certifications: { label: "certifications", icon: "award", parent: "home" },
};

function getBreadcrumb(folderId) {
  const chain = [];
  let cur = folderId;
  while (cur) {
    chain.unshift(cur);
    cur = FOLDER_META[cur] && FOLDER_META[cur].parent;
  }
  return chain;
}

function getFolderContents(folderId) {
  switch (folderId) {
    case "home":
      return { folders: ["software-engineering", "internships", "cybersecurity", "certifications"], files: [] };
    case "software-engineering":
      return { folders: ["professional-projects", "academic-projects"], files: [] };
    case "professional-projects":
      return { folders: [], files: PROJECTS["professional-projects"].map((f) => ({ ...f, kind: "project", folder: "professional-projects" })) };
    case "academic-projects":
      return { folders: [], files: PROJECTS["academic-projects"].map((f) => ({ ...f, kind: "project", folder: "academic-projects" })) };
    case "internships":
      return { folders: [], files: INTERNSHIPS.map((f) => ({ ...f, kind: "internship", folder: "internships" })) };
    case "cybersecurity":
      return { folders: [], files: SECURITY.map((f) => ({ ...f, kind: "security", folder: "cybersecurity" })) };
    case "certifications":
      return { folders: [], files: CERTIFICATIONS.map((f) => ({ ...f, kind: "certification", folder: "certifications" })) };
    default:
      return { folders: [], files: [] };
  }
}

function allFiles() {
  return [
    ...getFolderContents("professional-projects").files,
    ...getFolderContents("academic-projects").files,
    ...getFolderContents("internships").files,
    ...getFolderContents("cybersecurity").files,
    ...getFolderContents("certifications").files,
  ];
}

const STATUS_META = {
  shipped: { label: "shipped", color: "var(--green)" },
  academic: { label: "academic", color: "var(--blue)" },
  private: { label: "private repo", color: "var(--amber)" },
};

/* ==========================================================================
   BOOT / HERO — a single orchestrated typewriter moment on the home screen
   ========================================================================== */
function BootHero() {
  const skillLines = PROFILE.skills.map((g) => `${g.group}: ${g.items.join(", ")}`);
  const lines = useMemo(
    () => [
      { cmd: `whoami` },
      { out: PROFILE.name },
      { cmd: `cat title.txt` },
      { out: PROFILE.title },
      { cmd: `cat summary.txt` },
      { out: PROFILE.summary, wrap: true },
      { cmd: `ls -la ~/skills` },
      ...skillLines.map((l) => ({ out: l, skill: true })),
    ],
    []
  );
  const prefersReduced = useMemo(
    () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const [shown, setShown] = useState(prefersReduced ? lines.length : 0);

  useEffect(() => {
    if (prefersReduced) return;
    if (shown >= lines.length) return;
    const isFirst = shown === 0;
    const wasCmd = shown > 0 && lines[shown - 1].cmd;
    const delay = isFirst ? 250 : wasCmd ? 160 : 90;
    const t = setTimeout(() => setShown((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [shown, prefersReduced, lines.length]);

  return (
    <div
      className="mono"
      style={{
        background: "var(--bg-raised)",
        border: "1px solid var(--border-soft)",
        borderRadius: 8,
        padding: "22px 24px",
        marginBottom: 22,
        fontSize: 13.5,
        lineHeight: 1.85,
      }}
    >
      {lines.slice(0, shown).map((line, i) => {
        if (line.cmd) {
          return (
            <div key={i}>
              <span style={{ color: "var(--green)" }}>chafik@portfolio</span>
              <span style={{ color: "var(--text-faint)" }}>:</span>
              <span style={{ color: "var(--blue)" }}>~</span>
              <span style={{ color: "var(--text-faint)" }}>$ </span>
              <span style={{ color: "var(--text)" }}>{line.cmd}</span>
            </div>
          );
        }
        if (line.skill) {
          const [group, items] = line.out.split(/:\s(.+)/s);
          return (
            <div key={i} style={{ color: "var(--text-dim)", paddingLeft: 2 }}>
              <span style={{ color: "var(--amber)" }}>{group}:</span> {items}
            </div>
          );
        }
        return (
          <div
            key={i}
            style={{
              color: "var(--text-dim)",
              paddingLeft: 2,
              maxWidth: line.wrap ? 720 : "none",
            }}
          >
            {line.out}
          </div>
        );
      })}
      {shown < lines.length ? <span className="caret" /> : null}
    </div>
  );
}

/* ==========================================================================
   SIDEBAR
   ========================================================================== */
function TreeRow({ id, label, icon, depth = 0, active, count, onClick }) {
  return (
    <div className={`tree-row ${active ? "active" : ""}`} style={{ paddingLeft: 10 + depth * 16 }} onClick={onClick}>
      <Icon name={icon} size={15} className="tree-icon" />
      <span style={{ flex: 1 }}>{label}</span>
      {typeof count === "number" ? (
        <span className="mono" style={{ fontSize: 11, color: "var(--text-faint)" }}>
          {count}
        </span>
      ) : null}
    </div>
  );
}

function Sidebar({ activeFolder, onNavigate, mobileOpen, onCloseMobile }) {
  const counts = {
    "professional-projects": PROJECTS["professional-projects"].length,
    "academic-projects": PROJECTS["academic-projects"].length,
    internships: INTERNSHIPS.length,
    cybersecurity: SECURITY.length,
    certifications: CERTIFICATIONS.length,
  };
  const path = getBreadcrumb(activeFolder);
  const navigate = (id) => {
    onNavigate(id);
    onCloseMobile();
  };

  return (
    <aside
      className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}
      style={{
        width: 250,
        flexShrink: 0,
        borderRight: "1px solid var(--border-soft)",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ padding: "18px 16px 14px", borderBottom: "1px solid var(--border-soft)" }}>
        <div style={{ fontWeight: 600, fontSize: 14.5 }}>{PROFILE.name}</div>
        <div className="mono" style={{ fontSize: 11.5, color: "var(--green)", marginTop: 3 }}>
          {PROFILE.handle}@portfolio
        </div>
        <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 8, lineHeight: 1.5 }}>{PROFILE.title}</div>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-link" style={{ padding: 6 }} aria-label="GitHub">
            <Icon name="github" size={14} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn-link" style={{ padding: 6 }} aria-label="LinkedIn">
            <Icon name="linkedin" size={14} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn-link" style={{ padding: 6 }} aria-label="Email">
            <Icon name="mail" size={14} />
          </a>
        </div>
      </div>

      <nav style={{ padding: "10px 8px", overflowY: "auto", flex: 1 }}>
        <TreeRow id="home" label="home" icon="home" active={activeFolder === "home"} onClick={() => navigate("home")} />

        <TreeRow
          id="software-engineering"
          label="software-engineering"
          icon={path.includes("software-engineering") ? "folder-open" : "folder"}
          active={activeFolder === "software-engineering"}
          onClick={() => navigate("software-engineering")}
        />
        <TreeRow
          id="professional-projects"
          label="professional-projects"
          icon="folder"
          depth={1}
          count={counts["professional-projects"]}
          active={activeFolder === "professional-projects"}
          onClick={() => navigate("professional-projects")}
        />
        <TreeRow
          id="academic-projects"
          label="academic-projects"
          icon="folder"
          depth={1}
          count={counts["academic-projects"]}
          active={activeFolder === "academic-projects"}
          onClick={() => navigate("academic-projects")}
        />

        <TreeRow
          id="internships"
          label="internships"
          icon="briefcase"
          count={counts["internships"]}
          active={activeFolder === "internships"}
          onClick={() => navigate("internships")}
        />
        <TreeRow
          id="cybersecurity"
          label="cybersecurity"
          icon="shield"
          count={counts["cybersecurity"]}
          active={activeFolder === "cybersecurity"}
          onClick={() => navigate("cybersecurity")}
        />
        <TreeRow
          id="certifications"
          label="certifications"
          icon="award"
          count={counts["certifications"]}
          active={activeFolder === "certifications"}
          onClick={() => navigate("certifications")}
        />
      </nav>

      <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border-soft)", fontSize: 11.5, color: "var(--text-faint)" }}>
        <div className="mono" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Icon name="map-pin" size={12} /> {PROFILE.location}
        </div>
      </div>
    </aside>
  );
}

/* ==========================================================================
   TOP BAR
   ========================================================================== */
function TopBar({ activeFolder, query, setQuery, onToggleMenu }) {
  const path = getBreadcrumb(activeFolder);
  return (
    <div
      style={{
        height: 46,
        borderBottom: "1px solid var(--border-soft)",
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: 14,
        background: "var(--bg)",
        flexShrink: 0,
      }}
    >
      <button
        onClick={onToggleMenu}
        className="menu-toggle"
        aria-label="Toggle navigation"
        style={{ display: "none", background: "none", border: "none", color: "var(--text)", cursor: "pointer", padding: 4, flexShrink: 0 }}
      >
        <Icon name="menu" size={18} />
      </button>
      <div className="win-dots" style={{ display: "flex", gap: 7, flexShrink: 0 }}>
        <span className="win-dot" style={{ background: "#f36" }} />
        <span className="win-dot" style={{ background: "#e8b34c" }} />
        <span className="win-dot" style={{ background: "#5fd97c" }} />
      </div>

      <div
        className="mono"
        style={{
          fontSize: 12.5,
          color: "var(--text-dim)",
          display: "flex",
          alignItems: "center",
          gap: 4,
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "var(--green)" }}>~</span>
        {path.slice(1).map((id, i) => (
          <span key={id} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span style={{ color: "var(--text-faint)" }}>/</span>
            <span style={{ color: i === path.length - 2 ? "var(--text)" : "var(--text-dim)" }}>{FOLDER_META[id].label}</span>
          </span>
        ))}
      </div>

      <div
        className="mono search-box"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "var(--bg-raised)",
          border: "1px solid var(--border)",
          borderRadius: 5,
          padding: "5px 9px",
          width: 220,
          flexShrink: 0,
        }}
      >
        <Icon name="search" size={13} className="tree-icon" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="grep -r ..."
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--text)",
            fontSize: 12.5,
            width: "100%",
          }}
        />
        {query ? (
          <button onClick={() => setQuery("")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-faint)", padding: 0 }} aria-label="Clear search">
            <Icon name="x" size={12} />
          </button>
        ) : null}
      </div>
    </div>
  );
}

/* ==========================================================================
   FOLDER CARD + FILE CARD
   ========================================================================== */
function FolderCard({ id, onOpen }) {
  const meta = FOLDER_META[id];
  const contents = getFolderContents(id);
  const itemCount = contents.folders.length + contents.files.length;
  return (
    <div className="fs-card" role="button" tabIndex={0} onClick={() => onOpen(id)} onKeyDown={(e) => e.key === "Enter" && onOpen(id)} style={{ padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{ color: "var(--blue)" }}>
          <Icon name={meta.icon === "folder" ? "folder" : meta.icon} size={22} />
        </div>
        <div style={{ fontWeight: 600, fontSize: 14.5 }}>{meta.label}</div>
      </div>
      <div className="mono" style={{ fontSize: 11.5, color: "var(--text-faint)" }}>
        {itemCount} item{itemCount === 1 ? "" : "s"}
      </div>
    </div>
  );
}

function FileCard({ item, onOpen }) {
  const status = item.status ? STATUS_META[item.status] : null;
  return (
    <div className="fs-card" role="button" tabIndex={0} onClick={() => onOpen(item)} onKeyDown={(e) => e.key === "Enter" && onOpen(item)}>
      <div
        style={{
          height: 128,
          background: item.cover ? "#05070a" : "var(--bg-raised)",
          borderBottom: "1px solid var(--border-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {item.cover ? (
          <img
            src={item.cover}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: item.coverFit === "contain" ? "contain" : "cover",
              padding: item.coverFit === "contain" ? 14 : 0,
            }}
          />
        ) : (
          <Icon name="file" size={30} className="tree-icon" />
        )}
      </div>
      <div style={{ padding: "13px 15px 15px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--text-faint)", display: "flex", alignItems: "center", gap: 5 }}>
          <Icon name="file" size={11} /> {item.name}
        </div>
        <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.3 }}>{item.title}</div>
        <div style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.5 }}>
          {(item.description || "").length > 110 ? item.description.slice(0, 108) + "…" : item.description}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto", paddingTop: 6 }}>
          {status ? (
            <span className="tag-pill" style={{ color: status.color, borderColor: status.color + "55" }}>
              {status.label}
            </span>
          ) : null}
          {(item.stack || item.tags || []).slice(0, 2).map((s) => (
            <span className="tag-pill" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   EMPTY STATE
   ========================================================================== */
function EmptyState({ folderId }) {
  const label = FOLDER_META[folderId] ? FOLDER_META[folderId].label : folderId;
  return (
    <div
      className="mono"
      style={{
        border: "1px dashed var(--border)",
        borderRadius: 8,
        padding: "40px 20px",
        textAlign: "center",
        color: "var(--text-faint)",
        fontSize: 12.5,
      }}
    >
      <div style={{ marginBottom: 6 }}>ls {label}/</div>
      <div>0 files — nothing has been added to this folder yet.</div>
      <div style={{ marginTop: 4 }}>Add an entry to the CERTIFICATIONS list in data.js to populate it.</div>
    </div>
  );
}

/* ==========================================================================
   DETAIL MODAL — rendered like `cat file.md` output
   ========================================================================== */
function DetailModal({ item, onClose }) {
  const path = ["~", "portfolio", item.folder, item.name].join("/");
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const status = item.status ? STATUS_META[item.status] : null;
  const gallery = item.gallery && item.gallery.length ? item.gallery : item.cover ? [item.cover] : [];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 16px",
            borderBottom: "1px solid var(--border-soft)",
          }}
        >
          <div style={{ display: "flex", gap: 7 }}>
            <span className="win-dot" style={{ background: "#f36" }} onClick={onClose} title="Close" role="button" />
            <span className="win-dot" style={{ background: "#e8b34c" }} />
            <span className="win-dot" style={{ background: "#5fd97c" }} />
          </div>
          <div className="mono" style={{ fontSize: 12, color: "var(--text-dim)", flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {PROFILE.handle}@portfolio:~$ cat {path}
          </div>
          <button onClick={onClose} aria-label="Close" style={{ background: "none", border: "none", color: "var(--text-faint)", cursor: "pointer" }}>
            <Icon name="x" size={16} />
          </button>
        </div>

        {gallery.length ? (
          <div style={{ display: "flex", overflowX: "auto", borderBottom: "1px solid var(--border-soft)", background: "#05070a", gap: gallery.length > 1 ? 1 : 0 }}>
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                style={{
                  height: 230,
                  width: gallery.length > 1 ? 200 : "100%",
                  minWidth: gallery.length > 1 ? 200 : "auto",
                  objectFit: item.coverFit === "contain" ? "contain" : "cover",
                  objectPosition: "top",
                  flexShrink: 0,
                  padding: item.coverFit === "contain" ? 16 : 0,
                }}
              />
            ))}
          </div>
        ) : null}

        <div style={{ padding: "22px 26px 26px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 4 }}>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, lineHeight: 1.3 }}>{item.title}</h2>
            {status ? (
              <span className="tag-pill" style={{ color: status.color, borderColor: status.color + "55", flexShrink: 0 }}>
                {status.label}
              </span>
            ) : null}
          </div>
          <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", marginBottom: 16 }}>
            {[item.period, item.org, item.role].filter(Boolean).join(" · ")}
          </div>

          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.65, marginBottom: 18 }}>{item.description}</p>

          {item.details && item.details.length ? (
            <div style={{ marginBottom: 18 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--green)", marginBottom: 8 }}>
                ## highlights
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 7 }}>
                {item.details.map((d, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: "var(--text-dim)", lineHeight: 1.55 }}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {(item.stack || item.tags) && (item.stack || item.tags).length ? (
            <div style={{ marginBottom: 18 }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--green)", marginBottom: 8 }}>
                ## stack
              </div>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                {(item.stack || item.tags).map((s) => (
                  <span className="tag-pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {item.note ? (
            <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", fontStyle: "italic", marginBottom: 18 }}>
              # {item.note}
            </div>
          ) : null}

          {item.links && item.links.length ? (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {item.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="btn-link">
                  <Icon name={l.label.toLowerCase().includes("github") ? "github" : "external"} size={13} />
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SEARCH RESULTS (flat, across every collection)
   ========================================================================== */
function SearchResults({ query, onOpen }) {
  const q = query.trim().toLowerCase();
  const results = allFiles().filter((f) => {
    const hay = [f.title, f.description, f.name, ...(f.stack || []), ...(f.tags || [])].join(" ").toLowerCase();
    return hay.includes(q);
  });

  return (
    <div>
      <div className="mono" style={{ fontSize: 12, color: "var(--text-faint)", marginBottom: 14 }}>
        grep -ril "{query}" ~/portfolio → {results.length} match{results.length === 1 ? "" : "es"}
      </div>
      {results.length === 0 ? (
        <div className="mono" style={{ color: "var(--text-faint)", fontSize: 12.5 }}>
          No matches. Try a technology name, a company, or a project title.
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14 }}>
          {results.map((item) => (
            <FileCard key={item.id} item={item} onOpen={onOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   MAIN FOLDER VIEW
   ========================================================================== */
function FolderView({ folderId, onNavigate, onOpenItem }) {
  const { folders, files } = getFolderContents(folderId);
  const isEmptyLeaf = folders.length === 0 && files.length === 0;

  return (
    <div>
      {folderId === "home" ? <BootHero /> : null}

      {isEmptyLeaf ? (
        <EmptyState folderId={folderId} />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 14, marginBottom: files.length ? 26 : 0 }}>
          {folders.map((id) => (
            <FolderCard key={id} id={id} onOpen={onNavigate} />
          ))}
        </div>
      )}

      {files.length ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14 }}>
          {files.map((item) => (
            <FileCard key={item.id} item={item} onOpen={onOpenItem} />
          ))}
        </div>
      ) : null}

      {folderId === "home" ? (
        <div className="mono" style={{ marginTop: 26, fontSize: 11.5, color: "var(--text-faint)", lineHeight: 1.7 }}>
          # tip: use the sidebar or the search bar above to browse — everything here mirrors a real file tree.
        </div>
      ) : null}
    </div>
  );
}

/* ==========================================================================
   APP ROOT
   ========================================================================== */
function App() {
  const [activeFolder, setActiveFolder] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef(null);

  const navigate = (id) => {
    setActiveFolder(id);
    if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: "auto" });
  };

  const openItem = (item) => setSelectedItem(item);
  const closeItem = () => setSelectedItem(null);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="crt-overlay" />
      <TopBar activeFolder={activeFolder} query={query} setQuery={setQuery} onToggleMenu={() => setMobileMenuOpen((v) => !v)} />
      <div style={{ display: "flex", flex: 1, minHeight: 0, position: "relative" }}>
        <Sidebar activeFolder={activeFolder} onNavigate={navigate} mobileOpen={mobileMenuOpen} onCloseMobile={() => setMobileMenuOpen(false)} />
        {mobileMenuOpen ? <div className="sidebar-backdrop" onClick={() => setMobileMenuOpen(false)} /> : null}
        <main ref={mainRef} style={{ flex: 1, overflowY: "auto", padding: "26px 28px 60px", minWidth: 0 }}>
          {query.trim() ? <SearchResults query={query} onOpen={openItem} /> : <FolderView folderId={activeFolder} onNavigate={navigate} onOpenItem={openItem} />}
        </main>
      </div>
      {selectedItem ? <DetailModal item={selectedItem} onClose={closeItem} /> : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
