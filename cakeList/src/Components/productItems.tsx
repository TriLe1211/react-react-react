export function ProductItem({ id,name, category, desc, price, image }) {
  return (
    <div className="!p-5 w-54 h-72 border rounded-lg shadow-xl bg-white hover:scale-[1.02] transition items-center flex flex-col text-center justify-center">
      <h3 className="font-bold text-lg">{name}</h3>
        <img src={image} alt={name} className="w-32 h-32 object-cover mt-2 rounded-md" />
      <p className="text-sm text-gray-500">{category}</p>
      <p className="mt-2 italic">{desc}</p>
      <p className="mt-3 font-semibold text-green-600">{price.toLocaleString()}</p>
    </div>
  );
}
