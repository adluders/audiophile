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
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
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
      title: "Graphic",
      type: "image",
      name: "graphic",
    },
  ],
};
