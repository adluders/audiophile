export default {
  title: "Item",
  name: "item",
  type: "object",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      type: "slug",
      name: "slug",
      options: {
        source: "name",
      },
    },
    {
      title: "Image",
      name: "image",
      type: "array",
      of: [{ type: "graphic" }],
    },
  ],
};
