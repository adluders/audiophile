export default {
  name: "galleryItem",
  title: "Gallery Item",
  type: "object",
  fields: [
    { name: "first", title: "First", type: "array", of: [{ type: "graphic" }] },
    {
      name: "second",
      title: "Second",
      type: "array",
      of: [{ type: "graphic" }],
    },
    { name: "third", title: "Third", type: "array", of: [{ type: "graphic" }] },
  ],
};
