export default {
  title: "Item",
  name: "item",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "itemName",
      type: "string",
    },
    {
      title: "Slug",
      type: "slug",
      name: "link",
      options: {
        source: "itemName",
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
