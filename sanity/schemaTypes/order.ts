export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "zipcode",
      title: "Zip Code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Product Title" },
            { name: "price", type: "number", title: "Product Price" },
            { name: "quantity", type: "number", title: "Product Quantity" },
          ],
        },
      ],
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Dispatched", value: "dispatched" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
};
