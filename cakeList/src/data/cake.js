const productsData = [
  // ===== Bread =====
  {
    id: 1,
    name: "Bánh Mì Việt Nam",
    category: "Bread",
    desc: "Ổ bánh mì giòn rụm, thơm mùi bơ.",
    price: 15000,
    image: "https://images.pexels.com/photos/34040748/pexels-photo-34040748.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Bánh Croissant",
    category: "Bread",
    desc: "Croissant bơ kiểu Pháp, lớp vỏ giòn tan.",
    price: 28000,
    image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Bánh Mì Nguyên Cám",
    category: "Bread",
    desc: "Bánh mì healthy làm từ bột nguyên cám.",
    price: 20000,
    image: "https://images.pexels.com/photos/745988/pexels-photo-745988.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    name: "Brioche",
    category: "Bread",
    desc: "Bánh brioche mềm, thơm mùi bơ sữa.",
    price: 30000,
    image: "https://images.pexels.com/photos/11397856/pexels-photo-11397856.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // ===== Cake =====
  {
    id: 5,
    name: "Bánh Kem Socola",
    category: "Cake",
    desc: "Bánh kem socola hương vị đậm đà.",
    price: 120000,
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Bánh Kem Dâu",
    category: "Cake",
    desc: "Bánh mềm mịn, topping dâu tươi.",
    price: 130000,
    image: "https://images.pexels.com/photos/2323206/pexels-photo-2323206.jpeg"
  },
  {
    id: 7,
    name: "Red Velvet Cake",
    category: "Cake",
    desc: "Bánh velvet đỏ sang trọng, kem cheese.",
    price: 140000,
    image: "https://images.pexels.com/photos/30131920/pexels-photo-30131920.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Matcha Green Cake",
    category: "Cake",
    desc: "Bánh matcha Nhật Bản thanh nhẹ.",
    price: 135000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },

  // ===== Pastry =====
  {
    id: 9,
    name: "Egg Tart",
    category: "Pastry",
    desc: "Bánh tart trứng Hong Kong thơm béo.",
    price: 18000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 10,
    name: "Puff Pastry Phô Mai",
    category: "Pastry",
    desc: "Lớp vỏ ngàn lớp giòn, nhân phô mai.",
    price: 22000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 11,
    name: "Apple Strudel",
    category: "Pastry",
    desc: "Bánh táo kiểu Đức, thơm vị cinnamon.",
    price: 45000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 12,
    name: "Danish Pastry",
    category: "Pastry",
    desc: "Bánh ngàn lớp Đan Mạch, nhân mứt.",
    price: 38000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },

  // ===== Cookie =====
  {
    id: 13,
    name: "Chocolate Chip Cookie",
    category: "Cookie",
    desc: "Cookie giòn, chocolate chip đậm vị.",
    price: 15000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 14,
    name: "Butter Cookie",
    category: "Cookie",
    desc: "Bánh quy bơ Đan Mạch, thơm béo.",
    price: 12000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 15,
    name: "Matcha Cookie",
    category: "Cookie",
    desc: "Cookie vị trà xanh, nhẹ và thơm.",
    price: 18000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 16,
    name: "Oatmeal Raisin Cookie",
    category: "Cookie",
    desc: "Cookie yến mạch và nho khô, rất healthy.",
    price: 20000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },

  // ===== Donut =====
  {
    id: 17,
    name: "Chocolate Donut",
    category: "Donut",
    desc: "Bánh donut phủ socola ngọt ngào.",
    price: 25000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 18,
    name: "Strawberry Donut",
    category: "Donut",
    desc: "Donut phủ glaze dâu thơm.",
    price: 26000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 19,
    name: "Matcha Donut",
    category: "Donut",
    desc: "Donut phủ matcha Nhật Bản, không quá ngọt.",
    price: 27000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 20,
    name: "Caramel Donut",
    category: "Donut",
    desc: "Donut phủ caramel thơm béo.",
    price: 28000,
    image: "https://images.pexels.com/photos/29300014/pexels-photo-29300014.jpeg?auto=format&fit=crop&w=400&q=80"
  }
];

export default productsData;
