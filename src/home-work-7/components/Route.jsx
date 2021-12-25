import React from 'react';

export default function Route({ path, children, exact }) {
  const { pathname } = window.location;

  if (exact) {
    if (pathname === path) {
      return children;
    }
  } else {
    if (pathname.includes(path)) {
      return children;
    } else {
      return null;
    }
  }
  return null;
}
