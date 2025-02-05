export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "stripeId",
        title: "Stripe ID",
        type: "string",
      },
      {
        name: "customerEmail",
        title: "Customer Email",
        type: "string",
      },
      {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
      },
      {
        name: "currency",
        title: "Currency",
        type: "string",
      },
      {
        name: "status",
        title: "Status",
        type: "string",
        options: {
          list: ["pending", "completed", "failed"],
        },
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
      },
    ],
  };
  