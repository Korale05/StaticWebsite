// ========================================================
// Configuration: File List
// To add more files:
// 1. Put your ZIP file in the "files" folder.
// 2. Add an entry to the array below.
// ========================================================
const FILES_LIST = [
  {
    name: "Project1ZIP.zip",
    path: "files/Project1ZIP.zip",
    size: "8.4 MB"
  },
  {
    name: "SpringProject_ZIP.zip",
    path: "files/SpringProject_ZIP.zip",
    size: "31.8 MB"
  }
];

// ========================================================
// Render File List Dynamically into the DOM
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  const fileListContainer = document.getElementById("file-list");

  if (!fileListContainer) return;

  // Clear any existing contents or fallbacks
  fileListContainer.innerHTML = "";

  if (FILES_LIST.length === 0) {
    fileListContainer.innerHTML = `
      <div class="empty-state">
        <p>No files currently available for download.</p>
      </div>
    `;
    return;
  }

  // Render each file as a clean download item
  FILES_LIST.forEach((file) => {
    const item = document.createElement("div");
    item.className = "file-item";

    item.innerHTML = `
      <div class="file-item-left">
        <div class="file-icon" aria-hidden="true">
          <!-- ZIP Archive Icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="10" y1="12" x2="10.01" y2="12"></line>
            <line x1="10" y1="15" x2="10.01" y2="15"></line>
            <line x1="10" y1="18" x2="10.01" y2="18"></line>
            <rect x="9" y="10" width="2" height="9" rx="0.5"></rect>
          </svg>
        </div>
        <div class="file-meta">
          <span class="file-name" title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</span>
          ${file.size ? `<span class="file-size">${escapeHtml(file.size)}</span>` : ""}
        </div>
      </div>
      <a href="${encodeURI(file.path)}" download="${escapeHtml(file.name)}" class="download-btn" aria-label="Download ${escapeHtml(file.name)}">
        <!-- Download Arrow Icon -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Download</span>
      </a>
    `;

    fileListContainer.appendChild(item);
  });
});

// Helper function to safely escape strings for HTML
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
