// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const glslEditor = new GlslEditor('#glsl_editor', {
  canvas_size: 500,
  canvas_draggable: false,
  theme: 'monokai',
  multipleBuffers: true,
  watchHash: true,
  fileDrops: true,
  menu: true
});