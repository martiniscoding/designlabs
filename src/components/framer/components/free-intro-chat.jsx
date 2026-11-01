/**
 * Reframe component: Free Intro Chat
 *
 * This runtime is generated from Framer to preserve its variants, animations,
 * styles, and nested component behavior. Keep custom styling in your app CSS
 * or pass className/style when the component's internal styles allow it.
 * Usage and prop documentation: https://reframe.elxr.studio/docs
 */
import { jsx } from "react/jsx-runtime";
import RuntimeComponent from "./free-intro-chat.runtime.jsx";

const runtimeDefaults = RuntimeComponent.defaultProps || {};

function normalizeBoxShadow(value) {
  if (typeof value === "string") return value;
  if (!Array.isArray(value)) return "";
  return value.map((shadow) => {
    const inset = shadow.inset ? "inset " : "";
    const x = shadow.x ?? 0;
    const y = shadow.y ?? 0;
    const blur = shadow.blur ?? 0;
    const spread = shadow.spread ?? 0;
    return `${inset}${x}px ${y}px ${blur}px ${spread}px ${shadow.color ?? "transparent"}`;
  }).join(", ");
}

function normalizeRuntimeProps(inputProps) {
  const normalized = { ...runtimeDefaults, ...(inputProps || {}) };
  for (const key of Object.keys(normalized)) {
    if (normalized[key] === undefined) {
      if (runtimeDefaults[key] === undefined) delete normalized[key];
      else normalized[key] = runtimeDefaults[key];
    }
  }


  return normalized;
}

const FreeIntroChat = (inputProps = {}) => {
  const normalized = normalizeRuntimeProps(inputProps);
  return <RuntimeComponent {...normalized} />;
};

Object.assign(FreeIntroChat, RuntimeComponent);
FreeIntroChat.Responsive = (inputProps = {}) => {
  const normalized = normalizeRuntimeProps(inputProps);
  return <RuntimeComponent.Responsive {...normalized} />;
};

export default FreeIntroChat;
