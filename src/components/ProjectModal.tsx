import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdArrowOutward } from "react-icons/md";
import "./styles/ProjectModal.css";

interface Project {
  title: string;
  category: string;
  shortDescription: string;
  story: string;
  tools: string;
  thinking: string;
  image?: string;
  link?: string;
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project?.title === "Kira AI") {
      window.dispatchEvent(new CustomEvent("openKiraChat"));
      onClose();
    } else if (project?.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const hasExternalLink = project?.title === "Kira AI" || !!project?.link;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="pmodal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={onClose}
          data-cursor="disable"
        >
          <motion.div
            className="pmodal-panel"
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* Close */}
            <button
              className="pmodal-close"
              onClick={onClose}
              aria-label="Close"
              data-cursor="disable"
            >
              <MdClose />
            </button>

            {/* Product image */}
            {project.image && (
              <div className="pmodal-hero">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            <div className="pmodal-body">
              {/* Header */}
              <div className="pmodal-header">
                <div>
                  <h3 className="pmodal-title">{project.title}</h3>
                  <p className="pmodal-category">{project.category}</p>
                </div>
                {hasExternalLink && (
                  <button
                    className="pmodal-link-btn"
                    onClick={handleLinkClick}
                    aria-label={`Open ${project.title}`}
                    data-cursor="disable"
                  >
                    <MdArrowOutward />
                    <span>View project</span>
                  </button>
                )}
              </div>

              {/* Story */}
              <div className="pmodal-section">
                <span className="pmodal-label">The Story</span>
                <p>{project.story}</p>
              </div>

              {/* Tools */}
              <div className="pmodal-section pmodal-divider">
                <span className="pmodal-label">Tools &amp; Features</span>
                <p>{project.tools}</p>
              </div>

              {/* Thinking */}
              <div className="pmodal-section pmodal-divider">
                <span className="pmodal-label">Product Thinking</span>
                <p>{project.thinking}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
