"use client";

import { useMemo } from "react";

type Item = {
  name: string;
  price: string;
  category: string;
};

const data: Item[] = [
  // 🥣 SOUPS
  { name: "Veg Soup", price: "₹90", category: "Soups" },
  { name: "Tomato Soup", price: "₹90", category: "Soups" },
  { name: "Hot N Sour", price: "₹100", category: "Soups" },
  { name: "Lemon Coriander", price: "₹120", category: "Soups" },
  { name: "Manchow Soup", price: "₹120", category: "Soups" },
  { name: "Chicken Soup", price: "₹130", category: "Soups" },
  { name: "Chicken Hot N Sour", price: "₹130", category: "Soups" },
  { name: "Chicken Lemon Coriander", price: "₹140", category: "Soups" },
  { name: "Chicken Manchow Soup", price: "₹140", category: "Soups" },
  // 🥤 BEVERAGES
  { name: "Aeration Drinks", price: "₹40", category: "Beverages" },
  { name: "Lemon Soda", price: "₹60", category: "Beverages" },
  { name: "Strawberry Punch", price: "₹90", category: "Beverages" },
  { name: "Peach Punch", price: "₹90", category: "Beverages" },
  { name: "Blue Lagoon Punch", price: "₹90", category: "Beverages" },
  { name: "Water Melon Punch", price: "₹90", category: "Beverages" },
  { name: "Mojito", price: "₹90", category: "Beverages" },
  { name: "Peach Tea", price: "₹90", category: "Beverages" },
  { name: "Coke Float (Coke + Vanilla Ice Cream)", price: "₹100", category: "Beverages" },
  { name: "Cold Coffee", price: "₹100", category: "Beverages" },
  { name: "Cold Coffee With Icecream", price: "₹120", category: "Beverages" },
  { name: "Banana Shake", price: "₹120", category: "Beverages" },
  { name: "Mango Shake (Seasonal)", price: "₹140", category: "Beverages" },
  { name: "Oreo Shake", price: "₹150", category: "Beverages" },
  { name: "Masala Tea", price: "₹20", category: "Beverages" },
  { name: "Ginger Lemon Tea", price: "₹40", category: "Beverages" },
  { name: "Hot Coffee", price: "₹50", category: "Beverages" },
  { name: "Hot Chocolate", price: "₹140", category: "Beverages" },
  { name: "Hot Chocolate Float", price: "₹160", category: "Beverages" },
  // 🍔 CONTINENTAL
  { name: "Veg Burger", price: "₹70", category: "Continental" },
  { name: "Veg Cheese Burger", price: "₹110", category: "Continental" },
  { name: "Grilled Sandwich", price: "₹90", category: "Continental" },
  { name: "Garlic Bread", price: "₹120", category: "Continental" },
  { name: "Stuff Garlic Bread", price: "₹180", category: "Continental" },
  { name: "French Fries", price: "₹90/140", category: "Continental" },
  { name: "Peri Peri Fries", price: "₹100/150", category: "Continental" },
  { name: "Potato Wedges", price: "₹110/160", category: "Continental" },
  { name: "Hara Bhara Kebab", price: "₹220", category: "Continental" },
  { name: "Veg Pasta (Red/White/Mixed)", price: "₹250", category: "Continental" },
  { name: "Chicken Burger", price: "₹120", category: "Continental" },
  { name: "Chicken Cheese Burger", price: "₹150", category: "Continental" },
  { name: "Chicken Grill Sandwich", price: "₹130", category: "Continental" },
  { name: "Chicken Pasta", price: "₹280", category: "Continental" },
  // 🍕 PIZZAS
  { name: "Margarita Pizza", price: "₹200/330", category: "Pizzas" },
  { name: "Veg Heaven (Onion/Capsicum/Paneer)", price: "₹230/350", category: "Pizzas" },
  { name: "Veggy Delight (Onion/Capsicum/Corn/Mushroom)", price: "₹250/380", category: "Pizzas" },
  { name: "Mexican Pizza (Jalapeno/Red Pepper/Olive)", price: "₹250/380", category: "Pizzas" },
  { name: "Chicken Pizza", price: "₹290/390", category: "Pizzas" },
  { name: "Tandoori Chicken Pizza", price: "₹300/450", category: "Pizzas" },
  { name: "Farm House Pizza 98 Special", price: "₹520", category: "Pizzas" },
  // 🔥 TANDOORI SNACKS
  { name: "Mushroom Tikka", price: "₹180", category: "Tandoori Snacks" },
  { name: "Soya Malai Chaap", price: "₹220", category: "Tandoori Snacks" },
  { name: "Achari Chaap", price: "₹220", category: "Tandoori Snacks" },
  { name: "Veg Seekh Kebab", price: "₹260", category: "Tandoori Snacks" },
  { name: "Paneer Tikka", price: "₹260", category: "Tandoori Snacks" },
  { name: "Salona Paneer Tikka", price: "₹280", category: "Tandoori Snacks" },
  { name: "Tandoori Platter Veg", price: "₹799", category: "Tandoori Snacks" },
  { name: "Tandoori Chicken", price: "₹260/490", category: "Tandoori Snacks" },
  { name: "Afgani Chicken", price: "₹320/570", category: "Tandoori Snacks" },
  { name: "Chicken Tikka (6 Pcs)", price: "₹320", category: "Tandoori Snacks" },
  { name: "Tangri Kebab", price: "₹350", category: "Tandoori Snacks" },
  { name: "Seekh Kebab (4)", price: "₹350", category: "Tandoori Snacks" },
  { name: "Mutton Seekh Kebab (4)", price: "₹350", category: "Tandoori Snacks" },
  { name: "Tandoori Platter Non-veg", price: "₹899", category: "Tandoori Snacks" },
  // 🍳 BREAKFAST
  { name: "Aloo Prantha", price: "₹60", category: "Breakfast" },
  { name: "Gobhi Prantha", price: "₹60", category: "Breakfast" },
  { name: "Onion Prantha", price: "₹60", category: "Breakfast" },
  { name: "Mixed Prantha", price: "₹70", category: "Breakfast" },
  { name: "Paneer Prantha", price: "₹90", category: "Breakfast" },
  { name: "Extra Butter", price: "₹20", category: "Breakfast" },
  { name: "Curd (Dahi)", price: "₹70", category: "Breakfast" },
  { name: "Curd - Half", price: "₹40", category: "Breakfast" },
  { name: "Boiled Eggs", price: "₹20", category: "Breakfast" },
  { name: "Bread Butter (Single Piece)", price: "₹25", category: "Breakfast" },
  { name: "Egg Bhurji (2 Eggs)", price: "₹60", category: "Breakfast" },
  { name: "Choley Bhatrey", price: "₹100", category: "Breakfast" },
  { name: "Extra Chole", price: "₹50", category: "Breakfast" },
  { name: "Single Bhatura", price: "₹25", category: "Breakfast" },
  { name: "Half Fry Egg (2 Eggs)", price: "₹50", category: "Breakfast" },
  { name: "Maggie", price: "₹50", category: "Breakfast" },
  { name: "Mix Pakode", price: "₹140", category: "Breakfast" },
  { name: "Omelette (2 Eggs)", price: "₹50", category: "Breakfast" },
  { name: "Omelette Prantha", price: "₹70", category: "Breakfast" },
  { name: "Raita", price: "₹90", category: "Breakfast" },
  { name: "Roasted Pappad", price: "₹20", category: "Breakfast" },
  // 🍛 MAIN COURSE NON VEG
  { name: "Egg Curry (4 Eggs)", price: "₹280/550", category: "Main Course Non Veg" },
  { name: "Butter Chicken", price: "₹280/550", category: "Main Course Non Veg" },
  { name: "Kadhai Chicken", price: "₹280/500", category: "Main Course Non Veg" },
  { name: "Chicken Curry", price: "₹280/500", category: "Main Course Non Veg" },
  { name: "Chicken Masala", price: "₹280/530", category: "Main Course Non Veg" },
  { name: "Chicken Handi", price: "₹280/530", category: "Main Course Non Veg" },
  { name: "Chicken Hariyali", price: "₹300/580", category: "Main Course Non Veg" },
  { name: "Rahra Chicken", price: "₹280/550", category: "Main Course Non Veg" },
  { name: "Mutton Do Pyaza", price: "₹300/580", category: "Main Course Non Veg" },
  { name: "Mutton Curry", price: "₹300/580", category: "Main Course Non Veg" },
  { name: "Mutton Masala", price: "₹330/600", category: "Main Course Non Veg" },
  { name: "Mutton Rogan Josh", price: "₹350/600", category: "Main Course Non Veg" },
  { name: "Mutton Rahra", price: "₹350/600", category: "Main Course Non Veg" },
  // 🍚 RICE & BIRYANI
  { name: "Plain Rice", price: "₹70/120", category: "Rice & Biryani" },
  { name: "Jeera Rice", price: "₹130", category: "Rice & Biryani" },
  { name: "Veg Pulao", price: "₹150", category: "Rice & Biryani" },
  { name: "Veg Biryani", price: "₹170", category: "Rice & Biryani" },
  { name: "Egg Biryani", price: "₹190", category: "Rice & Biryani" },
  { name: "Chicken Biryani", price: "₹220", category: "Rice & Biryani" },
  { name: "Mutton Biryani", price: "₹290", category: "Rice & Biryani" },
  // 🥖 BREADS
  { name: "Plain Roti", price: "₹14", category: "Breads" },
  { name: "Butter Roti", price: "₹18", category: "Breads" },
  { name: "Missi Roti", price: "₹20", category: "Breads" },
  { name: "Naan", price: "₹25", category: "Breads" },
  { name: "Lachha Parantha", price: "₹25", category: "Breads" },
  { name: "Butter Naan", price: "₹30", category: "Breads" },
  { name: "Garlic Naan", price: "₹40", category: "Breads" },
  { name: "Cheese Naan", price: "₹65", category: "Breads" },
  { name: "Chicken Keema Naan", price: "₹150", category: "Breads" },
  { name: "Mutton Keema Naan", price: "₹200", category: "Breads" },
];

type Props = {
  category: string;
  setCart: any;
  setOpen: any;
};

export default function MenuList({ category, setCart, setOpen }: Props) {
  const filtered = useMemo(() => {
    return category === "All Items"
      ? data
      : data.filter((item) => item.category === category);
  }, [category]);

  const handleAdd = (item: Item) => {
    setCart((prev: any) => [...prev, item]);
    setTimeout(() => setOpen(true), 100);
  };

  const hasDualPrice = (price: string) => price.includes("/");

  return (
    <section className="py-4 px-4 md:px-8 pb-32">
      <div className="max-w-2xl mx-auto space-y-2">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="group relative flex items-center justify-between gap-4 px-5 py-4 rounded-xl border transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(200,169,106,0.03) 100%)",
              borderColor: "rgba(200,169,106,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,106,0.35)";
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(200,169,106,0.07) 100%)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,106,0.1)";
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(200,169,106,0.03) 100%)";
            }}
          >
            {/* Left — name */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-sm md:text-base font-medium leading-snug truncate pr-2">
                {item.name}
              </h3>
              {hasDualPrice(item.price) && (
                <p className="text-[10px] text-gray-600 mt-0.5 tracking-widest uppercase">
                  Half / Full
                </p>
              )}
            </div>

            {/* Right — price + add */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <span className="text-[var(--gold)] font-bold text-sm md:text-base tabular-nums">
                {item.price}
              </span>
              <button
                onClick={() => handleAdd(item)}
                className="relative w-8 h-8 rounded-full border border-[var(--gold)]/60 flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black active:scale-90 transition-all duration-200 text-lg leading-none"
                aria-label={`Add ${item.name}`}
              >
                +
              </button>
            </div>

            {/* Subtle left accent line on hover */}
            <div
              className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">
            <p className="font-cinzel text-lg">Nothing here yet</p>
          </div>
        )}
      </div>
    </section>
  );
}