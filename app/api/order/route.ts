let orderCount = 0;
let lastDate = "";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, cart, total, time, quantities, people } = body;

  const today = new Date().toDateString();
  if (today !== lastDate) {
    orderCount = 0;
    lastDate = today;
  }

  orderCount++;

  const orderTime = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const itemsText = cart
    .map((item: any, i: number) => {
      const prices = item.price.match(/\d+/g)?.map(Number) || [0];
      const price = prices[0];
      return `• ${item.name} ×${quantities?.[i] || 1} = ₹${price * (quantities?.[i] || 1)}`;
    })
    .join("\n");

  const message = `
🧾 *Café 98 Order #${orderCount}*

🕒 ${orderTime}

👤 Name: ${name}
📞 Phone: ${phone}
👥 People: ${people}

🍽 Items:
${itemsText}

⏱ Pickup: ${time} min

💰 Total: ₹${total}
`.trim();

  const whatsappNumber = "917018796714";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return Response.json({ url });
}